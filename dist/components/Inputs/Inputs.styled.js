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
exports.UploadInputContainer = exports.Input = void 0;
const styled_components_1 = __importStar(require('styled-components'));
const colors_1 = require('../../styles/colors');
const BaseInputCss = (0, styled_components_1.css)`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  margin: 5px 0;
  border: 1px solid ${colors_1.colors.GRAY_BRIGHT_1};
  border-radius: 5px;
  font-size: 0.9em;
  outline: none;
`;
exports.Input = styled_components_1.default.input`
  ${BaseInputCss}
  transition: all 0.3s;
  &:focus,
  &:active {
    border-color: ${colors_1.colors.PRIMARY};
  }
`;
exports.UploadInputContainer = styled_components_1.default.div`
  display: flex;
  align-items: center;
  position: relative;
  ${BaseInputCss};
  
  button {
    position: absolute;
    overflow: hidden;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 2px;
    width: 44px;
    height: 44px;
    top: 4px;
    right: 4px;
    img {
      object-fit: cover;
      width: 44px;
      height: 44px;
    }
  }
  .question {
    width: 100%;
    border: none;
    &:focus,
    &:active {
      outline: none !important;
    }
  }
  }
`;
