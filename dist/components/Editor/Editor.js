import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useCallback, useState } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { Article, Section, Button, Inputs } from '../../components';
import Surveys from './Surveys';
import { ESurveyTypes } from '../../types';
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
let RangePicker = DatePicker.RangePicker;
let dateFormat = 'YYYY-MM-DD';
let nowDate = dayjs();
let Editor = function (_a) {
  let onSubmit = _a.onSubmit;
  let _b = useState(''),
    title = _b[0],
    setTitle = _b[1];
  let _c = useState(''),
    description = _c[0],
    setDescription = _c[1];
  let _d = useState(nowDate.format(dateFormat)),
    startDate = _d[0],
    setStartDate = _d[1];
  let _e = useState(nowDate.add(1, 'd').format(dateFormat)),
    endDate = _e[0],
    setEndDate = _e[1];
  let _f = useState([]),
    surveyContents = _f[0],
    setSurveyContents = _f[1];
  let addSurveyContent = useCallback(
    function () {
      setSurveyContents(
        __spreadArray(
          __spreadArray([], surveyContents, true),
          [
            {
              id: uuid(),
              type: ESurveyTypes.BLANK,
              required: false,
            },
          ],
          false,
        ),
      );
    },
    [surveyContents],
  );
  let onUpdateSurvey = function (survey) {
    setSurveyContents(
      surveyContents.map(function (content) {
        return content.id === survey.id ? survey : content;
      }),
    );
  };
  let onRemoveSurvey = function (id) {
    setSurveyContents(
      surveyContents.filter(function (content) {
        return content.id !== id;
      }),
    );
  };
  return _jsxs(Article, {
    children: [
      _jsx(Section, {
        children: _jsx(RangePicker, {
          defaultValue: [
            dayjs(startDate, dateFormat),
            dayjs(endDate, dateFormat),
          ],
          format: dateFormat,
          onChange: function (rangeValue) {
            if (rangeValue) {
              setStartDate(
                dayjs(
                  rangeValue === null || rangeValue === void 0
                    ? void 0
                    : rangeValue[0],
                ).format(dateFormat),
              );
              setEndDate(
                dayjs(
                  rangeValue === null || rangeValue === void 0
                    ? void 0
                    : rangeValue[1],
                ).format(dateFormat),
              );
            }
          },
        }),
      }),
      _jsxs(Section, {
        children: [
          _jsx(Inputs, {
            placeholder:
              '\uC124\uBB38 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694',
            value: title,
            onChange: function (e) {
              return setTitle(e.target.value);
            },
          }),
          _jsx(Inputs, {
            placeholder:
              '\uC124\uBB38 \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694',
            value: description,
            onChange: function (e) {
              return setDescription(e.target.value);
            },
          }),
        ],
      }),
      _jsx(Section, {
        children: surveyContents.map(function (content) {
          return _jsx(
            Surveys,
            {
              survey: content,
              onUpdateSurvey: onUpdateSurvey,
              onRemoveSurvey: onRemoveSurvey,
            },
            content.id,
          );
        }),
      }),
      _jsx(Section, {
        children: _jsx(
          Button,
          __assign(
            { onClick: addSurveyContent },
            { children: '\uAD6C\uC131\uCD94\uAC00' },
          ),
        ),
      }),
      _jsx(Section, {
        children: _jsx(
          Button,
          __assign(
            {
              onClick: function () {
                return onSubmit({
                  title: title,
                  description: description,
                  content: surveyContents.filter(function (_a) {
                    let type = _a.type;
                    return type !== ESurveyTypes.BLANK;
                  }),
                  startDate: startDate,
                  endDate: endDate,
                });
              },
            },
            { children: '\uC804\uC1A1\uD558\uAE30' },
          ),
        ),
      }),
    ],
  });
};
export default Editor;
