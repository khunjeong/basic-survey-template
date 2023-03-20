import { ReactElement, useState } from 'react';
import { DatePicker } from 'antd';
import {
  CloseCircleOutlined,
  CheckOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';

import { Article, Button, Section, Inputs, FlexDiv, Description, Text } from '../../../components';
import OptionEditor from '../../../components/Editor/Surveys/OptionEditor/OptionEditor';

import { colors } from '../../../styles/colors';
import * as S from './DefaultModeEditor.styled';

import { ESurveyTypes, TDate, TSurvey } from '../../../types';
import { IDefaultModeEditorProps } from './DefaultModeEditor.type';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';
const nowDate = dayjs();

const DefaultModeEditor = <T extends IDefaultModeEditorProps>({
  onClose,
  onSubmit,
  submitButtonText,
  uploadOptions,
}: T): ReactElement<T> => {
  const [title, setTitle] = useState<string>('');
  const [startDate, setStartDate] = useState<TDate>(nowDate.format(dateFormat));
  const [endDate, setEndDate] = useState<TDate>(nowDate.add(1, 'd').format(dateFormat));
  const [surveyData, setSurveyData] = useState<TSurvey>({
    id: uuid(),
    type: ESurveyTypes.MULTI_SELECT,
    required: false,
    questions: [],
    answer: [],
    maxChoice: 1,
  });

  return (
    <Article>
      <FlexDiv justifyContent='space-between'>
        <Description size={12}>※ 글 등록 이후에는 수정할 수 없습니다.</Description>
        {onClose && <CloseCircleOutlined style={{ cursor: 'pointer' }} onClick={onClose} />}
      </FlexDiv>
      <Section>
        <RangePicker
          defaultValue={[dayjs(startDate, dateFormat), dayjs(endDate, dateFormat)]}
          format={dateFormat}
          onChange={rangeValue => {
            if (rangeValue) {
              setStartDate(dayjs(rangeValue?.[0]).format(dateFormat));
              setEndDate(dayjs(rangeValue?.[1]).format(dateFormat));
            }
          }}
        />
      </Section>
      <Section>
        <Inputs
          placeholder='투표 제목을 입력하세요'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Section>
      {surveyData.type === ESurveyTypes.MULTI_SELECT && (
        <>
          <Section>
            <OptionEditor
              items={surveyData.questions}
              onAddOption={items => setSurveyData({ ...surveyData, questions: items })}
              onUpdateOption={items => setSurveyData({ ...surveyData, questions: items })}
              onRemoveOption={id =>
                setSurveyData({
                  ...surveyData,
                  questions: surveyData.questions.filter(question => question.id !== id),
                })
              }
              uploadOptions={uploadOptions}
            />
          </Section>

          <Section style={{ margin: '16px 0' }}>
            <FlexDiv justifyContent='space-between' style={{ gap: 16 }}>
              <FlexDiv style={{ gap: 16 }}>
                <CheckOutlined style={{ color: colors.GRAY_BRIGHT_1 }} />
                <Description>선택 가능 답변 수</Description>
              </FlexDiv>

              <FlexDiv style={{ gap: 16 }}>
                <S.CheckWrap
                  disabled={surveyData.maxChoice <= 1}
                  onClick={() =>
                    setSurveyData({
                      ...surveyData,
                      maxChoice: surveyData.maxChoice - 1,
                    })
                  }>
                  <MinusCircleOutlined />
                </S.CheckWrap>
                <Text>{surveyData.maxChoice}</Text>
                <S.CheckWrap
                  disabled={surveyData.maxChoice >= 3}
                  onClick={() =>
                    setSurveyData({
                      ...surveyData,
                      maxChoice: surveyData.maxChoice + 1,
                    })
                  }>
                  <PlusCircleOutlined />
                </S.CheckWrap>
              </FlexDiv>
            </FlexDiv>
          </Section>
          {onSubmit && (
            <Section>
              <Button
                onClick={() =>
                  onSubmit({
                    ...surveyData,
                    title,
                    startDate,
                    endDate,
                  })
                }>
                {submitButtonText || '전송하기'}
              </Button>
            </Section>
          )}
        </>
      )}
    </Article>
  );
};

export default DefaultModeEditor;
