import { ReactElement, useState, useMemo } from 'react';
import { FlexDiv, Title, Description, Section, Button } from '../../../components';
import { VoteIcon } from '../../Icons';
import { OptionMultiSelector } from '../../../components/Viewer/SurveyViewers/OptionSelector';
import { getDateBetween } from '../../../utils/dateFormat';
import { IDefaultModeSurveyResult } from '../../../types';
import { IDefaultModeResultProps } from './DefaultModeResult.type';
import * as S from './DefaultModeResult.styled';

const DefaultModeResult = <T extends IDefaultModeResultProps>({
  survey,
  onSubmit,
}: T): ReactElement<T> => {
  const [resultSurvey, setResultSurvey] = useState<IDefaultModeSurveyResult>({
    ...survey,
    answer: survey.questions
      .filter(question => question.self)
      .map(question => question.id.toString()),
  });

  const totalVoteCount = useMemo(
    () =>
      survey.questions.reduce((result, cur) => {
        return result + cur.count;
      }, 0),
    [survey],
  );

  const topQuestionCount = useMemo(
    () =>
      survey.questions.reduce((result, cur) => {
        return result <= cur.count ? cur.count : result;
      }, 0),
    [survey],
  );

  return (
    <S.Container>
      <Section>
        <FlexDiv justifyContent='space-between'>
          <FlexDiv justifyContent='flex-start' style={{ gap: 16 }}>
            <VoteIcon />
            <Description size={16} weight={400}>
              {`투표 | ${survey.count} 명 참여중`}
            </Description>
          </FlexDiv>
          <Description size={16} weight={400}>
            {getDateBetween(resultSurvey.startDate, resultSurvey.endDate)}
          </Description>
        </FlexDiv>
      </Section>
      <Section>
        <Title size={24}>{resultSurvey.title || '투표 제목'}</Title>
      </Section>
      <Section>
        <S.QuestionWrap>
          <OptionMultiSelector
            value={resultSurvey.answer}
            questions={resultSurvey.questions}
            maxChoice={resultSurvey.maxChoice}
            onChange={value => {
              setResultSurvey({
                ...resultSurvey,
                answer: resultSurvey.answer.includes(value)
                  ? resultSurvey.answer.filter(key => key !== value)
                  : [...resultSurvey.answer, value],
              });
            }}
            totalVoteCount={totalVoteCount}
            top={topQuestionCount}
          />
        </S.QuestionWrap>
      </Section>
      <Section>
        <Description>
          {resultSurvey.maxChoice > 1
            ? `${resultSurvey.maxChoice}개 선택 가능`
            : '중복 투표 불가능'}
        </Description>
      </Section>
      <Section>
        <FlexDiv flexDirection='column'>
          <Button onClick={() => onSubmit(resultSurvey)}>투표하기</Button>
        </FlexDiv>
      </Section>
    </S.Container>
  );
};

export default DefaultModeResult;
