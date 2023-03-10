import { ISurvey } from '../../../types';

export interface ISurveyDisplay {
  survey: ISurvey;
  onUpdateSurvey: (survey: ISurvey) => void;
}
