import { ReactElement } from 'react';
import { IEditorProps } from './Editor.type';
declare const Editor: <T extends IEditorProps>({
  onSubmit,
  submitButtonText,
  onClose,
}: T) => ReactElement<T, string | import('react').JSXElementConstructor<any>>;
export default Editor;
