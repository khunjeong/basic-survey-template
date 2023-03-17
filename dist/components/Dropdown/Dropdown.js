let __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        let desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
let __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o.default = v;
      });
let __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    let result = {};
    if (mod != null)
      for (let k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const jsx_runtime_1 = require('react/jsx-runtime');
const react_1 = require('react');
const icons_1 = require('@ant-design/icons');
const classnames_1 = __importDefault(require('classnames'));
const useClickOutside_1 = __importDefault(
  require('../../hooks/useClickOutside'),
);
const S = __importStar(require('./Dropdown.styled'));
const Dropdown = ({ items, selectedIndex, onChange }) => {
  let _a;
  const dropdownRef = (0, react_1.useRef)(null);
  const [isListVisible, setIsListVisible] = (0, react_1.useState)(false);
  const [selectIndex, setSelectIndex] = (0, react_1.useState)(
    selectedIndex || 0,
  );
  const selectedItem = items[selectIndex];
  (0, useClickOutside_1.default)(dropdownRef, () => setIsListVisible(false));
  return (0, jsx_runtime_1.jsxs)(
    S.DropdownWrap,
    Object.assign(
      { ref: dropdownRef, onClick: () => setIsListVisible(true) },
      {
        children: [
          (0, jsx_runtime_1.jsxs)(
            'div',
            Object.assign(
              { className: 'select-current-value' },
              {
                children: [
                  (0, jsx_runtime_1.jsx)('p', {
                    children:
                      (_a = selectedItem.label) !== null && _a !== void 0
                        ? _a
                        : '목록에서 선택해주세요',
                  }),
                  (0, jsx_runtime_1.jsx)(
                    'div',
                    Object.assign(
                      { className: 'select-icon' },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          icons_1.CaretDownOutlined,
                          {},
                        ),
                      },
                    ),
                  ),
                ],
              },
            ),
          ),
          isListVisible &&
            (0, jsx_runtime_1.jsx)(
              'div',
              Object.assign(
                { className: 'select-options-container' },
                {
                  children: items.map((item, index) =>
                    (0, jsx_runtime_1.jsx)(
                      'div',
                      Object.assign(
                        {
                          className: (0, classnames_1.default)({
                            'select-options': true,
                            selected: index === selectIndex,
                          }),
                          onClick: e => {
                            e.stopPropagation();
                            setSelectIndex(index);
                            onChange && onChange(item, index);
                            setIsListVisible(false);
                          },
                        },
                        { children: item.label },
                      ),
                      index,
                    ),
                  ),
                },
              ),
            ),
        ],
      },
    ),
  );
};
exports.default = Dropdown;
