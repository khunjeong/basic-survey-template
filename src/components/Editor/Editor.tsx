import { ReactElement, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Article, Section, Button, Inputs } from '../../components';
import Surveys from './Surveys';
import { ESurveyTypes, TSurvey } from '../../types';
import * as S from './Editor.styled';
import { IEditorProps } from './Editor.type';

const Editor = <T extends IEditorProps>({ onSubmit }: T): ReactElement<T> => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

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
      <Section>
        <Button
          onClick={() =>
            onSubmit({
              title,
              description,
              content: surveyContents.filter(({ type }) => type !== ESurveyTypes.BLANK),
            })
          }>
          전송하기
        </Button>
      </Section>
    </Article>
  );
};

export default Editor;
