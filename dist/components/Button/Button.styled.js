import styled from 'styled-components';
import { colors } from '../../styles/colors';
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
export var Button = styled.button(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  width: 100%;\n  height: 36px;\n  padding: 0 5px;\n  border: none;\n  border-radius: 5px;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  &:hover {\n    color: #fff;\n    background-color: ',
        ';\n  }\n  &.active {\n    color: #fff;\n    background-color: ',
        ';\n  }\n',
      ],
      [
        '\n  width: 100%;\n  height: 36px;\n  padding: 0 5px;\n  border: none;\n  border-radius: 5px;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  &:hover {\n    color: #fff;\n    background-color: ',
        ';\n  }\n  &.active {\n    color: #fff;\n    background-color: ',
        ';\n  }\n',
      ],
    )),
  colors.PRIMARY,
  colors.PRIMARY,
);
let templateObject_1;
