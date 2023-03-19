import { ReactElement } from 'react';
import { TBaseInputProps, IUploadInputProps } from './inputs.type';
export declare const Inputs: <T extends TBaseInputProps>(
  props: T,
) => ReactElement<T, string | import('react').JSXElementConstructor<any>>;
export declare const UploadInput: <T extends IUploadInputProps>(
  props: T,
) => ReactElement<T, string | import('react').JSXElementConstructor<any>>;
