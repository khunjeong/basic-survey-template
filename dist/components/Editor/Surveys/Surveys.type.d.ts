import { TSurvey } from '../../../types';
export interface ISurveyDisplay {
  survey: TSurvey;
  onUpdateSurvey: (survey: TSurvey) => void;
  onRemoveSurvey: (id: string) => void;
}
