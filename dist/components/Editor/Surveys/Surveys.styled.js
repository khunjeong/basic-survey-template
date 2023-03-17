let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.SurveyContainer = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const colors_1 = require('../../../styles/colors');
exports.SurveyContainer = styled_components_1.default.div`
  width: 100%;
  border: 1px solid ${colors_1.colors.BLUE_ORIGIN};
  padding: 16px;
`;
