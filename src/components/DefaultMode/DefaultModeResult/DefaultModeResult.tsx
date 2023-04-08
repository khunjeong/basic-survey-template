import { ReactElement, useEffect, useState, useMemo } from 'react';
import dayjs from 'dayjs';
import { FlexDiv, Title, Description, Section, Button } from '../../../components';
import { VoteIcon } from '../../Icons';
import { OptionMultiSelector } from '../../../components/Viewer/SurveyViewers/OptionSelector';
import { getDateBetween } from '../../../utils/dateFormat';
import { IDefaultModeSurveyResult, ESurveyTypes } from '../../../types';
import { IDefaultModeResultProps } from './DefaultModeResult.type';
import * as S from './DefaultModeResult.styled';

const nowDate = dayjs();

const DefaultModeResult = <T extends IDefaultModeResultProps>({
  survey,
  onSubmit,
}: T): ReactElement<T> => {
  const [resultSurvey, setResultSurvey] = useState<IDefaultModeSurveyResult>({
    id: '',
    type: ESurveyTypes.MULTI_SELECT,
    title: '',
    description: '',
    required: false,
    questions: [],
    answer: [],
    maxChoice: 1,
    startDate: '',
    endDate: '',
    count: 0,
    self: false,
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

  useEffect(() => {
    setResultSurvey({
      ...survey,
      answer: survey.questions
        .filter(question => question.self)
        .map(question => question.id.toString()),
    });
  }, [survey]);

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
      {!(nowDate > dayjs(resultSurvey.endDate).endOf('day')) ? (
        <Section>
          <FlexDiv flexDirection='column'>
            <Button
              disabled={resultSurvey.answer.length === 0}
              onClick={() => onSubmit(resultSurvey)}>
              투표하기
            </Button>
            {/* <Button onClick={onResult}>결과보기</Button> */}
          </FlexDiv>
        </Section>
      ) : (
        <Section>
          <Description>{`투표 종료 | ${resultSurvey.count} 명 참여`}</Description>
        </Section>
      )}
    </S.Container>
  );
};

export default DefaultModeResult;
