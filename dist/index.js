"use strict";
/**
 * @cupist/bottom-sheet-manager
 *
 * Framework-agnostic bottom sheet manager that accepts external UI components.
 * This package manages bottom sheet state and lifecycle without depending on specific UI libraries.
 */
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCupistBottomSheet = exports.CupistBottomSheetProvider = exports.CupistBottomSheetContext = exports.CupistBottomSheetController = void 0;
__exportStar(require("./bottomSheet"), exports);
var BottomSheetController_1 = require("./BottomSheetController");
Object.defineProperty(exports, "CupistBottomSheetController", { enumerable: true, get: function () { return BottomSheetController_1.CupistBottomSheetController; } });
var BottomSheetProvider_1 = require("./BottomSheetProvider");
Object.defineProperty(exports, "CupistBottomSheetContext", { enumerable: true, get: function () { return BottomSheetProvider_1.CupistBottomSheetContext; } });
Object.defineProperty(exports, "CupistBottomSheetProvider", { enumerable: true, get: function () { return BottomSheetProvider_1.CupistBottomSheetProvider; } });
var useBottomSheet_1 = require("./useBottomSheet");
Object.defineProperty(exports, "useCupistBottomSheet", { enumerable: true, get: function () { return useBottomSheet_1.useCupistBottomSheet; } });
//# sourceMappingURL=index.js.map