import { useState, useEffect } from 'react';
import { Button, FlexDiv, Text, Dropdown, Section, Inputs } from '../../../components';
import OptionEditor from './OptionEditor/OptionEditor';
import { surveyList } from '../../../constants/surveys';
import { getNameFromSurveyType } from '../../../utils/converter';
import * as S from './Surveys.styled';
import { ESurveyTypes, IDropdownOption, TypedSurvey } from '../../../types';
import { ISurveyDisplay } from './Surveys.type';

const Surveys = <T extends ISurveyDisplay>({ survey, onUpdateSurvey }: T) => {
  const surveyType = survey.type !== ESurveyTypes.BLANK && survey.type;

  const [title, setTitle] = useState(survey.title);
  const [description, setDescription] = useState(survey.description);

  useEffect(() => {
    console.log({ survey });
  }, [survey]);

  const onSelect = (value: IDropdownOption) => {
    const blockShape = {
      ...survey,
      type: value.value.toLowerCase() as ESurveyTypes,
    };

    switch (blockShape.type) {
      case ESurveyTypes.BLANK:
        onUpdateSurvey(blockShape as TypedSurvey<ESurveyTypes.BLANK>);
        break;
      case ESurveyTypes.SINGLE_SELECT:
        onUpdateSurvey(
          Object.assign(blockShape, {
            question: [] as IDropdownOption[],
            answer: null,
          }) as TypedSurvey<ESurveyTypes.SINGLE_SELECT>,
        );
        break;
      case ESurveyTypes.MULTI_SELECT:
        onUpdateSurvey(
          Object.assign(blockShape, {
            question: [] as IDropdownOption[],
            answer: [] as string[],
          }) as TypedSurvey<ESurveyTypes.MULTI_SELECT>,
        );
        break;
      default:
        throw new Error('return untyped block.');
    }
  };

  return (
    <S.SurveyContainer>
      <FlexDiv justifyContent='space-between'>
        <Text>{surveyType ? getNameFromSurveyType(surveyType) : '설문 유형을 선택하세요'}</Text>
        <Dropdown
          items={surveyList}
          selectedIndex={surveyList.findIndex(v => v.value.toLowerCase() === survey.type)}
          onChange={onSelect}
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
          {(surveyType === ESurveyTypes.SINGLE_SELECT ||
            surveyType === ESurveyTypes.MULTI_SELECT) && (
            <OptionEditor
              items={survey.question}
              onAddOption={items => onUpdateSurvey({ ...survey, question: items })}
              onUpdateOption={items => onUpdateSurvey({ ...survey, question: items })}
              onRemoveOption={id =>
                onUpdateSurvey({
                  ...survey,
                  question: survey.question.filter(question => question.key !== id),
                })
              }
            />
          )}
        </Section>
      )}
      <Section style={{ marginTop: 10 }}>
        <Button>제거</Button>
      </Section>
    </S.SurveyContainer>
  );
};

export default Surveys;
