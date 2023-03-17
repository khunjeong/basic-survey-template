let __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        let desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
let __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o.default = v;
      });
let __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    let result = {};
    if (mod != null)
      for (let k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
const jsx_runtime_1 = require('react/jsx-runtime');
const components_1 = require('../../../components');
const OptionSelector_1 = require('./OptionSelector');
const types_1 = require('../../../types');
const S = __importStar(require('./SurveyViewers.styled'));
const SurveyViewers = ({ survey, onUpdateSurvey }) => {
  return (0, jsx_runtime_1.jsx)(S.SurveyViewerContainer, {
    children: (0, jsx_runtime_1.jsxs)(
      components_1.FlexDiv,
      Object.assign(
        { flexDirection: 'column', alignItems: 'flex-start' },
        {
          children: [
            survey.title &&
              (0, jsx_runtime_1.jsx)(
                components_1.Title,
                Object.assign({ size: 18 }, { children: survey.title }),
              ),
            survey.description &&
              (0, jsx_runtime_1.jsx)(
                components_1.Description,
                Object.assign({ size: 12 }, { children: survey.description }),
              ),
            survey.type === types_1.ESurveyTypes.SINGLE_SELECT &&
              (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    components_1.Description,
                    Object.assign(
                      { size: 12 },
                      { children: '1\uAC1C \uC120\uD0DD \uAC00\uB2A5' },
                    ),
                  ),
                  (0, jsx_runtime_1.jsx)(OptionSelector_1.OptionSelector, {
                    value: survey.answer,
                    questions: survey.question,
                    onChange: value =>
                      onUpdateSurvey(
                        Object.assign(Object.assign({}, survey), {
                          answer: value,
                        }),
                      ),
                  }),
                ],
              }),
            survey.type === types_1.ESurveyTypes.MULTI_SELECT &&
              (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    components_1.Description,
                    Object.assign(
                      { size: 12 },
                      { children: '1\uAC1C \uC120\uD0DD \uAC00\uB2A5' },
                    ),
                  ),
                  (0, jsx_runtime_1.jsx)(OptionSelector_1.OptionMultiSelector, {
                    value: survey.answer,
                    questions: survey.question,
                    onChange: value =>
                      onUpdateSurvey(
                        Object.assign(Object.assign({}, survey), {
                          answer: survey.answer.includes(value)
                            ? survey.answer.filter(key => key !== value)
                            : [...survey.answer, value],
                        }),
                      ),
                  }),
                ],
              }),
          ],
        },
      ),
    ),
  });
};
exports.default = SurveyViewers;
