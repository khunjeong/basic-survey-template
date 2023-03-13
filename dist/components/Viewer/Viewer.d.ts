import { ReactElement } from 'react';
import { IViewerProps } from './Viewer.type';
declare const Viewer: <T extends IViewerProps>({
  survey,
  onSubmit,
}: T) => ReactElement<T, string | import('react').JSXElementConstructor<any>>;
export default Viewer;
