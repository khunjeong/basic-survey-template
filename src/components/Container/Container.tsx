import { ReactElement } from 'react';
import * as S from './Container.styled';
import { IFlexContainerProps } from './Container.type';

export const FlexContainer = <T extends IFlexContainerProps>(props: T): ReactElement<T> => (
  <S.FlexContainer {...props} />
);
