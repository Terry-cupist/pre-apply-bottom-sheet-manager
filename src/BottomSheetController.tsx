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
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useKeyboard } from "./useKeyboard";

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
    const bottomSheetRef = useRef<CupistBottomSheetModalRef>(null);
    const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(false);

    const { bottom: bottomInset } = useSafeAreaInsets();
    const keyboard = useKeyboard();
    const insetHeight = useSharedValue(0);

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

    useEffect(() => {
      if (!bottomInset) {
        return;
      }
      if (keyboard.willStatus === "show") {
        insetHeight.value = withTiming(0, { duration: 100 });
      } else {
        insetHeight.value = withTiming(Math.max(12, bottomInset), {
          duration: 100,
        });
      }
    }, [keyboard.willStatus, bottomInset, insetHeight]);

    const animatedStyle = useAnimatedStyle(() => ({
      height: insetHeight.value,
    }));

    const Container = ContainerComponent ?? Fragment;
    const _containerProps = containerProps ?? null;

    return (
      <ModalComponent
        ref={bottomSheetRef}
        {...(modalProps as CupistBottomSheetModalProps)}
        onDismiss={onDismiss}
      >
        <Container {..._containerProps}>
          {children}
          <Animated.View style={[style.inset, animatedStyle]} />
        </Container>
      </ModalComponent>
    );
  },
);

const style = StyleSheet.create({
  inset: {
    width: "100%",
    backgroundColor: "red",
  },
});
