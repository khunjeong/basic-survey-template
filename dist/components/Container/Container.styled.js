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
export var FlexDiv = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  display: flex;\n  flex-direction: ',
        ';\n  align-items: ',
        ';\n  justify-content: ',
        ';\n  gap: 8px;\n',
      ],
      [
        '\n  display: flex;\n  flex-direction: ',
        ';\n  align-items: ',
        ';\n  justify-content: ',
        ';\n  gap: 8px;\n',
      ],
    )),
  function (props) {
    return props.flexDirection || 'row';
  },
  function (props) {
    return props.alignItems || 'center';
  },
  function (props) {
    return props.justifyContent || 'center';
  },
);
export var Article = styled.article(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  width: 100%;\n  padding: 20px;\n  border: 1px solid ',
        ';\n  gap: 8px;\n',
      ],
      [
        '\n  width: 100%;\n  padding: 20px;\n  border: 1px solid ',
        ';\n  gap: 8px;\n',
      ],
    )),
  colors.GRAY_BRIGHT_3,
);
export var Section = styled.section(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  width: 100%;\n  margin: 8px 0px;\n  gap: 8px;\n'],
      ['\n  width: 100%;\n  margin: 8px 0px;\n  gap: 8px;\n'],
    )),
);
let templateObject_1, templateObject_2, templateObject_3;
