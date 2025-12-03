"use strict";
/**
 * @cupist/bottom-sheet-manager
 *
 * Framework-agnostic bottom sheet manager that accepts external UI components.
 * This package manages bottom sheet state and lifecycle without depending on specific UI libraries.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomSheetController = exports.useBottomSheet = exports.BottomSheetContext = exports.BottomSheetProvider = void 0;
var BottomSheetProvider_1 = require("./BottomSheetProvider");
Object.defineProperty(exports, "BottomSheetProvider", { enumerable: true, get: function () { return BottomSheetProvider_1.BottomSheetProvider; } });
Object.defineProperty(exports, "BottomSheetContext", { enumerable: true, get: function () { return BottomSheetProvider_1.BottomSheetContext; } });
var useBottomSheet_1 = require("./useBottomSheet");
Object.defineProperty(exports, "useBottomSheet", { enumerable: true, get: function () { return useBottomSheet_1.useBottomSheet; } });
var BottomSheetController_1 = require("./BottomSheetController");
Object.defineProperty(exports, "BottomSheetController", { enumerable: true, get: function () { return BottomSheetController_1.BottomSheetController; } });
//# sourceMappingURL=index.js.map