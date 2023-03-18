import { ReactElement, useCallback, useState } from 'react';
import { DatePicker } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { Article, Section, Button, Inputs, FlexDiv, Description } from '../../components';
import Surveys from './Surveys';
import { ESurveyTypes, TDate, TSurvey } from '../../types';
import { IEditorProps } from './Editor.type';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';
const nowDate = dayjs();

const Editor = <T extends IEditorProps>({
  // defaultValue,
  onSubmit,
  submitButtonText,
  onClose,
}: T): ReactElement<T> => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [startDate, setStartDate] = useState<TDate>(nowDate.format(dateFormat));
  const [endDate, setEndDate] = useState<TDate>(nowDate.add(1, 'd').format(dateFormat));

  const [surveyContents, setSurveyContents] = useState<TSurvey[]>([]);

  const addSurveyContent = useCallback(() => {
    setSurveyContents([
      ...surveyContents,
      {
        id: uuid(),
        type: ESurveyTypes.BLANK,
        required: false,
      },
    ]);
  }, [surveyContents]);

  const onUpdateSurvey = (survey: TSurvey) => {
    setSurveyContents(surveyContents.map(content => (content.id === survey.id ? survey : content)));
  };

  const onRemoveSurvey = (id: string) => {
    setSurveyContents(surveyContents.filter(content => content.id !== id));
  };

  return (
    <Article>
      <FlexDiv justifyContent='space-between'>
        <Description>※ 글 등록 이후에는 수정할 수 없습니다.</Description>
        <CloseCircleOutlined style={{ cursor: 'pointer' }} onClick={onClose} />
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
          placeholder='설문 제목을 입력하세요'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Inputs
          placeholder='설문 설명을 입력하세요'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </Section>

      <Section>
        {surveyContents.map(content => (
          <Surveys
            key={content.id}
            survey={content}
            onUpdateSurvey={onUpdateSurvey}
            onRemoveSurvey={onRemoveSurvey}
          />
        ))}
      </Section>
      <Section>
        <Button onClick={addSurveyContent}>구성추가</Button>
      </Section>
      {onSubmit && (
        <Section>
          <Button
            onClick={() =>
              onSubmit({
                title,
                description,
                content: surveyContents.filter(({ type }) => type !== ESurveyTypes.BLANK),
                startDate,
                endDate,
              })
            }>
            {submitButtonText || '전송하기'}
          </Button>
        </Section>
      )}
    </Article>
  );
};

export default Editor;
