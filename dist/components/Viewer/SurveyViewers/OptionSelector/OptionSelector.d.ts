import { ReactElement } from 'react';
import { IOptionSelectorProps, IOptionMultiSelectorProps } from './OptionSelector.type';
export declare const OptionSelector: <T extends IOptionSelectorProps>({
  value,
  questions,
  onChange,
}: T) => ReactElement<T, string | import('react').JSXElementConstructor<any>>;
export declare const OptionMultiSelector: <T extends IOptionMultiSelectorProps>({
  value,
  questions,
  onChange,
}: T) => ReactElement<T, string | import('react').JSXElementConstructor<any>>;
