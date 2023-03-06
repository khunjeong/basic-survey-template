import { HTMLAttributes } from 'react';

export type TBaseContainerProps = HTMLAttributes<HTMLDivElement>;

export interface IFlexContainerProps extends TBaseContainerProps {
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
}
