import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { Article, Button, Description, Section, Title } from '../../components';
import SurveyViewers from './SurveyViewers';
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
let Viewer = function (_a) {
  let survey = _a.survey,
    onSubmit = _a.onSubmit;
  let _b = useState(survey),
    surveyContents = _b[0],
    setSurveyContents = _b[1];
  let onUpdateSurvey = function (survey, index) {
    setSurveyContents(
      __assign(__assign({}, surveyContents), {
        content: surveyContents.content.map(function (content, i) {
          return i === index ? survey : content;
        }),
      }),
    );
  };
  return _jsxs(Article, {
    children: [
      _jsx(Section, {
        children: _jsx(Title, { children: surveyContents.title }),
      }),
      _jsx(Section, {
        children: _jsx(Description, { children: surveyContents.description }),
      }),
      _jsx(Section, {
        children: surveyContents.content.map(function (survey, index) {
          return _jsx(
            SurveyViewers,
            {
              survey: survey,
              onUpdateSurvey: function (surveyItem) {
                return onUpdateSurvey(surveyItem, index);
              },
            },
            survey.id,
          );
        }),
      }),
      _jsx(Section, {
        children: _jsx(
          Button,
          __assign(
            {
              onClick: function () {
                return onSubmit(surveyContents);
              },
            },
            { children: '\uD22C\uD45C\uD558\uAE30' },
          ),
        ),
      }),
    ],
  });
};
export default Viewer;
