let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const jsx_runtime_1 = require('react/jsx-runtime');
const react_1 = require('react');
const antd_1 = require('antd');
const dayjs_1 = __importDefault(require('dayjs'));
const uuid_1 = require('uuid');
const components_1 = require('../../components');
const Surveys_1 = __importDefault(require('./Surveys'));
const types_1 = require('../../types');
const { RangePicker } = antd_1.DatePicker;
const dateFormat = 'YYYY-MM-DD';
const nowDate = (0, dayjs_1.default)();
const Editor = ({ onSubmit }) => {
  const [title, setTitle] = (0, react_1.useState)('');
  const [description, setDescription] = (0, react_1.useState)('');
  const [startDate, setStartDate] = (0, react_1.useState)(
    nowDate.format(dateFormat),
  );
  const [endDate, setEndDate] = (0, react_1.useState)(
    nowDate.add(1, 'd').format(dateFormat),
  );
  const [surveyContents, setSurveyContents] = (0, react_1.useState)([]);
  const addSurveyContent = (0, react_1.useCallback)(() => {
    setSurveyContents([
      ...surveyContents,
      {
        id: (0, uuid_1.v4)(),
        type: types_1.ESurveyTypes.BLANK,
        required: false,
      },
    ]);
  }, [surveyContents]);
  const onUpdateSurvey = survey => {
    setSurveyContents(
      surveyContents.map(content =>
        content.id === survey.id ? survey : content,
      ),
    );
  };
  const onRemoveSurvey = id => {
    setSurveyContents(surveyContents.filter(content => content.id !== id));
  };
  return (0, jsx_runtime_1.jsxs)(components_1.Article, {
    children: [
      (0, jsx_runtime_1.jsx)(components_1.Section, {
        children: (0, jsx_runtime_1.jsx)(RangePicker, {
          defaultValue: [
            (0, dayjs_1.default)(startDate, dateFormat),
            (0, dayjs_1.default)(endDate, dateFormat),
          ],
          format: dateFormat,
          onChange: rangeValue => {
            if (rangeValue) {
              setStartDate(
                (0, dayjs_1.default)(
                  rangeValue === null || rangeValue === void 0
                    ? void 0
                    : rangeValue[0],
                ).format(dateFormat),
              );
              setEndDate(
                (0, dayjs_1.default)(
                  rangeValue === null || rangeValue === void 0
                    ? void 0
                    : rangeValue[1],
                ).format(dateFormat),
              );
            }
          },
        }),
      }),
      (0, jsx_runtime_1.jsxs)(components_1.Section, {
        children: [
          (0, jsx_runtime_1.jsx)(components_1.Inputs, {
            placeholder:
              '\uC124\uBB38 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694',
            value: title,
            onChange: e => setTitle(e.target.value),
          }),
          (0, jsx_runtime_1.jsx)(components_1.Inputs, {
            placeholder:
              '\uC124\uBB38 \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694',
            value: description,
            onChange: e => setDescription(e.target.value),
          }),
        ],
      }),
      (0, jsx_runtime_1.jsx)(components_1.Section, {
        children: surveyContents.map(content =>
          (0, jsx_runtime_1.jsx)(
            Surveys_1.default,
            {
              survey: content,
              onUpdateSurvey: onUpdateSurvey,
              onRemoveSurvey: onRemoveSurvey,
            },
            content.id,
          ),
        ),
      }),
      (0, jsx_runtime_1.jsx)(components_1.Section, {
        children: (0, jsx_runtime_1.jsx)(
          components_1.Button,
          Object.assign(
            { onClick: addSurveyContent },
            { children: '\uAD6C\uC131\uCD94\uAC00' },
          ),
        ),
      }),
      (0, jsx_runtime_1.jsx)(components_1.Section, {
        children: (0, jsx_runtime_1.jsx)(
          components_1.Button,
          Object.assign(
            {
              onClick: () =>
                onSubmit({
                  title,
                  description,
                  content: surveyContents.filter(
                    ({ type }) => type !== types_1.ESurveyTypes.BLANK,
                  ),
                  startDate,
                  endDate,
                }),
            },
            { children: '\uC804\uC1A1\uD558\uAE30' },
          ),
        ),
      }),
    ],
  });
};
exports.default = Editor;
