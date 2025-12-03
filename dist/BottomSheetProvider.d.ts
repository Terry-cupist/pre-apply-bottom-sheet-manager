import { ComponentType, PropsWithChildren, ReactNode, Ref } from "react";
import { BottomSheetModalRef } from "./BottomSheetController";
type BottomSheetContextType = {
    DefaultBottomSheet: ComponentType<{
        ref?: Ref<BottomSheetModalRef>;
    }>;
    mount(el: ReactNode): void;
    unmount(): void;
} | null;
interface BottomSheetProviderProps extends PropsWithChildren {
    DefaultBottomSheet: ComponentType<{
        ref?: Ref<BottomSheetModalRef>;
    }>;
}
export declare const BottomSheetContext: import("react").Context<BottomSheetContextType>;
export declare function BottomSheetProvider({ children, DefaultBottomSheet, }: BottomSheetProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BottomSheetProvider.d.ts.map