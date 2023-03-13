import { ReactElement } from 'react';
import { TBaseButtonProps } from './Button.type';
declare const Button: <T extends TBaseButtonProps>(
  props: T,
) => ReactElement<T, string | import('react').JSXElementConstructor<any>>;
export default Button;
