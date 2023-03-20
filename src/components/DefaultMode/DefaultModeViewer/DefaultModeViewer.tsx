import { ReactElement, useState } from 'react';
import { FlexDiv, Title, Description, Section, Button } from '../../../components';
import { VoteIcon } from '../../Icons';
import { OptionMultiSelector } from '../../../components/Viewer/SurveyViewers/OptionSelector';
import { IDefaultModeSurveyResult } from '../../../types';
import { IDefaultModeViewerProps } from './DefaultModeViewer.type';
import * as S from './DefaultModeViewer.styled';

const DefaultModeViewer = <T extends IDefaultModeViewerProps>({
  survey,
  onResult,
  onSubmit,
}: T): ReactElement<T> => {
  const [resultSurvey, setResultSurvey] = useState<IDefaultModeSurveyResult>(survey);

  return (
    <S.Container>
      <Section>
        <FlexDiv justifyContent='space-between'>
          <FlexDiv justifyContent='flex-start' style={{ gap: 16 }}>
            <VoteIcon />
            <Description size={16} weight={400}>
              투표 | N 명 참여중
            </Description>
          </FlexDiv>
          <Description
            size={16}
            weight={400}>{`${resultSurvey.startDate} ~ ${resultSurvey.endDate}`}</Description>
        </FlexDiv>
      </Section>
      <Section>
        <Title size={24}>{resultSurvey.title || '투표 제목'}</Title>
      </Section>
      <Section>
        <S.QuestionWrap>
          {/* {resultSurvey.questions.map(question => (
            <S.QuestionItemWrap key={question.id} onClick={}>
              <CheckIcon />
              <Text>{question.item}</Text>
            </S.QuestionItemWrap>
          ))} */}
          <OptionMultiSelector
            value={resultSurvey.answer}
            questions={resultSurvey.questions}
            onChange={value => {
              setResultSurvey({
                ...resultSurvey,
                answer: resultSurvey.answer.includes(value)
                  ? resultSurvey.answer.filter(key => key !== value)
                  : [...resultSurvey.answer, value],
              });
            }}
          />
        </S.QuestionWrap>
      </Section>
      <Section>
        <Description>
          {resultSurvey.maxChoice > 1 ? '중복 투표 가능' : '중복 투표 불가능'}
        </Description>
      </Section>
      <Section>
        <FlexDiv>
          <Button onClick={() => onSubmit(resultSurvey)}>투표하기</Button>
          <Button onClick={onResult}>결과보기</Button>
        </FlexDiv>
      </Section>
    </S.Container>
  );
};

export default DefaultModeViewer;
