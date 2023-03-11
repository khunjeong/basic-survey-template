import { ISurveyResult } from '../../types';

export interface IViewerProps {
  survey: ISurveyResult;
  onSubmit: (result: ISurveyResult) => void;
}
