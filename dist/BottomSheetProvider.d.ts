import { PropsWithChildren, ReactNode } from "react";
import { CupistBottomSheetModalProps, CupistBottomSheetModalRef } from "./BottomSheetController";
export type CupistDefaultBottomSheetComponent = React.ForwardRefExoticComponent<CupistBottomSheetModalProps & React.RefAttributes<CupistBottomSheetModalRef>>;
type CupistBottomSheetContextType = {
    DefaultBottomSheet: CupistDefaultBottomSheetComponent;
    mount(el: ReactNode): void;
    unmount(): void;
} | null;
export interface CupistBottomSheetProviderProps extends PropsWithChildren {
    DefaultBottomSheet: CupistDefaultBottomSheetComponent;
    bottomInsetColor?: string;
}
export declare const CupistBottomSheetContext: import("react").Context<CupistBottomSheetContextType>;
export declare const useCupistBottomSheetContext: () => {
    DefaultBottomSheet: CupistDefaultBottomSheetComponent;
    mount(el: ReactNode): void;
    unmount(): void;
};
export declare function CupistBottomSheetProvider({ children, DefaultBottomSheet, bottomInsetColor, }: CupistBottomSheetProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BottomSheetProvider.d.ts.map