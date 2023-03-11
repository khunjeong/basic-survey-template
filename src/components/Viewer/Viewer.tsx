import { ReactElement, useState } from 'react';
import { Article, Button, Description, Section, Title } from '../../components';
import SurveyViewers from './SurveyViewers';
import { ISurveyResult, TSurvey } from '../../types';
import { IViewerProps } from './Viewer.type';

const Viewer = <T extends IViewerProps>({ survey, onSubmit }: T): ReactElement<T> => {
  const [surveyContents, setSurveyContents] = useState<ISurveyResult>(survey);

  const onUpdateSurvey = (survey: TSurvey, index: number) => {
    setSurveyContents({
      ...surveyContents,
      content: surveyContents.content.map((content, i) => (i === index ? survey : content)),
    });
  };

  return (
    <Article>
      <Section>
        <Title>{surveyContents.title}</Title>
      </Section>
      <Section>
        <Description>{surveyContents.description}</Description>
      </Section>
      <Section>
        {surveyContents.content.map((survey, index) => (
          <SurveyViewers
            key={survey.id}
            survey={survey}
            onUpdateSurvey={surveyItem => onUpdateSurvey(surveyItem, index)}
          />
        ))}
      </Section>
      <Section>
        <Button onClick={() => onSubmit(surveyContents)}>투표하기</Button>
      </Section>
    </Article>
  );
};

export default Viewer;
