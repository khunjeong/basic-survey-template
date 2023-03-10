import { v4 as uuid } from 'uuid';
import { ESurveyTypes } from '../types';

export const surveyList = Object.keys(ESurveyTypes).map((value, index) => ({
  index,
  key: uuid(),
  label: value,
  value,
}));
