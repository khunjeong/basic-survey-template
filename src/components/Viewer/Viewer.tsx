import { ReactElement } from 'react';
import { Article, Section, Title, Description, Text } from '../../components';
import SurveyViewers from './SurveyViewers';
import { IViewerProps } from './Viewer.type';

const Viewer = <T extends IViewerProps>({ survey }: T): ReactElement<T> => {
  const { title, description, content } = survey;

  return (
    <Article>
      <Section>
        <Title>{title}</Title>
      </Section>
      <Section>
        <Description>{description}</Description>
      </Section>
      <Section>
        {content.map(survey => (
          <SurveyViewers key={survey.id} survey={survey} />
        ))}
      </Section>
    </Article>
  );
};

export default Viewer;
