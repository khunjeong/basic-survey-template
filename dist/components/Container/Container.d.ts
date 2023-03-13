import { ReactElement } from 'react';
import { TBaseContainerProps, IFlexDivProps } from './Container.type';
export declare const FlexDiv: <T extends IFlexDivProps>(
  props: T,
) => ReactElement<T, string | import('react').JSXElementConstructor<any>>;
export declare const Article: <T extends TBaseContainerProps>(
  props: T,
) => ReactElement<T, string | import('react').JSXElementConstructor<any>>;
export declare const Section: <T extends TBaseContainerProps>(
  props: T,
) => ReactElement<T, string | import('react').JSXElementConstructor<any>>;
