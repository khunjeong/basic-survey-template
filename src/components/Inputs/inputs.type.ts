import { ChangeEvent, InputHTMLAttributes } from 'react';

export type TBaseInputProps = InputHTMLAttributes<HTMLInputElement>;

export interface IUploadInputProps extends TBaseInputProps {
  previewFileSrc: string | null;
  handleUpdateImg: (target: ChangeEvent<HTMLInputElement>) => void;
}
