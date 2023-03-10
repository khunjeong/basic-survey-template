import { ESurveyTypes } from '../types';

export const getNameFromSurveyType = (type: ESurveyTypes) => {
  switch (type) {
    case 'blank':
      return '없음';
    case 'short_text':
      return '단답형 질문';
    case 'long_text':
      return '장문형 질문';
    case 'single_select':
      return '단일 선택형 질문';
    case 'multi_select':
      return '다중 선택형 질문';
    default:
      return '알 수 없음';
  }
};
