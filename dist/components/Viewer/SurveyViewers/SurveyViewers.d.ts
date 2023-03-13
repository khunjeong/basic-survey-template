import { ReactElement } from 'react';
import { ISurveyViewersProps } from './SurveyViewers.type';
declare const SurveyViewers: <T extends ISurveyViewersProps>({
  survey,
  onUpdateSurvey,
}: T) => ReactElement<T, string | import('react').JSXElementConstructor<any>>;
export default SurveyViewers;
