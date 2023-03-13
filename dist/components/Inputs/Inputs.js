import { jsx as _jsx } from 'react/jsx-runtime';
import * as S from './Inputs.styled';
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
let Inputs = function (props) {
  return _jsx(S.Input, __assign({}, props));
};
export default Inputs;
