/**
 * @cupist/bottom-sheet-manager
 *
 * Framework-agnostic bottom sheet manager that accepts external UI components.
 * This package manages bottom sheet state and lifecycle without depending on specific UI libraries.
 */

export {
  BottomSheetController,
  type BottomSheetControlRef,
  type BottomSheetModalProps,
  type BottomSheetModalRef,
} from "./BottomSheetController";
export {
  BottomSheetContext,
  BottomSheetProvider,
  BottomSheetProviderProps,
} from "./BottomSheetProvider";
export { useBottomSheet } from "./useBottomSheet";
