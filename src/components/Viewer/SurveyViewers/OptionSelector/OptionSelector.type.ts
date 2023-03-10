import { IDropdownOption } from '../../../../types';

export interface IOptionSelectorProps {
  value: string | null;
  questions: IDropdownOption[];
}

export interface IOptionSelectItem {
  checked: boolean;
}
