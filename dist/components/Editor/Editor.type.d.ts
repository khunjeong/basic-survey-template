import { ISurveyResult } from '../../types';
export interface IEditorProps {
  defaultValue?: ISurveyResult;
  onSubmit?: (result: ISurveyResult) => void;
  submitButtonText?: string;
  onClose?: () => void;
}
