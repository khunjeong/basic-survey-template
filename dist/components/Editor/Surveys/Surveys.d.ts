/// <reference types="react" />
import { ISurveyDisplay } from './Surveys.type';
declare const Surveys: <T extends ISurveyDisplay>({
  survey,
  onUpdateSurvey,
  onRemoveSurvey,
}: T) => JSX.Element;
export default Surveys;
