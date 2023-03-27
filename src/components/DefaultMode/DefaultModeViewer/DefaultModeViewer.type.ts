import { IDefaultModeSurveyResult } from '../../../types';

export interface IDefaultModeViewerProps {
  survey: IDefaultModeSurveyResult;
  // onResult: () => void;
  onSubmit: (result: IDefaultModeSurveyResult) => void;
  onRemove?: (key: string) => void;
}
