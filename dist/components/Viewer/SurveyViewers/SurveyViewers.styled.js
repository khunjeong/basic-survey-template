import styled from 'styled-components';
import { Section } from '../../../components';
import { colors } from '../../../styles/colors';
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
export var SurveyViewerContainer = styled(Section)(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  border: 1px solid ', ';\n  padding: 8px;\n'],
      ['\n  border: 1px solid ', ';\n  padding: 8px;\n'],
    )),
  colors.GRAY_LIGHT_5,
);
let templateObject_1;
