import { ReactElement } from 'react';
import { Section, Description } from '../../../components';
import OptionSelector from './OptionSelector';
import { ESurveyTypes } from '../../../types';
import { ISurveyViewersProps } from './SurveyViewers.type';

const SurveyViewers = <T extends ISurveyViewersProps>({ survey }: T): ReactElement<T> => {
  return (
    <Section>
      {survey.type === ESurveyTypes.SINGLE_SELECT && (
        <OptionSelector value={survey.answer} questions={survey.question} />
      )}
    </Section>
  );
};

export default SurveyViewers;
