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
exports.OptionMultiSelector = exports.OptionSelector = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const classnames_1 = __importDefault(require('classnames'));
const components_1 = require('../../../../components');
const S = __importStar(require('./OptionSelector.styled'));
const OptionSelector = ({ value, questions, onChange }) => {
  return (0, jsx_runtime_1.jsx)(S.OptionSelectorContainer, {
    children: questions.map(question => {
      return (0, jsx_runtime_1.jsx)(
        S.OptionSelectItem,
        Object.assign(
          {
            className: (0, classnames_1.default)({
              selected: value === question.key,
            }),
            onClick: () => onChange(question.key),
          },
          {
            children: (0, jsx_runtime_1.jsx)(components_1.Text, {
              children: question.value,
            }),
          },
        ),
        question.key,
      );
    }),
  });
};
exports.OptionSelector = OptionSelector;
const OptionMultiSelector = ({ value, questions, onChange }) => {
  return (0, jsx_runtime_1.jsx)(S.OptionSelectorContainer, {
    children: questions.map(question => {
      return (0, jsx_runtime_1.jsx)(
        S.OptionSelectItem,
        Object.assign(
          {
            className: (0, classnames_1.default)({
              selected: value.includes(question.key),
            }),
            onClick: () => onChange(question.key),
          },
          {
            children: (0, jsx_runtime_1.jsx)(components_1.Text, {
              children: question.value,
            }),
          },
        ),
        question.key,
      );
    }),
  });
};
exports.OptionMultiSelector = OptionMultiSelector;
