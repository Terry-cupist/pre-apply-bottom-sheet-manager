"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CupistBottomSheetController = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_reanimated_1 = require("react-native-reanimated");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var useKeyboard_1 = require("./useKeyboard");
exports.CupistBottomSheetController = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, ModalComponent = _a.ModalComponent, modalProps = _a.modalProps, onDismiss = _a.onDismiss;
    var bottomSheetRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(false), isOpenBottomSheet = _b[0], setIsOpenBottomSheet = _b[1];
    var bottomInset = (0, react_native_safe_area_context_1.useSafeAreaInsets)().bottom;
    var keyboard = (0, useKeyboard_1.useKeyboard)();
    var insetHeight = (0, react_native_reanimated_1.useSharedValue)(0);
    var handleBottomSheetClose = (0, react_1.useCallback)(function () { return setIsOpenBottomSheet(false); }, []);
    (0, react_1.useImperativeHandle)(ref, function () { return ({ close: handleBottomSheetClose }); }, [
        handleBottomSheetClose,
    ]);
    (0, react_1.useEffect)(function () {
        requestAnimationFrame(function () { return setIsOpenBottomSheet(true); });
    }, []);
    (0, react_1.useEffect)(function () {
        var _a, _b, _c, _d;
        if (isOpenBottomSheet) {
            (_b = (_a = bottomSheetRef.current) === null || _a === void 0 ? void 0 : _a.open) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
        else {
            (_d = (_c = bottomSheetRef.current) === null || _c === void 0 ? void 0 : _c.close) === null || _d === void 0 ? void 0 : _d.call(_c);
        }
    }, [isOpenBottomSheet]);
    (0, react_1.useEffect)(function () {
        if (!bottomInset) {
            return;
        }
        if (keyboard.willStatus === "show") {
            insetHeight.value = (0, react_native_reanimated_1.withTiming)(0, { duration: 100 });
        }
        else {
            insetHeight.value = (0, react_native_reanimated_1.withTiming)(Math.max(12, bottomInset), {
                duration: 100,
            });
        }
    }, [keyboard.willStatus, bottomInset, insetHeight]);
    var animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(function () { return ({
        height: insetHeight.value,
    }); });
    return ((0, jsx_runtime_1.jsxs)(ModalComponent, __assign({ ref: bottomSheetRef }, modalProps, { onDismiss: onDismiss, children: [children, (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [style.inset, animatedStyle] })] })));
});
var style = react_native_1.StyleSheet.create({
    inset: {
        width: "100%",
    },
});
//# sourceMappingURL=BottomSheetController.js.map