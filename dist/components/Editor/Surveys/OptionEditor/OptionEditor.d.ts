import { ReactElement } from 'react';
import { IOptionEditorProps } from './OptionEditor.type';
declare const OptionEditor: <T extends IOptionEditorProps>({
  items,
  onAddOption,
  onUpdateOption,
  onRemoveOption,
}: T) => ReactElement<T, string | import('react').JSXElementConstructor<any>>;
export default OptionEditor;
