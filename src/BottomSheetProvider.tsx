import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { BottomSheetModalProvider } from "./bottomSheet";
import {
  CupistBottomSheetModalProps,
  CupistBottomSheetModalRef,
} from "./BottomSheetController";

export type CupistDefaultBottomSheetComponent = React.ForwardRefExoticComponent<
  CupistBottomSheetModalProps & React.RefAttributes<CupistBottomSheetModalRef>
>;

type CupistBottomSheetContextType = {
  DefaultBottomSheet: CupistDefaultBottomSheetComponent;
  mount(el: ReactNode): void;
  unmount(): void;
} | null;

interface PendingMount {
  element: ReactNode;
  resolve: () => void;
}

export interface CupistBottomSheetProviderProps extends PropsWithChildren {
  DefaultBottomSheet: CupistDefaultBottomSheetComponent;
  bottomInsetColor?: string;
}

export const CupistBottomSheetContext =
  createContext<CupistBottomSheetContextType>(null);
export const useCupistBottomSheetContext = () => {
  const context = useContext(CupistBottomSheetContext);

  if (context === null) {
    throw new Error(
      "useBottomSheet is only available within BottomSheetProvider.",
    );
  }
  return context;
};

export function CupistBottomSheetProvider({
  children,
  DefaultBottomSheet,
  bottomInsetColor = "white",
}: CupistBottomSheetProviderProps) {
  const [element, setElement] = useState<ReactNode | null>(null);

  const elementRef = useRef<ReactNode | null>(element);
  const pendingMountRef = useRef<PendingMount | null>(null);
  const pendingResolvedRef = useRef<boolean>(false);

  const syncSetElement = useCallback((el: ReactNode | null) => {
    elementRef.current = el;
    setElement(el);
  }, []);

  const mount = useCallback(
    (el: ReactNode) => {
      if (elementRef.current || pendingMountRef.current) {
        if (pendingMountRef.current) {
          pendingMountRef.current.resolve();
        }
        pendingResolvedRef.current = false;
        pendingMountRef.current = {
          element: el,
          resolve: () => {
            if (pendingResolvedRef.current) return;
            if (!elementRef.current) {
              syncSetElement(el);
              pendingMountRef.current = null;
              pendingResolvedRef.current = true;
            }
          },
        };
      } else {
        syncSetElement(el);
      }
    },
    [syncSetElement],
  );

  const unmount = useCallback(() => {
    syncSetElement(null);

    if (pendingMountRef.current) {
      const { resolve } = pendingMountRef.current;
      pendingMountRef.current = null;
      resolve();
    }
  }, [syncSetElement]);

  const context = useMemo(
    () => ({ mount, unmount, DefaultBottomSheet }),
    [mount, unmount, DefaultBottomSheet],
  );

  return (
    <CupistBottomSheetContext.Provider value={context}>
      <BottomSheetModalProvider>
        {children}
        {element}
      </BottomSheetModalProvider>
    </CupistBottomSheetContext.Provider>
  );
}
