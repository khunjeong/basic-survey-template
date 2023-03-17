let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.OptionSelectItem = exports.OptionSelectorContainer = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const colors_1 = require('../../../../styles/colors');
exports.OptionSelectorContainer = styled_components_1.default.div`
  width: 100%;
`;
exports.OptionSelectItem = styled_components_1.default.div`
  width: 100%;
  margin: 8px 0px;
  padding: 8px 16px;
  border: 1px solid ${colors_1.colors.GRAY_BRIGHT_1};
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${colors_1.colors.PRIMARY};
    p {
      color: ${colors_1.colors.WHITE};
    }
  }
  &.selected {
    background-color: ${colors_1.colors.GRAY_BRIGHT_1};
    p {
      color: ${colors_1.colors.WHITE};
    }
  }
`;
