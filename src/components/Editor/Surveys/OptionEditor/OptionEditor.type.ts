import { IDropdownOption } from '../../../../types';

export interface IOptionEditorProps {
  items: IDropdownOption[];
  onAddOption: (items: IDropdownOption[]) => void;
  onUpdateOption: (items: IDropdownOption[]) => void;
  onRemoveOption: (id: string) => void;
}
