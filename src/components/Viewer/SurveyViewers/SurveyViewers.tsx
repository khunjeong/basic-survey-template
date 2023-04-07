import { ReactElement } from 'react';
import { FlexDiv, Title, Description } from '../../../components';
import { OptionSelector, OptionMultiSelector } from './OptionSelector';
import { ESurveyTypes } from '../../../types';
import { ISurveyViewersProps } from './SurveyViewers.type';
import * as S from './SurveyViewers.styled';

const SurveyViewers = <T extends ISurveyViewersProps>({
  survey,
  onUpdateSurvey,
}: T): ReactElement<T> => {
  return (
    <S.SurveyViewerContainer>
      <FlexDiv flexDirection='column' alignItems='flex-start'>
        {survey.title && <Title size={18}>{survey.title}</Title>}
        {survey.description && <Description size={12}>{survey.description}</Description>}
        {survey.type === ESurveyTypes.SINGLE_SELECT && (
          <>
            <Description size={12}>1개 선택 가능</Description>
            <OptionSelector
              value={survey.answer}
              questions={survey.questions}
              onChange={value => onUpdateSurvey({ ...survey, answer: value })}
            />
          </>
        )}
        {survey.type === ESurveyTypes.MULTI_SELECT && (
          <>
            <Description size={12}>1개 선택 가능</Description>
            <OptionMultiSelector
              value={survey.answer}
              questions={survey.questions}
              maxChoice={survey.maxChoice}
              onChange={value =>
                onUpdateSurvey({
                  ...survey,
                  answer: survey.answer.includes(value)
                    ? survey.answer.filter(key => key !== value)
                    : [...survey.answer, value],
                })
              }
            />
          </>
        )}
      </FlexDiv>
    </S.SurveyViewerContainer>
  );
};

export default SurveyViewers;
