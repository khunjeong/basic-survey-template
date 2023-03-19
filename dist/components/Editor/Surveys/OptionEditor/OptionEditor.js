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
let __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
const jsx_runtime_1 = require('react/jsx-runtime');
const icons_1 = require('@ant-design/icons');
const uuid_1 = require('uuid');
const components_1 = require('../../../../components');
const S = __importStar(require('./OptionEditor.styled'));
const OptionEditor = ({
  items,
  onAddOption,
  onUpdateOption,
  onRemoveOption,
}) => {
  const updateImg = ({ target, key }) =>
    __awaiter(void 0, void 0, void 0, function* () {
      if (target.target.files) {
        const file = target.target.files[0];
        // 이미지 파일 저장
        // setSignupProfileFile(file);
        onUpdateOption(
          items.map(question =>
            question.key === key
              ? Object.assign(Object.assign({}, question), {
                  image: URL.createObjectURL(new Blob([file])),
                })
              : question,
          ),
        );
      }
    });
  return (0, jsx_runtime_1.jsxs)(S.OptionEditorContainer, {
    children: [
      items.map(item =>
        (0, jsx_runtime_1.jsxs)(
          components_1.FlexDiv,
          Object.assign(
            { style: { gap: 16 } },
            {
              children: [
                (0, jsx_runtime_1.jsx)(icons_1.MinusCircleOutlined, {
                  onClick: () => onRemoveOption(item.key),
                }),
                (0, jsx_runtime_1.jsx)(components_1.UploadInput, {
                  placeholder: '\uD56D\uBAA9 \uC785\uB825',
                  value: item.value,
                  onChange: e =>
                    onUpdateOption(
                      items.map(question =>
                        question.key === item.key
                          ? Object.assign(Object.assign({}, question), {
                              value: e.target.value,
                            })
                          : question,
                      ),
                    ),
                  previewFileSrc: item.image,
                  handleUpdateImg: target =>
                    updateImg({ target, key: item.key }),
                }),
              ],
            },
          ),
          item.key,
        ),
      ),
      (0, jsx_runtime_1.jsxs)(
        components_1.FlexDiv,
        Object.assign(
          {
            style: { gap: 16, cursor: 'pointer' },
            onClick: () =>
              onAddOption([
                ...items,
                {
                  key: (0, uuid_1.v4)(),
                  value: '',
                  index: items.length + 1,
                  image: '',
                },
              ]),
          },
          {
            children: [
              (0, jsx_runtime_1.jsx)(icons_1.PlusCircleOutlined, {}),
              (0, jsx_runtime_1.jsx)(components_1.Inputs, {
                placeholder: '\uD56D\uBAA9 \uCD94\uAC00',
                readOnly: true,
              }),
            ],
          },
        ),
      ),
    ],
  });
};
exports.default = OptionEditor;
