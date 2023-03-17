let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Button = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const colors_1 = require('../../styles/colors');
exports.Button = styled_components_1.default.button`
  width: 100%;
  height: 36px;
  padding: 0 5px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: ${colors_1.colors.PRIMARY};
  }
  &.active {
    color: #fff;
    background-color: ${colors_1.colors.PRIMARY};
  }
`;
