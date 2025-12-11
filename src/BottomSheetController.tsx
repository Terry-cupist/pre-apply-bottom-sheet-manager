import { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import {
  forwardRef,
  Fragment,
  PropsWithChildren,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * Bottom sheet 컴포넌트가 가져야 하는 ref 메서드 인터페이스
 */
export interface CupistBottomSheetModalRef {
  open: () => void;
  close: () => void;
}

/**
 * Bottom sheet 컴포넌트가 받아야 하는 props 인터페이스
 */
export interface CupistBottomSheetModalProps extends PropsWithChildren {
  onDismiss: () => void;
  [key: string]: any;
}

/**
 * BottomSheetController가 외부에 노출하는 ref 인터페이스
 */
export interface CupistBottomSheetControlRef {
  close: () => void;
}

interface Props {
  /**
   * Bottom sheet UI 컴포넌트
   * - open, close 메서드를 가진 ref 필수
   * - onDismiss prop 필수
   */
  ModalComponent: React.ForwardRefExoticComponent<
    CupistBottomSheetModalProps & React.RefAttributes<CupistBottomSheetModalRef>
  >;
  /**
   * ModalComponent에 전달할 추가 props
   */
  modalProps?: Omit<CupistBottomSheetModalProps, "onDismiss">;
  ContainerComponent?:
    | typeof BottomSheetScrollView
    | typeof BottomSheetView
    | React.ForwardRefExoticComponent<any>;
  containerProps?: any;
  /**
   * Bottom sheet가 닫힐 때 호출되는 콜백
   */
  onDismiss: () => void;
}

export const CupistBottomSheetController = forwardRef(
  (
    {
      children,
      ModalComponent,
      modalProps,
      ContainerComponent,
      containerProps,
      onDismiss,
    }: PropsWithChildren<Props>,
    ref: Ref<CupistBottomSheetControlRef>,
  ) => {
    const { bottom: bottomInset } = useSafeAreaInsets();
    const bottomSheetRef = useRef<CupistBottomSheetModalRef>(null);
    const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(false);

    const handleBottomSheetClose = useCallback(
      () => setIsOpenBottomSheet(false),
      [],
    );

    useImperativeHandle(ref, () => ({ close: handleBottomSheetClose }), [
      handleBottomSheetClose,
    ]);

    useEffect(() => {
      requestAnimationFrame(() => setIsOpenBottomSheet(true));
    }, []);

    useEffect(() => {
      if (isOpenBottomSheet) {
        bottomSheetRef.current?.open?.();
      } else {
        bottomSheetRef.current?.close?.();
      }
    }, [isOpenBottomSheet]);

    const Container = ContainerComponent ?? Fragment;
    const _containerProps = containerProps ?? null;
    return (
      <ModalComponent
        ref={bottomSheetRef}
        bottomInset={Math.max(12, bottomInset)}
        {...(modalProps as CupistBottomSheetModalProps)}
        onDismiss={onDismiss}
      >
        <Container {..._containerProps}>{children}</Container>
      </ModalComponent>
    );
  },
);
