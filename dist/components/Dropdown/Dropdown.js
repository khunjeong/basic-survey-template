import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useRef, useState } from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import useClickOutside from '../../hooks/useClickOutside';
import * as S from './Dropdown.styled';
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
let Dropdown = function (_a) {
  let _b;
  let items = _a.items,
    selectedIndex = _a.selectedIndex,
    onChange = _a.onChange;
  let dropdownRef = useRef(null);
  let _c = useState(false),
    isListVisible = _c[0],
    setIsListVisible = _c[1];
  let _d = useState(selectedIndex || 0),
    selectIndex = _d[0],
    setSelectIndex = _d[1];
  let selectedItem = items[selectIndex];
  useClickOutside(dropdownRef, function () {
    return setIsListVisible(false);
  });
  return _jsxs(
    S.DropdownWrap,
    __assign(
      {
        ref: dropdownRef,
        onClick: function () {
          return setIsListVisible(true);
        },
      },
      {
        children: [
          _jsxs(
            'div',
            __assign(
              { className: 'select-current-value' },
              {
                children: [
                  _jsx('p', {
                    children:
                      (_b = selectedItem.label) !== null && _b !== void 0
                        ? _b
                        : '목록에서 선택해주세요',
                  }),
                  _jsx(
                    'div',
                    __assign(
                      { className: 'select-icon' },
                      { children: _jsx(CaretDownOutlined, {}) },
                    ),
                  ),
                ],
              },
            ),
          ),
          isListVisible &&
            _jsx(
              'div',
              __assign(
                { className: 'select-options-container' },
                {
                  children: items.map(function (item, index) {
                    return _jsx(
                      'div',
                      __assign(
                        {
                          className: classnames({
                            'select-options': true,
                            selected: index === selectIndex,
                          }),
                          onClick: function (e) {
                            e.stopPropagation();
                            setSelectIndex(index);
                            onChange && onChange(item, index);
                            setIsListVisible(false);
                          },
                        },
                        { children: item.label },
                      ),
                      index,
                    );
                  }),
                },
              ),
            ),
        ],
      },
    ),
  );
};
export default Dropdown;
