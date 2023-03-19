import { IDefaultModeSurveyResult } from '../../../types';
export interface IDefaultModeEditorProps {
  onClose?: () => void;
  onSubmit?: (result: IDefaultModeSurveyResult) => void;
  submitButtonText?: string;
}
