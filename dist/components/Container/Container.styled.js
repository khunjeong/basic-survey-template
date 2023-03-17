let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Section = exports.Article = exports.FlexDiv = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const colors_1 = require('../../styles/colors');
exports.FlexDiv = styled_components_1.default.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  gap: 8px;
`;
exports.Article = styled_components_1.default.article`
  width: 100%;
  padding: 20px;
  border: 1px solid ${colors_1.colors.GRAY_BRIGHT_3};
  gap: 8px;
`;
exports.Section = styled_components_1.default.section`
  width: 100%;
  margin: 8px 0px;
  gap: 8px;
`;
