import { ReactElement } from 'react';
import { FlexDiv, Title, Description } from '../../../components';
import OptionSelector from './OptionSelector';
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
              questions={survey.question}
              onChange={value => onUpdateSurvey({ ...survey, answer: value })}
            />
          </>
        )}
      </FlexDiv>
    </S.SurveyViewerContainer>
  );
};

export default SurveyViewers;
