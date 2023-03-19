let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.CheckWrap = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const colors_1 = require('../../../styles/colors');
exports.CheckWrap = styled_components_1.default.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${colors_1.colors.PRIMARY};
  }
  &:disabled {
    color: ${colors_1.colors.GRAY_BRIGHT_1};
    cursor: not-allowed;
    &:hover {
      color: ${colors_1.colors.GRAY_BRIGHT_1};
    }
  }
`;
