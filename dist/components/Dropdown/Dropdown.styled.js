let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.DropdownWrap = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
const colors_1 = require('../../styles/colors');
exports.DropdownWrap = styled_components_1.default.div`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 36px;
  padding: 0 10px;
  text-align: left;
  border: 1px solid ${colors_1.colors.GRAY_BRIGHT_1};
  border-radius: 5px;
  font-size: 0.9em;
  outline: none;
  transition: all 0.3s;
  cursor: default;
  &:focus,
  &:active {
    border-color: ${colors_1.colors.PRIMARY};
  }
  .select-current-value {
    height: 36px;
    vertical-align: middle;
    display: flex;
    align-items: center;
    > p {
      flex: 1;
      margin: 0;
    }
    .select-icon {
      width: 14px;
    }
  }
  .select-options-container {
    position: absolute;
    width: 100%;
    max-height: 300px;
    top: 0px;
    left: 0px;
    background-color: #fff;
    border-radius: inherit;
    overflow: auto;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);
    z-index: 9999;
    .select-options {
      padding: 0 10px;
      height: 36px;
      line-height: 36px;
      vertical-align: middle;
      &.selected {
        color: ${colors_1.colors.BLACK};
        background-color: ${colors_1.colors.GRAY_BRIGHT_1};
      }
      &:hover {
        color: #fff;
        background-color: ${colors_1.colors.PRIMARY};
      }
    }
  }
`;
