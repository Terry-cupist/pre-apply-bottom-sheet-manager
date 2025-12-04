"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCupistBottomSheetContext = exports.CupistBottomSheetContext = void 0;
exports.CupistBottomSheetProvider = CupistBottomSheetProvider;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var bottomSheet_1 = require("./bottomSheet");
exports.CupistBottomSheetContext = (0, react_1.createContext)(null);
var useCupistBottomSheetContext = function () {
    var context = (0, react_1.useContext)(exports.CupistBottomSheetContext);
    if (context === null) {
        throw new Error("useBottomSheet is only available within BottomSheetProvider.");
    }
    return context;
};
exports.useCupistBottomSheetContext = useCupistBottomSheetContext;
function CupistBottomSheetProvider(_a) {
    var children = _a.children, DefaultBottomSheet = _a.DefaultBottomSheet;
    var _b = (0, react_1.useState)(null), element = _b[0], setElement = _b[1];
    var elementRef = (0, react_1.useRef)(element);
    var pendingMountRef = (0, react_1.useRef)(null);
    var pendingResolvedRef = (0, react_1.useRef)(false);
    var syncSetElement = (0, react_1.useCallback)(function (el) {
        elementRef.current = el;
        setElement(el);
    }, []);
    var mount = (0, react_1.useCallback)(function (el) {
        if (elementRef.current || pendingMountRef.current) {
            if (pendingMountRef.current) {
                pendingMountRef.current.resolve();
            }
            pendingResolvedRef.current = false;
            pendingMountRef.current = {
                element: el,
                resolve: function () {
                    if (pendingResolvedRef.current)
                        return;
                    if (!elementRef.current) {
                        syncSetElement(el);
                        pendingMountRef.current = null;
                        pendingResolvedRef.current = true;
                    }
                },
            };
        }
        else {
            syncSetElement(el);
        }
    }, [syncSetElement]);
    var unmount = (0, react_1.useCallback)(function () {
        syncSetElement(null);
        if (pendingMountRef.current) {
            var resolve = pendingMountRef.current.resolve;
            pendingMountRef.current = null;
            resolve();
        }
    }, [syncSetElement]);
    var context = (0, react_1.useMemo)(function () { return ({ mount: mount, unmount: unmount, DefaultBottomSheet: DefaultBottomSheet }); }, [mount, unmount, DefaultBottomSheet]);
    return ((0, jsx_runtime_1.jsx)(exports.CupistBottomSheetContext.Provider, { value: context, children: (0, jsx_runtime_1.jsxs)(bottomSheet_1.BottomSheetModalProvider, { children: [children, element] }) }));
}
//# sourceMappingURL=BottomSheetProvider.js.map