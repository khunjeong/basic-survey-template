Object.defineProperty(exports, '__esModule', { value: true });
exports.getNameFromSurveyType = void 0;
const types_1 = require('../types');
const getNameFromSurveyType = type => {
  switch (type) {
    case types_1.ESurveyTypes.BLANK:
      return '없음';
    case types_1.ESurveyTypes.SINGLE_SELECT:
      return '단일 선택형 질문';
    case types_1.ESurveyTypes.MULTI_SELECT:
      return '다중 선택형 질문';
    default:
      return '알 수 없음';
  }
};
exports.getNameFromSurveyType = getNameFromSurveyType;
