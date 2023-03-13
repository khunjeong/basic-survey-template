import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import '@styles/global.css';
import { Article, Editor, FlexDiv, Viewer } from './components';
import { Reset } from 'styled-reset';
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
let App = function () {
  let _a = useState(),
    result = _a[0],
    setResult = _a[1];
  useEffect(
    function () {
      console.log({ result: result });
    },
    [result],
  );
  return _jsxs(
    'div',
    __assign(
      { className: 'App' },
      {
        children: [
          _jsx(Reset, {}),
          _jsx(
            ConfigProvider,
            __assign(
              {
                theme: {
                  token: {
                    colorPrimary: '#00b96b',
                  },
                },
              },
              {
                children: _jsxs(FlexDiv, {
                  children: [
                    _jsx(
                      Article,
                      __assign(
                        { style: { width: '50%' } },
                        {
                          children: _jsx(Editor, {
                            onSubmit: function (result) {
                              return setResult(result);
                            },
                          }),
                        },
                      ),
                    ),
                    result &&
                      _jsx(
                        Article,
                        __assign(
                          { style: { width: '50%' } },
                          {
                            children: _jsx(Viewer, {
                              survey: result,
                              onSubmit: function (result) {
                                return console.log({ result: result });
                              },
                            }),
                          },
                        ),
                      ),
                  ],
                }),
              },
            ),
          ),
        ],
      },
    ),
  );
};
export default App;
