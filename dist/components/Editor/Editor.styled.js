let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.EditorContainer = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const colors_1 = require('../../styles/colors');
exports.EditorContainer = styled_components_1.default.div`
  width: 50%;
  border: 1px solid ${colors_1.colors.BLUE_ORIGIN};
`;
