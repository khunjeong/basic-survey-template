let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Input = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const colors_1 = require('../../styles/colors');
exports.Input = styled_components_1.default.input`
  width: 100%;
  height: 36px;
  padding: 0 10px;
  margin: 5px 0;
  border: 1px solid ${colors_1.colors.GRAY_BRIGHT_1};
  border-radius: 5px;
  font-size: 0.9em;
  outline: none;
  transition: all 0.3s;
  &:focus,
  &:active {
    border-color: ${colors_1.colors.PRIMARY};
  }
`;
