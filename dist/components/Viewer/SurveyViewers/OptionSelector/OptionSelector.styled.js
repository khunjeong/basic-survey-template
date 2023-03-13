import styled from 'styled-components';
import { colors } from '../../../../styles/colors';
let __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
export var OptionSelectorContainer = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  width: 100%;\n'],
      ['\n  width: 100%;\n'],
    )),
);
export var OptionSelectItem = styled.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  width: 100%;\n  margin: 8px 0px;\n  padding: 8px 16px;\n  border: 1px solid ',
        ';\n  border-radius: 10px;\n  cursor: pointer;\n  &:hover {\n    background-color: ',
        ';\n    p {\n      color: ',
        ';\n    }\n  }\n  &.selected {\n    background-color: ',
        ';\n    p {\n      color: ',
        ';\n    }\n  }\n',
      ],
      [
        '\n  width: 100%;\n  margin: 8px 0px;\n  padding: 8px 16px;\n  border: 1px solid ',
        ';\n  border-radius: 10px;\n  cursor: pointer;\n  &:hover {\n    background-color: ',
        ';\n    p {\n      color: ',
        ';\n    }\n  }\n  &.selected {\n    background-color: ',
        ';\n    p {\n      color: ',
        ';\n    }\n  }\n',
      ],
    )),
  colors.GRAY_BRIGHT_1,
  colors.PRIMARY,
  colors.WHITE,
  colors.GRAY_BRIGHT_1,
  colors.WHITE,
);
let templateObject_1, templateObject_2;
