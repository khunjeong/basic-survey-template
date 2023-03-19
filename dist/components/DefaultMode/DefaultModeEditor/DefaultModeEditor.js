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
const antd_1 = require('antd');
const icons_1 = require('@ant-design/icons');
const dayjs_1 = __importDefault(require('dayjs'));
const uuid_1 = require('uuid');
const components_1 = require('../../../components');
const OptionEditor_1 = __importDefault(
  require('../../../components/Editor/Surveys/OptionEditor/OptionEditor'),
);
const colors_1 = require('../../../styles/colors');
const S = __importStar(require('./DefaultModeEditor.styled'));
const types_1 = require('../../../types');
const { RangePicker } = antd_1.DatePicker;
const dateFormat = 'YYYY-MM-DD';
const nowDate = (0, dayjs_1.default)();
const DefaultModeEditor = ({ onClose, onSubmit, submitButtonText }) => {
  const [title, setTitle] = (0, react_1.useState)('');
  const [description, setDescription] = (0, react_1.useState)('');
  const [startDate, setStartDate] = (0, react_1.useState)(
    nowDate.format(dateFormat),
  );
  const [endDate, setEndDate] = (0, react_1.useState)(
    nowDate.add(1, 'd').format(dateFormat),
  );
  const [surveyData, setSurveyData] = (0, react_1.useState)({
    id: (0, uuid_1.v4)(),
    type: types_1.ESurveyTypes.MULTI_SELECT,
    required: false,
    question: [],
    answer: [],
    maxChoice: 1,
  });
  return (0, jsx_runtime_1.jsxs)(components_1.Article, {
    children: [
      (0, jsx_runtime_1.jsxs)(
        components_1.FlexDiv,
        Object.assign(
          { justifyContent: 'space-between' },
          {
            children: [
              (0, jsx_runtime_1.jsx)(components_1.Description, {
                children:
                  '\u203B \uAE00 \uB4F1\uB85D \uC774\uD6C4\uC5D0\uB294 \uC218\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.',
              }),
              (0, jsx_runtime_1.jsx)(icons_1.CloseCircleOutlined, {
                style: { cursor: 'pointer' },
                onClick: onClose,
              }),
            ],
          },
        ),
      ),
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
      surveyData.type === types_1.ESurveyTypes.MULTI_SELECT &&
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
          children: [
            (0, jsx_runtime_1.jsx)(components_1.Section, {
              children: (0, jsx_runtime_1.jsx)(OptionEditor_1.default, {
                items: surveyData.question,
                onAddOption: items =>
                  setSurveyData(
                    Object.assign(Object.assign({}, surveyData), {
                      question: items,
                    }),
                  ),
                onUpdateOption: items =>
                  setSurveyData(
                    Object.assign(Object.assign({}, surveyData), {
                      question: items,
                    }),
                  ),
                onRemoveOption: id =>
                  setSurveyData(
                    Object.assign(Object.assign({}, surveyData), {
                      question: surveyData.question.filter(
                        question => question.key !== id,
                      ),
                    }),
                  ),
              }),
            }),
            (0, jsx_runtime_1.jsx)(components_1.Section, {
              children: (0, jsx_runtime_1.jsxs)(
                components_1.FlexDiv,
                Object.assign(
                  { justifyContent: 'space-between', style: { gap: 16 } },
                  {
                    children: [
                      (0, jsx_runtime_1.jsxs)(
                        components_1.FlexDiv,
                        Object.assign(
                          { style: { gap: 16 } },
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(icons_1.CheckOutlined, {
                                style: { color: colors_1.colors.GRAY_BRIGHT_1 },
                              }),
                              (0, jsx_runtime_1.jsx)(components_1.Description, {
                                children:
                                  '\uC120\uD0DD \uAC00\uB2A5 \uB2F5\uBCC0 \uC218',
                              }),
                            ],
                          },
                        ),
                      ),
                      (0, jsx_runtime_1.jsxs)(
                        components_1.FlexDiv,
                        Object.assign(
                          { style: { gap: 16 } },
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                S.CheckWrap,
                                Object.assign(
                                  {
                                    disabled: surveyData.maxChoice <= 1,
                                    onClick: () =>
                                      setSurveyData(
                                        Object.assign(
                                          Object.assign({}, surveyData),
                                          {
                                            maxChoice: surveyData.maxChoice - 1,
                                          },
                                        ),
                                      ),
                                  },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      icons_1.MinusCircleOutlined,
                                      {},
                                    ),
                                  },
                                ),
                              ),
                              (0, jsx_runtime_1.jsx)(components_1.Text, {
                                children: surveyData.maxChoice,
                              }),
                              (0, jsx_runtime_1.jsx)(
                                S.CheckWrap,
                                Object.assign(
                                  {
                                    disabled: surveyData.maxChoice >= 3,
                                    onClick: () =>
                                      setSurveyData(
                                        Object.assign(
                                          Object.assign({}, surveyData),
                                          {
                                            maxChoice: surveyData.maxChoice + 1,
                                          },
                                        ),
                                      ),
                                  },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      icons_1.PlusCircleOutlined,
                                      {},
                                    ),
                                  },
                                ),
                              ),
                            ],
                          },
                        ),
                      ),
                    ],
                  },
                ),
              ),
            }),
            onSubmit &&
              (0, jsx_runtime_1.jsx)(components_1.Section, {
                children: (0, jsx_runtime_1.jsx)(
                  components_1.Button,
                  Object.assign(
                    {
                      onClick: () =>
                        onSubmit(
                          Object.assign(Object.assign({}, surveyData), {
                            title,
                            description,
                            startDate,
                            endDate,
                          }),
                        ),
                    },
                    { children: submitButtonText || '전송하기' },
                  ),
                ),
              }),
          ],
        }),
    ],
  });
};
exports.default = DefaultModeEditor;
