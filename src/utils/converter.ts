import { ESurveyTypes } from '../types';

export const getNameFromSurveyType = (type: ESurveyTypes) => {
  switch (type) {
    case ESurveyTypes.BLANK:
      return '없음';
    case ESurveyTypes.SINGLE_SELECT:
      return '단일 선택형 질문';
    case ESurveyTypes.MULTI_SELECT:
      return '다중 선택형 질문';
    default:
      return '알 수 없음';
  }
};
