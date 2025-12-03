import { PropsWithChildren, ReactNode } from "react";
import { BottomSheetModalProps, BottomSheetModalRef } from "./BottomSheetController";
export type DefaultBottomSheetComponent = React.ForwardRefExoticComponent<BottomSheetModalProps & React.RefAttributes<BottomSheetModalRef>>;
type BottomSheetContextType = {
    DefaultBottomSheet: DefaultBottomSheetComponent;
    mount(el: ReactNode): void;
    unmount(): void;
} | null;
export interface BottomSheetProviderProps extends PropsWithChildren {
    Provider?: ((props: PropsWithChildren) => React.JSX.Element) | React.ExoticComponent;
    DefaultBottomSheet: DefaultBottomSheetComponent;
}
export declare const BottomSheetContext: import("react").Context<BottomSheetContextType>;
export declare const useBottomSheet: () => {
    DefaultBottomSheet: DefaultBottomSheetComponent;
    mount(el: ReactNode): void;
    unmount(): void;
};
export declare function BottomSheetProvider({ children, Provider, DefaultBottomSheet, }: BottomSheetProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BottomSheetProvider.d.ts.map