import { v4 as uuid } from 'uuid';
import { getNameFromSurveyType } from '../utils/converter';
import { ESurveyTypes } from '../types';
export var surveyList = Object.keys(ESurveyTypes).map(function (value, index) {
  return {
    index: index,
    key: uuid(),
    label: getNameFromSurveyType(value.toLowerCase()),
    value: value,
  };
});
