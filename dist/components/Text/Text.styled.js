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
export var Title = styled.h2(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  font-size: ', ';\n  font-weight: ', ';\n  color: ', ';\n  ', '\n'],
      ['\n  font-size: ', ';\n  font-weight: ', ';\n  color: ', ';\n  ', '\n'],
    )),
  function (props) {
    return props.size || '1.5em';
  },
  function (props) {
    return props.weight || 700;
  },
  function (props) {
    return props.color || colors.BLACK;
  },
  function (props) {
    return (
      props.isEllipsis &&
      '\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  '
    );
  },
);
export var Description = styled.p(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  font-size: ', ';\n  font-weight: ', ';\n  color: ', ';\n  ', '\n'],
      ['\n  font-size: ', ';\n  font-weight: ', ';\n  color: ', ';\n  ', '\n'],
    )),
  function (props) {
    return props.size || '1em';
  },
  function (props) {
    return props.weight || 700;
  },
  function (props) {
    return props.color || colors.GRAY_ORIGIN_1;
  },
  function (props) {
    return (
      props.isEllipsis &&
      '\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  '
    );
  },
);
export var Text = styled.p(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  font-size: ', ';\n  font-weight: ', ';\n  color: ', ';\n  ', '\n'],
      ['\n  font-size: ', ';\n  font-weight: ', ';\n  color: ', ';\n  ', '\n'],
    )),
  function (props) {
    return props.size || '1em';
  },
  function (props) {
    return props.weight || 700;
  },
  function (props) {
    return props.color || colors.BLACK;
  },
  function (props) {
    return (
      props.isEllipsis &&
      '\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    '
    );
  },
);
let templateObject_1, templateObject_2, templateObject_3;
