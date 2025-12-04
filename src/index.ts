/**
 * @cupist/bottom-sheet-manager
 *
 * Framework-agnostic bottom sheet manager that accepts external UI components.
 * This package manages bottom sheet state and lifecycle without depending on specific UI libraries.
 */

export * from "./bottomSheet";
export {
  CupistBottomSheetController,
  type CupistBottomSheetControlRef,
  type CupistBottomSheetModalProps,
  type CupistBottomSheetModalRef,
} from "./BottomSheetController";
export {
  CupistBottomSheetContext,
  CupistBottomSheetProvider,
  CupistBottomSheetProviderProps,
  CupistDefaultBottomSheetComponent,
} from "./BottomSheetProvider";
export { useCupistBottomSheet } from "./useBottomSheet";
