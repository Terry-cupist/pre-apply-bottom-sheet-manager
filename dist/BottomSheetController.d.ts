import { PropsWithChildren } from "react";
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
    ModalComponent: React.ForwardRefExoticComponent<CupistBottomSheetModalProps & React.RefAttributes<CupistBottomSheetModalRef>>;
    /**
     * ModalComponent에 전달할 추가 props
     */
    modalProps?: Omit<CupistBottomSheetModalProps, "onDismiss">;
    ContainerComponent?: React.ForwardRefExoticComponent<any>;
    containerProps?: any;
    /**
     * Bottom sheet가 닫힐 때 호출되는 콜백
     */
    onDismiss: () => void;
}
export declare const CupistBottomSheetController: import("react").ForwardRefExoticComponent<Props & {
    children?: import("react").ReactNode | undefined;
} & import("react").RefAttributes<CupistBottomSheetControlRef>>;
export {};
//# sourceMappingURL=BottomSheetController.d.ts.map