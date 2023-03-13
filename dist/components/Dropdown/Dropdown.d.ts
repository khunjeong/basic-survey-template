import { ReactElement } from 'react';
import { IDropdownOption } from '../../types';
import { IDropdownProps } from './Dropdown.type';
declare const Dropdown: <T extends IDropdownProps<IDropdownOption>>({
  items,
  selectedIndex,
  onChange,
}: T) => ReactElement<T, string | import('react').JSXElementConstructor<any>>;
export default Dropdown;
