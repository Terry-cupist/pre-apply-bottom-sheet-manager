import { BottomSheetModalProps } from "./BottomSheetController";
import { DefaultBottomSheetComponent } from "./BottomSheetProvider";
type BottomSheetOpenOptions<P extends BottomSheetModalProps> = {
    /**
     * ModalComponent에 전달할 추가 props
     */
    modalProps?: Omit<P, "onDismiss">;
};
type BottomSheetHookReturnType = {
    /**
     * Bottom sheet를 열고 컨텐츠를 표시합니다
     * @param ModalComponent - open, close 메서드를 가진 ref와 onDismiss prop을 가지는 컴포넌트
     * @param component - Bottom sheet 내부에 표시할 컴포넌트
     * @param options - ModalComponent에 전달할 추가 props
     */
    open: (ModalComponent: DefaultBottomSheetComponent, component: JSX.Element, options?: BottomSheetOpenOptions<BottomSheetModalProps>) => void;
    /**
     * 현재 열려있는 bottom sheet를 닫습니다
     */
    close: () => void;
};
export declare function useBottomSheet(): BottomSheetHookReturnType;
export {};
//# sourceMappingURL=useBottomSheet.d.ts.map