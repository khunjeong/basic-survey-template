import { v4 as uuid } from 'uuid';
import { getNameFromSurveyType } from '../utils/converter';
import { ESurveyTypes } from '../types';

export const surveyList = Object.keys(ESurveyTypes).map((value, index) => ({
  index,
  key: uuid(),
  label: getNameFromSurveyType(value.toLowerCase() as ESurveyTypes),
  value,
}));
