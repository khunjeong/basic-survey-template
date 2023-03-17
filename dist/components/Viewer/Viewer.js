let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const jsx_runtime_1 = require('react/jsx-runtime');
const react_1 = require('react');
const components_1 = require('../../components');
const SurveyViewers_1 = __importDefault(require('./SurveyViewers'));
const Viewer = ({ survey, onSubmit }) => {
  const [surveyContents, setSurveyContents] = (0, react_1.useState)(survey);
  const onUpdateSurvey = (survey, index) => {
    setSurveyContents(
      Object.assign(Object.assign({}, surveyContents), {
        content: surveyContents.content.map((content, i) =>
          i === index ? survey : content,
        ),
      }),
    );
  };
  return (0, jsx_runtime_1.jsxs)(components_1.Article, {
    children: [
      (0, jsx_runtime_1.jsx)(components_1.Section, {
        children: (0, jsx_runtime_1.jsx)(components_1.Title, {
          children: surveyContents.title,
        }),
      }),
      (0, jsx_runtime_1.jsx)(components_1.Section, {
        children: (0, jsx_runtime_1.jsx)(components_1.Description, {
          children: surveyContents.description,
        }),
      }),
      (0, jsx_runtime_1.jsx)(components_1.Section, {
        children: surveyContents.content.map((survey, index) =>
          (0, jsx_runtime_1.jsx)(
            SurveyViewers_1.default,
            {
              survey: survey,
              onUpdateSurvey: surveyItem => onUpdateSurvey(surveyItem, index),
            },
            survey.id,
          ),
        ),
      }),
      (0, jsx_runtime_1.jsx)(components_1.Section, {
        children: (0, jsx_runtime_1.jsx)(
          components_1.Button,
          Object.assign(
            { onClick: () => onSubmit(surveyContents) },
            { children: '\uD22C\uD45C\uD558\uAE30' },
          ),
        ),
      }),
    ],
  });
};
exports.default = Viewer;
