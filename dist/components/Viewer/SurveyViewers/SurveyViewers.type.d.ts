import { TSurvey } from '../../../types';
export interface ISurveyViewersProps {
  survey: TSurvey;
  onUpdateSurvey: (survey: TSurvey) => void;
}
