let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.SurveyViewerContainer = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const components_1 = require('../../../components');
const colors_1 = require('../../../styles/colors');
exports.SurveyViewerContainer = (0, styled_components_1.default)(
  components_1.Section,
)`
  border: 1px solid ${colors_1.colors.GRAY_LIGHT_5};
  padding: 8px;
`;
