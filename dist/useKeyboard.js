"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKeyboard = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var useKeyboard = function () {
    var _a = (0, react_1.useState)(), keyboardWillStatus = _a[0], setKeyboardWillStatus = _a[1];
    var _b = (0, react_1.useState)(), keyboardDidStatus = _b[0], setKeyboardDidStatus = _b[1];
    (0, react_1.useEffect)(function () {
        var subscriptions = [];
        // for iOS, android not working
        if (react_native_1.Platform.OS !== "android") {
            subscriptions.push(react_native_1.Keyboard.addListener("keyboardWillShow", function () {
                setKeyboardWillStatus("show");
            }));
            subscriptions.push(react_native_1.Keyboard.addListener("keyboardWillHide", function () {
                setKeyboardWillStatus("hide");
            }));
        }
        subscriptions.push(react_native_1.Keyboard.addListener("keyboardDidShow", function () {
            return setKeyboardDidStatus("show");
        }));
        subscriptions.push(react_native_1.Keyboard.addListener("keyboardDidHide", function () {
            return setKeyboardDidStatus("hide");
        }));
        return function () {
            subscriptions.forEach(function (_a) {
                var remove = _a.remove;
                return remove();
            });
        };
    }, []);
    return { willStatus: keyboardWillStatus, didStatus: keyboardDidStatus };
};
exports.useKeyboard = useKeyboard;
//# sourceMappingURL=useKeyboard.js.map