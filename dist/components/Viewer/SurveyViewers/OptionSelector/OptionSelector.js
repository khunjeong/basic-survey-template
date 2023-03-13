import { jsx as _jsx } from 'react/jsx-runtime';
import classnames from 'classnames';
import { Text } from '../../../../components';
import * as S from './OptionSelector.styled';
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
export var OptionSelector = function (_a) {
  let value = _a.value,
    questions = _a.questions,
    onChange = _a.onChange;
  return _jsx(S.OptionSelectorContainer, {
    children: questions.map(function (question) {
      return _jsx(
        S.OptionSelectItem,
        __assign(
          {
            className: classnames({
              selected: value === question.key,
            }),
            onClick: function () {
              return onChange(question.key);
            },
          },
          { children: _jsx(Text, { children: question.value }) },
        ),
        question.key,
      );
    }),
  });
};
export var OptionMultiSelector = function (_a) {
  let value = _a.value,
    questions = _a.questions,
    onChange = _a.onChange;
  return _jsx(S.OptionSelectorContainer, {
    children: questions.map(function (question) {
      return _jsx(
        S.OptionSelectItem,
        __assign(
          {
            className: classnames({
              selected: value.includes(question.key),
            }),
            onClick: function () {
              return onChange(question.key);
            },
          },
          { children: _jsx(Text, { children: question.value }) },
        ),
        question.key,
      );
    }),
  });
};
