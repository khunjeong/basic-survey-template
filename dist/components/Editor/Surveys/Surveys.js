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
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const jsx_runtime_1 = require('react/jsx-runtime');
const react_1 = require('react');
const components_1 = require('../../../components');
const OptionEditor_1 = __importDefault(require('./OptionEditor/OptionEditor'));
const surveys_1 = require('../../../constants/surveys');
const converter_1 = require('../../../utils/converter');
const S = __importStar(require('./Surveys.styled'));
const types_1 = require('../../../types');
const Surveys = ({ survey, onUpdateSurvey, onRemoveSurvey }) => {
  const surveyType = survey.type !== types_1.ESurveyTypes.BLANK && survey.type;
  const [title, setTitle] = (0, react_1.useState)(survey.title);
  const [description, setDescription] = (0, react_1.useState)(
    survey.description,
  );
  (0, react_1.useEffect)(() => {
    console.log({ survey });
  }, [survey]);
  const onSelect = value => {
    const blockShape = Object.assign(Object.assign({}, survey), {
      type: value.value.toLowerCase(),
    });
    switch (blockShape.type) {
      case types_1.ESurveyTypes.BLANK:
        onUpdateSurvey(blockShape);
        break;
      case types_1.ESurveyTypes.SINGLE_SELECT:
        onUpdateSurvey(
          Object.assign(blockShape, {
            question: [],
            answer: null,
          }),
        );
        break;
      case types_1.ESurveyTypes.MULTI_SELECT:
        onUpdateSurvey(
          Object.assign(blockShape, {
            question: [],
            answer: [],
          }),
        );
        break;
      default:
        throw new Error('return untyped block.');
    }
  };
  return (0, jsx_runtime_1.jsxs)(S.SurveyContainer, {
    children: [
      (0, jsx_runtime_1.jsxs)(
        components_1.FlexDiv,
        Object.assign(
          { justifyContent: 'space-between' },
          {
            children: [
              (0, jsx_runtime_1.jsx)(components_1.Text, {
                children: surveyType
                  ? (0, converter_1.getNameFromSurveyType)(surveyType)
                  : '설문 유형을 선택하세요',
              }),
              (0, jsx_runtime_1.jsx)(components_1.Dropdown, {
                items: surveys_1.surveyList,
                selectedIndex: surveys_1.surveyList.findIndex(
                  v => v.value.toLowerCase() === survey.type,
                ),
                onChange: onSelect,
              }),
            ],
          },
        ),
      ),
      surveyType &&
        (0, jsx_runtime_1.jsxs)(components_1.Section, {
          children: [
            (0, jsx_runtime_1.jsx)(components_1.Inputs, {
              placeholder: '\uC9C8\uBB38\uC744 \uC785\uB825\uD558\uC138\uC694',
              value: title,
              onChange: e => {
                onUpdateSurvey(
                  Object.assign(Object.assign({}, survey), {
                    title: e.target.value,
                  }),
                );
                setTitle(e.target.value);
              },
            }),
            (0, jsx_runtime_1.jsx)(components_1.Inputs, {
              placeholder: '\uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694',
              value: description,
              onChange: e => {
                onUpdateSurvey(
                  Object.assign(Object.assign({}, survey), {
                    description: e.target.value,
                  }),
                );
                setDescription(e.target.value);
              },
            }),
            (surveyType === types_1.ESurveyTypes.SINGLE_SELECT ||
              surveyType === types_1.ESurveyTypes.MULTI_SELECT) &&
              (0, jsx_runtime_1.jsx)(OptionEditor_1.default, {
                items: survey.question,
                onAddOption: items =>
                  onUpdateSurvey(
                    Object.assign(Object.assign({}, survey), {
                      question: items,
                    }),
                  ),
                onUpdateOption: items =>
                  onUpdateSurvey(
                    Object.assign(Object.assign({}, survey), {
                      question: items,
                    }),
                  ),
                onRemoveOption: id =>
                  onUpdateSurvey(
                    Object.assign(Object.assign({}, survey), {
                      question: survey.question.filter(
                        question => question.key !== id,
                      ),
                    }),
                  ),
              }),
          ],
        }),
      (0, jsx_runtime_1.jsx)(
        components_1.Section,
        Object.assign(
          { style: { marginTop: 10 } },
          {
            children: (0, jsx_runtime_1.jsx)(
              components_1.Button,
              Object.assign(
                { onClick: () => onRemoveSurvey(survey.id) },
                { children: '\uC81C\uAC70' },
              ),
            ),
          },
        ),
      ),
    ],
  });
};
exports.default = Surveys;
