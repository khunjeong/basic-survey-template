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
exports.UploadInput = exports.Inputs = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const react_1 = require('react');
const icons_1 = require('@ant-design/icons');
const S = __importStar(require('./Inputs.styled'));
const Inputs = props => {
  return (0, jsx_runtime_1.jsx)(S.Input, Object.assign({}, props));
};
exports.Inputs = Inputs;
const UploadInput = props => {
  const { previewFileSrc, handleUpdateImg } = props;
  const imgInputRef = (0, react_1.useRef)(null);
  const onUploadClick = e => {
    e.stopPropagation();
    imgInputRef.current && imgInputRef.current.click();
  };
  return (0, jsx_runtime_1.jsxs)(S.UploadInputContainer, {
    children: [
      (0, jsx_runtime_1.jsx)(
        'input',
        Object.assign({ className: 'question' }, props),
      ),
      previewFileSrc.length
        ? (0, jsx_runtime_1.jsx)('button', {
            children: (0, jsx_runtime_1.jsx)('img', {
              className: 'preview',
              src: previewFileSrc,
              onClick: onUploadClick,
            }),
          })
        : (0, jsx_runtime_1.jsx)(
            'button',
            Object.assign(
              { className: 'upload', onClick: onUploadClick },
              { children: (0, jsx_runtime_1.jsx)(icons_1.PictureOutlined, {}) },
            ),
          ),
      (0, jsx_runtime_1.jsx)('input', {
        ref: imgInputRef,
        type: 'file',
        name: 'file',
        accept: 'image/*',
        style: { display: 'none' },
        onChange: handleUpdateImg,
      }),
    ],
  });
};
exports.UploadInput = UploadInput;
