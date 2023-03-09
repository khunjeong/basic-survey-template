import { InputHTMLAttributes } from 'react';
import * as S from './Inputs.styled';

const Inputs = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <S.Input {...props} />;
};

export default Inputs;
