import { ReactElement, useRef, useState } from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import useClickOutside from '../../hooks/useClickOutside';
import * as S from './Dropdown.styled';
import { IDropdownOption } from '../../types';
import { IDropdownProps } from './Dropdown.type';

const Dropdown = <T extends IDropdownProps<IDropdownOption>>({
  items,
  selectedIndex,
  onChange,
}: T): ReactElement<T> => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isListVisible, setIsListVisible] = useState(false);
  const [selectIndex, setSelectIndex] = useState<number>(selectedIndex || 0);

  const selectedItem = items[selectIndex];

  useClickOutside(dropdownRef, () => setIsListVisible(false));

  return (
    <S.DropdownWrap ref={dropdownRef} onClick={() => setIsListVisible(true)}>
      <div className='select-current-value'>
        <p>{selectedItem.label ?? '목록에서 선택해주세요'}</p>
        <div className='select-icon'>
          <CaretDownOutlined />
        </div>
      </div>
      {isListVisible && (
        <div className='select-options-container'>
          {items.map((item, index: number) => (
            <div
              className={classnames({
                'select-options': true,
                selected: index === selectIndex,
              })}
              key={index}
              onClick={e => {
                e.stopPropagation();
                setSelectIndex(index);
                onChange && onChange(item, index);
                setIsListVisible(false);
              }}>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </S.DropdownWrap>
  );
};

export default Dropdown;
