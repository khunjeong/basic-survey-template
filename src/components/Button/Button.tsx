import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import * as S from './Button.styled';

interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const Button = (props: IButtonProps) => {
  const { children } = props;

  return <S.Button type='primary'>{children}</S.Button>;
};

export default Button;
