import { ReactElement, useRef, useState } from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import * as S from './Dropdown.styled';
import { IDropdownProps } from './Dropdown.type';

const Dropdown = ({ items, selectedIndex, onChange }: IDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isListVisible, setIsListVisible] = useState(false);
  const [selectIndex, setSelectIndex] = useState<number>(selectedIndex || 0);

  const selectedItem = items[selectIndex];

  return (
    <S.DropdownWrap ref={dropdownRef} onClick={() => setIsListVisible(true)}>
      <div className='select-current-value'>
        <p>{selectedItem ?? '목록에서 선택해주세요.'}</p>
        <div className='select-icon'>
          <CaretDownOutlined />
        </div>
      </div>
      {isListVisible && (
        <div className='select-options-container'>
          {items.map((item: any, index: number) => (
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
              {item}
            </div>
          ))}
        </div>
      )}
    </S.DropdownWrap>
  );
};

export default Dropdown;
