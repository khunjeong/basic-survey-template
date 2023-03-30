import { IDefaultModeSurveyResult } from '../../../types';

export interface IDefaultModeResultProps {
  survey: IDefaultModeSurveyResult;
  onSubmit: (result: IDefaultModeSurveyResult) => void;
}
