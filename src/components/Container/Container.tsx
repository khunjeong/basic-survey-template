import { ReactElement } from 'react';
import * as S from './Container.styled';
import { TBaseContainerProps, IFlexDivProps } from './Container.type';

export const FlexContainer = <T extends IFlexDivProps>(props: T): ReactElement<T> => (
  <S.FlexDiv {...props} />
);

export const Article = <T extends TBaseContainerProps>(props: T): ReactElement<T> => (
  <S.Article {...props} />
);

export const Section = <T extends TBaseContainerProps>(props: T): ReactElement<T> => (
  <S.Section {...props} />
);
