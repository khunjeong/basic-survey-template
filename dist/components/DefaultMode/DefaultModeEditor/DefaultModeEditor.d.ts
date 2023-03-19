import { ReactElement } from 'react';
import { IDefaultModeEditorProps } from './DefaultModeEditor.type';
declare const DefaultModeEditor: <T extends IDefaultModeEditorProps>({
  onClose,
  onSubmit,
  submitButtonText,
}: T) => ReactElement<T, string | import('react').JSXElementConstructor<any>>;
export default DefaultModeEditor;
