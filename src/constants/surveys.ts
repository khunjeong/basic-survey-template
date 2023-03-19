import { v4 as uuid } from 'uuid';
import { getNameFromSurveyType } from '../utils/converter';
import { ESurveyTypes } from '../types';

export const surveyList = Object.keys(ESurveyTypes).map((value, index) => ({
  index,
  id: uuid(),
  label: getNameFromSurveyType(value.toLowerCase() as ESurveyTypes),
  item: value,
  image: '',
}));
