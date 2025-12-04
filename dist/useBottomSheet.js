"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCupistBottomSheet = useCupistBottomSheet;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var BottomSheetController_1 = require("./BottomSheetController");
var BottomSheetProvider_1 = require("./BottomSheetProvider");
function useCupistBottomSheet() {
    var context = (0, BottomSheetProvider_1.useBottomSheet)();
    var mount = context.mount, unmount = context.unmount, DefaultBottomSheet = context.DefaultBottomSheet;
    var controllerRef = (0, react_1.useRef)(null);
    return (0, react_1.useMemo)(function () { return ({
        open: function (component, options) {
            var _a;
            if (options === void 0) { options = {}; }
            mount((0, jsx_runtime_1.jsx)(BottomSheetController_1.BottomSheetController, { ref: controllerRef, ModalComponent: (_a = options.ModalComponent) !== null && _a !== void 0 ? _a : DefaultBottomSheet, modalProps: options.modalProps, onDismiss: unmount, children: component }, Date.now()));
        },
        close: function () {
            var _a;
            (_a = controllerRef.current) === null || _a === void 0 ? void 0 : _a.close();
        },
    }); }, [mount, unmount]);
}
//# sourceMappingURL=useBottomSheet.js.map