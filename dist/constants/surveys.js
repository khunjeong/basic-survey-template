Object.defineProperty(exports, '__esModule', { value: true });
exports.surveyList = void 0;
const uuid_1 = require('uuid');
const converter_1 = require('../utils/converter');
const types_1 = require('../types');
exports.surveyList = Object.keys(types_1.ESurveyTypes).map((value, index) => ({
  index,
  key: (0, uuid_1.v4)(),
  label: (0, converter_1.getNameFromSurveyType)(value.toLowerCase()),
  value,
}));
