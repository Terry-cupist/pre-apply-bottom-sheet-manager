import { useMemo, useRef } from "react";
import {
  CupistBottomSheetController,
  CupistBottomSheetControlRef,
  CupistBottomSheetModalProps,
} from "./BottomSheetController";
import {
  CupistDefaultBottomSheetComponent,
  useCupistBottomSheetContext,
} from "./BottomSheetProvider";

type CupistBottomSheetOpenOptions<P extends CupistBottomSheetModalProps> = {
  /**
   * ModalComponent에 전달할 추가 props
   */
  modalProps?: Omit<P, "onDismiss">;
};

type CupistBottomSheetHookReturnType = {
  /**
   * Bottom sheet를 열고 컨텐츠를 표시합니다
   * @param ModalComponent - open, close 메서드를 가진 ref와 onDismiss prop을 가지는 컴포넌트
   * @param component - Bottom sheet 내부에 표시할 컴포넌트
   * @param options - ModalComponent에 전달할 추가 props
   */
  open: (
    component: JSX.Element,
    options?: CupistBottomSheetOpenOptions<CupistBottomSheetModalProps> & {
      ModalComponent?: CupistDefaultBottomSheetComponent;
      ContainerComponent?: React.ForwardRefExoticComponent<any>;
      containerProps?: any;
    },
  ) => void;
  /**
   * 현재 열려있는 bottom sheet를 닫습니다
   */
  close: () => void;
};

export function useCupistBottomSheet(): CupistBottomSheetHookReturnType {
  const context = useCupistBottomSheetContext();

  const { mount, unmount, DefaultBottomSheet } = context;

  const controllerRef = useRef<CupistBottomSheetControlRef | null>(null);

  return useMemo(
    () => ({
      open: (component, options = {}) => {
        mount(
          <CupistBottomSheetController
            key={Date.now()}
            ref={controllerRef}
            ModalComponent={options.ModalComponent ?? DefaultBottomSheet}
            modalProps={options.modalProps}
            ContainerComponent={options.ContainerComponent}
            containerProps={options.containerProps}
            onDismiss={unmount}
          >
            {component}
          </CupistBottomSheetController>,
        );
      },
      close: () => {
        controllerRef.current?.close();
      },
    }),
    [mount, unmount],
  );
}
