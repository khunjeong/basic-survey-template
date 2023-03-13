import { jsx as _jsx } from 'react/jsx-runtime';
import * as S from './Container.styled';
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
export var FlexDiv = function (props) {
  return _jsx(S.FlexDiv, __assign({}, props));
};
export var Article = function (props) {
  return _jsx(S.Article, __assign({}, props));
};
export var Section = function (props) {
  return _jsx(S.Section, __assign({}, props));
};
