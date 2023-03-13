import {
  jsx as _jsx,
  Fragment as _Fragment,
  jsxs as _jsxs,
} from 'react/jsx-runtime';
import { FlexDiv, Title, Description } from '../../../components';
import { OptionSelector, OptionMultiSelector } from './OptionSelector';
import { ESurveyTypes } from '../../../types';
import * as S from './SurveyViewers.styled';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (let p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
let __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
let SurveyViewers = function (_a) {
  let survey = _a.survey,
    onUpdateSurvey = _a.onUpdateSurvey;
  return _jsx(S.SurveyViewerContainer, {
    children: _jsxs(
      FlexDiv,
      __assign(
        { flexDirection: 'column', alignItems: 'flex-start' },
        {
          children: [
            survey.title &&
              _jsx(Title, __assign({ size: 18 }, { children: survey.title })),
            survey.description &&
              _jsx(
                Description,
                __assign({ size: 12 }, { children: survey.description }),
              ),
            survey.type === ESurveyTypes.SINGLE_SELECT &&
              _jsxs(_Fragment, {
                children: [
                  _jsx(
                    Description,
                    __assign(
                      { size: 12 },
                      { children: '1\uAC1C \uC120\uD0DD \uAC00\uB2A5' },
                    ),
                  ),
                  _jsx(OptionSelector, {
                    value: survey.answer,
                    questions: survey.question,
                    onChange: function (value) {
                      return onUpdateSurvey(
                        __assign(__assign({}, survey), { answer: value }),
                      );
                    },
                  }),
                ],
              }),
            survey.type === ESurveyTypes.MULTI_SELECT &&
              _jsxs(_Fragment, {
                children: [
                  _jsx(
                    Description,
                    __assign(
                      { size: 12 },
                      { children: '1\uAC1C \uC120\uD0DD \uAC00\uB2A5' },
                    ),
                  ),
                  _jsx(OptionMultiSelector, {
                    value: survey.answer,
                    questions: survey.question,
                    onChange: function (value) {
                      return onUpdateSurvey(
                        __assign(__assign({}, survey), {
                          answer: survey.answer.includes(value)
                            ? survey.answer.filter(function (key) {
                                return key !== value;
                              })
                            : __spreadArray(
                                __spreadArray([], survey.answer, true),
                                [value],
                                false,
                              ),
                        }),
                      );
                    },
                  }),
                ],
              }),
          ],
        },
      ),
    ),
  });
};
export default SurveyViewers;
