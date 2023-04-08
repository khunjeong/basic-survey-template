import { ReactElement, useState } from 'react';
import dayjs from 'dayjs';
import { CloseCircleOutlined } from '@ant-design/icons';
import { FlexDiv, Title, Description, Section, Button } from '../../../components';
import { VoteIcon } from '../../Icons';
import { OptionMultiSelector } from '../../../components/Viewer/SurveyViewers/OptionSelector';
import { getDateDiff } from '../../../utils/dateFormat';
import { IDefaultModeSurveyResult } from '../../../types';
import { IDefaultModeViewerProps } from './DefaultModeViewer.type';
import * as S from './DefaultModeViewer.styled';

const nowDate = dayjs();

const DefaultModeViewer = <T extends IDefaultModeViewerProps>({
  survey,
  // onResult,
  onSubmit,
  onRemove,
}: T): ReactElement<T> => {
  const [resultSurvey, setResultSurvey] = useState<IDefaultModeSurveyResult>(survey);

  return (
    <S.Container>
      {onRemove && (
        <FlexDiv justifyContent='flex-end'>
          <CloseCircleOutlined onClick={() => onRemove(survey.id)} style={{ cursor: 'pointer' }} />
        </FlexDiv>
      )}

      <Section>
        <FlexDiv justifyContent='space-between'>
          <FlexDiv justifyContent='flex-start' style={{ gap: 16 }}>
            <VoteIcon />
            <Description size={16} weight={400}>
              {`투표 | ${resultSurvey.count} 명 참여중`}
            </Description>
          </FlexDiv>
          <Description size={16} weight={400}>
            {getDateDiff(resultSurvey.startDate, resultSurvey.endDate)}
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

export default DefaultModeViewer;
