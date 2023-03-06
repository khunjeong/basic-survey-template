import { ReactElement } from 'react';
import * as S from './Button.styled';
import { TBaseButtonProps } from './Button.type';

const Button = <T extends TBaseButtonProps>(props: T): ReactElement<T> => <S.Button {...props} />;

export default Button;
