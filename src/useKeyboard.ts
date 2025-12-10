import { useEffect, useState } from "react";
import { EmitterSubscription, Keyboard, Platform } from "react-native";

type StatusType = "show" | "hide";

export const useKeyboard = () => {
  const [keyboardWillStatus, setKeyboardWillStatus] = useState<StatusType>();
  const [keyboardDidStatus, setKeyboardDidStatus] = useState<StatusType>();

  useEffect(() => {
    const subscriptions: EmitterSubscription[] = [];

    // for iOS, android not working
    if (Platform.OS !== "android") {
      subscriptions.push(
        Keyboard.addListener("keyboardWillShow", () => {
          setKeyboardWillStatus("show");
        }),
      );

      subscriptions.push(
        Keyboard.addListener("keyboardWillHide", () => {
          setKeyboardWillStatus("hide");
        }),
      );
    }

    subscriptions.push(
      Keyboard.addListener("keyboardDidShow", () =>
        setKeyboardDidStatus("show"),
      ),
    );

    subscriptions.push(
      Keyboard.addListener("keyboardDidHide", () =>
        setKeyboardDidStatus("hide"),
      ),
    );

    return () => {
      subscriptions.forEach(({ remove }) => remove());
    };
  }, []);

  return { willStatus: keyboardWillStatus, didStatus: keyboardDidStatus };
};
