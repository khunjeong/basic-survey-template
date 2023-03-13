import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { v4 as uuid } from 'uuid';
import { FlexDiv, Inputs } from '../../../../components';
import * as S from './OptionEditor.styled';
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
let OptionEditor = function (_a) {
  let items = _a.items,
    onAddOption = _a.onAddOption,
    onUpdateOption = _a.onUpdateOption,
    onRemoveOption = _a.onRemoveOption;
  return _jsxs(S.OptionEditorContainer, {
    children: [
      items.map(function (item) {
        return _jsxs(
          FlexDiv,
          __assign(
            { style: { gap: 16 } },
            {
              children: [
                _jsx(MinusCircleOutlined, {
                  onClick: function () {
                    return onRemoveOption(item.key);
                  },
                }),
                _jsx(Inputs, {
                  placeholder: '\uD56D\uBAA9 \uC785\uB825',
                  value: item.value,
                  onChange: function (e) {
                    return onUpdateOption(
                      items.map(function (question) {
                        return question.key === item.key
                          ? __assign(__assign({}, question), {
                              value: e.target.value,
                            })
                          : question;
                      }),
                    );
                  },
                }),
              ],
            },
          ),
          item.key,
        );
      }),
      _jsxs(
        FlexDiv,
        __assign(
          {
            style: { gap: 16, cursor: 'pointer' },
            onClick: function () {
              return onAddOption(
                __spreadArray(
                  __spreadArray([], items, true),
                  [
                    {
                      key: uuid(),
                      value: '',
                      index: items.length + 1,
                    },
                  ],
                  false,
                ),
              );
            },
          },
          {
            children: [
              _jsx(PlusCircleOutlined, {}),
              _jsx(Inputs, {
                placeholder: '\uD56D\uBAA9 \uCD94\uAC00',
                readOnly: true,
              }),
            ],
          },
        ),
      ),
    ],
  });
};
export default OptionEditor;
