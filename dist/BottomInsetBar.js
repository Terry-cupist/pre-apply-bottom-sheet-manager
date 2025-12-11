"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomInsetBar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var useKeyboard_1 = require("./useKeyboard");
var BottomInsetBar = function (_a) {
    var bottomInsetColor = _a.bottomInsetColor;
    var bottomInset = (0, react_native_safe_area_context_1.useSafeAreaInsets)().bottom;
    var keyboard = (0, useKeyboard_1.useKeyboard)();
    var insetHeight = (0, react_native_reanimated_1.useSharedValue)(0);
    var _b = (0, react_1.useState)(false), showBottomInset = _b[0], setShowBottomInset = _b[1];
    (0, react_1.useEffect)(function () {
        if (!bottomInset) {
            return;
        }
        if (keyboard.willStatus === "show") {
            setShowBottomInset(false);
            insetHeight.value = (0, react_native_reanimated_1.withTiming)(0, { duration: 100 });
        }
        else {
            setShowBottomInset(true);
            insetHeight.value = (0, react_native_reanimated_1.withTiming)(Math.max(12, bottomInset), {
                duration: 100,
            });
        }
    }, [keyboard.willStatus, bottomInset, insetHeight]);
    var animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(function () { return ({
        height: insetHeight.value,
    }); });
    if (keyboard.willStatus === "show" || showBottomInset)
        return null;
    return ((0, jsx_runtime_1.jsx)(react_native_reanimated_1.default.View, { style: [
            {
                zIndex: 10,
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                backgroundColor: bottomInsetColor,
            },
            animatedStyle,
        ] }));
};
exports.BottomInsetBar = BottomInsetBar;
//# sourceMappingURL=BottomInsetBar.js.map