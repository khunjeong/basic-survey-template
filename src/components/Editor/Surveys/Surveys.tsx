import { useState } from 'react';
import { FlexDiv, Text, Dropdown, Section, Inputs } from '../../../components';
import { surveyList } from '../../../constants/surveys';
import { getNameFromSurveyType } from '../../../utils/converter';
import * as S from './Surveys.styled';
import { ESurveyTypes } from '../../../types';
import { ISurveyDisplay } from './Surveys.type';

const Surveys = <T extends ISurveyDisplay>({ survey, onUpdateSurvey }: T) => {
  const surveyType = survey.type !== ESurveyTypes.BLANK && survey.type;

  const [title, setTitle] = useState(survey.title);
  const [description, setDescription] = useState(survey.description);

  return (
    <S.SurveyContainer>
      <FlexDiv justifyContent='space-between'>
        <Text>{surveyType ? getNameFromSurveyType(surveyType) : '설문 유형을 선택하세요'}</Text>
        <Dropdown
          items={surveyList}
          selectedIndex={surveyList.findIndex(v => v.value.toLowerCase() === survey.type)}
          onChange={value =>
            onUpdateSurvey({
              ...survey,
              type: (value.value as string).toLowerCase() as ESurveyTypes,
              title,
              description,
            })
          }
        />
      </FlexDiv>

      {surveyType && (
        <Section>
          <Inputs
            placeholder='질문을 입력하세요'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Inputs
            placeholder='설명을 입력하세요'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Section>
      )}
    </S.SurveyContainer>
  );
};

export default Surveys;
