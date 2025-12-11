import { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useKeyboard } from "./useKeyboard";

export const BottomInsetBar = ({
  bottomInsetColor,
}: {
  bottomInsetColor: string;
}) => {
  const { bottom: bottomInset } = useSafeAreaInsets();
  const keyboard = useKeyboard();
  const insetHeight = useSharedValue(0);
  const [showBottomInset, setShowBottomInset] = useState(false);

  useEffect(() => {
    if (!bottomInset) {
      return;
    }
    if (keyboard.willStatus === "show") {
      setShowBottomInset(false);
      insetHeight.value = withTiming(0, { duration: 100 });
    } else {
      setShowBottomInset(true);
      insetHeight.value = withTiming(Math.max(12, bottomInset), {
        duration: 100,
      });
    }
  }, [keyboard.willStatus, bottomInset, insetHeight]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: insetHeight.value,
  }));

  if (keyboard.willStatus === "show" || showBottomInset) return null;

  return (
    <Animated.View
      style={[
        {
          zIndex: 10,
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: bottomInsetColor,
        },
        animatedStyle,
      ]}
    />
  );
};
