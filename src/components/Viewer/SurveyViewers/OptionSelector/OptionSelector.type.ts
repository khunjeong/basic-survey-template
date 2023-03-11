import { IDropdownOption } from '../../../../types';

export interface IOptionSelectorProps {
  value: string | null;
  questions: IDropdownOption[];
  onChange: (value: string) => void;
}

export interface IOptionSelectItem {
  checked: boolean;
}
