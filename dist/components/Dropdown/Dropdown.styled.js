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
export var DropdownWrap = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  position: relative;\n  display: inline-block;\n  width: 50%;\n  height: 36px;\n  padding: 0 10px;\n  text-align: left;\n  border: 1px solid ',
        ';\n  border-radius: 5px;\n  font-size: 0.9em;\n  outline: none;\n  transition: all 0.3s;\n  cursor: default;\n  &:focus,\n  &:active {\n    border-color: ',
        ';\n  }\n  .select-current-value {\n    height: 36px;\n    vertical-align: middle;\n    display: flex;\n    align-items: center;\n    > p {\n      flex: 1;\n      margin: 0;\n    }\n    .select-icon {\n      width: 14px;\n    }\n  }\n  .select-options-container {\n    position: absolute;\n    width: 100%;\n    max-height: 300px;\n    top: 0px;\n    left: 0px;\n    background-color: #fff;\n    border-radius: inherit;\n    overflow: auto;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);\n    z-index: 9999;\n    .select-options {\n      padding: 0 10px;\n      height: 36px;\n      line-height: 36px;\n      vertical-align: middle;\n      &.selected {\n        color: ',
        ';\n        background-color: ',
        ';\n      }\n      &:hover {\n        color: #fff;\n        background-color: ',
        ';\n      }\n    }\n  }\n',
      ],
      [
        '\n  position: relative;\n  display: inline-block;\n  width: 50%;\n  height: 36px;\n  padding: 0 10px;\n  text-align: left;\n  border: 1px solid ',
        ';\n  border-radius: 5px;\n  font-size: 0.9em;\n  outline: none;\n  transition: all 0.3s;\n  cursor: default;\n  &:focus,\n  &:active {\n    border-color: ',
        ';\n  }\n  .select-current-value {\n    height: 36px;\n    vertical-align: middle;\n    display: flex;\n    align-items: center;\n    > p {\n      flex: 1;\n      margin: 0;\n    }\n    .select-icon {\n      width: 14px;\n    }\n  }\n  .select-options-container {\n    position: absolute;\n    width: 100%;\n    max-height: 300px;\n    top: 0px;\n    left: 0px;\n    background-color: #fff;\n    border-radius: inherit;\n    overflow: auto;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);\n    z-index: 9999;\n    .select-options {\n      padding: 0 10px;\n      height: 36px;\n      line-height: 36px;\n      vertical-align: middle;\n      &.selected {\n        color: ',
        ';\n        background-color: ',
        ';\n      }\n      &:hover {\n        color: #fff;\n        background-color: ',
        ';\n      }\n    }\n  }\n',
      ],
    )),
  colors.GRAY_BRIGHT_1,
  colors.PRIMARY,
  colors.BLACK,
  colors.GRAY_BRIGHT_1,
  colors.PRIMARY,
);
let templateObject_1;
