let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Text = exports.Description = exports.Title = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const colors_1 = require('../../styles/colors');
exports.Title = styled_components_1.default.h2`
  font-size: ${props => props.size || '1.5em'};
  font-weight: ${props => props.weight || 700};
  color: ${props => props.color || colors_1.colors.BLACK};
  ${props =>
    props.isEllipsis &&
    `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  `}
`;
exports.Description = styled_components_1.default.p`
  font-size: ${props => props.size || '1em'};
  font-weight: ${props => props.weight || 700};
  color: ${props => props.color || colors_1.colors.GRAY_ORIGIN_1};
  ${props =>
    props.isEllipsis &&
    `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  `}
`;
exports.Text = styled_components_1.default.p`
  font-size: ${props => props.size || '1em'};
  font-weight: ${props => props.weight || 700};
  color: ${props => props.color || colors_1.colors.BLACK};
  ${props =>
    props.isEllipsis &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    `}
`;
