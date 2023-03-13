import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import {
  Button,
  FlexDiv,
  Text,
  Dropdown,
  Section,
  Inputs,
} from '../../../components';
import OptionEditor from './OptionEditor/OptionEditor';
import { surveyList } from '../../../constants/surveys';
import { getNameFromSurveyType } from '../../../utils/converter';
import * as S from './Surveys.styled';
import { ESurveyTypes } from '../../../types';
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
let Surveys = function (_a) {
  let survey = _a.survey,
    onUpdateSurvey = _a.onUpdateSurvey,
    onRemoveSurvey = _a.onRemoveSurvey;
  let surveyType = survey.type !== ESurveyTypes.BLANK && survey.type;
  let _b = useState(survey.title),
    title = _b[0],
    setTitle = _b[1];
  let _c = useState(survey.description),
    description = _c[0],
    setDescription = _c[1];
  useEffect(
    function () {
      console.log({ survey: survey });
    },
    [survey],
  );
  let onSelect = function (value) {
    let blockShape = __assign(__assign({}, survey), {
      type: value.value.toLowerCase(),
    });
    switch (blockShape.type) {
      case ESurveyTypes.BLANK:
        onUpdateSurvey(blockShape);
        break;
      case ESurveyTypes.SINGLE_SELECT:
        onUpdateSurvey(
          Object.assign(blockShape, {
            question: [],
            answer: null,
          }),
        );
        break;
      case ESurveyTypes.MULTI_SELECT:
        onUpdateSurvey(
          Object.assign(blockShape, {
            question: [],
            answer: [],
          }),
        );
        break;
      default:
        throw new Error('return untyped block.');
    }
  };
  return _jsxs(S.SurveyContainer, {
    children: [
      _jsxs(
        FlexDiv,
        __assign(
          { justifyContent: 'space-between' },
          {
            children: [
              _jsx(Text, {
                children: surveyType
                  ? getNameFromSurveyType(surveyType)
                  : '설문 유형을 선택하세요',
              }),
              _jsx(Dropdown, {
                items: surveyList,
                selectedIndex: surveyList.findIndex(function (v) {
                  return v.value.toLowerCase() === survey.type;
                }),
                onChange: onSelect,
              }),
            ],
          },
        ),
      ),
      surveyType &&
        _jsxs(Section, {
          children: [
            _jsx(Inputs, {
              placeholder: '\uC9C8\uBB38\uC744 \uC785\uB825\uD558\uC138\uC694',
              value: title,
              onChange: function (e) {
                onUpdateSurvey(
                  __assign(__assign({}, survey), { title: e.target.value }),
                );
                setTitle(e.target.value);
              },
            }),
            _jsx(Inputs, {
              placeholder: '\uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694',
              value: description,
              onChange: function (e) {
                onUpdateSurvey(
                  __assign(__assign({}, survey), {
                    description: e.target.value,
                  }),
                );
                setDescription(e.target.value);
              },
            }),
            (surveyType === ESurveyTypes.SINGLE_SELECT ||
              surveyType === ESurveyTypes.MULTI_SELECT) &&
              _jsx(OptionEditor, {
                items: survey.question,
                onAddOption: function (items) {
                  return onUpdateSurvey(
                    __assign(__assign({}, survey), { question: items }),
                  );
                },
                onUpdateOption: function (items) {
                  return onUpdateSurvey(
                    __assign(__assign({}, survey), { question: items }),
                  );
                },
                onRemoveOption: function (id) {
                  return onUpdateSurvey(
                    __assign(__assign({}, survey), {
                      question: survey.question.filter(function (question) {
                        return question.key !== id;
                      }),
                    }),
                  );
                },
              }),
          ],
        }),
      _jsx(
        Section,
        __assign(
          { style: { marginTop: 10 } },
          {
            children: _jsx(
              Button,
              __assign(
                {
                  onClick: function () {
                    return onRemoveSurvey(survey.id);
                  },
                },
                { children: '\uC81C\uAC70' },
              ),
            ),
          },
        ),
      ),
    ],
  });
};
export default Surveys;
