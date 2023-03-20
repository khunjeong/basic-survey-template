import { ReactElement } from 'react';
import classnames from 'classnames';
import { CheckIcon } from '../../../../components/Icons';
import { Text } from '../../../../components';
import * as S from './OptionSelector.styled';
import { IOptionSelectorProps, IOptionMultiSelectorProps } from './OptionSelector.type';

export const OptionSelector = <T extends IOptionSelectorProps>({
  value,
  questions,
  onChange,
}: T): ReactElement<T> => {
  return (
    <S.OptionSelectorContainer>
      {questions.map(question => {
        return (
          <S.OptionSelectItem
            key={question.id}
            className={classnames({
              selected: value === question.id,
            })}
            onClick={() => onChange(question.id)}>
            <Text>{question.item}</Text>
          </S.OptionSelectItem>
        );
      })}
    </S.OptionSelectorContainer>
  );
};

export const OptionMultiSelector = <T extends IOptionMultiSelectorProps>({
  value,
  questions,
  onChange,
}: T): ReactElement<T> => {
  return (
    <S.OptionSelectorContainer>
      {questions.map(question => {
        return (
          <S.OptionSelectItem
            key={question.id}
            className={classnames({
              selected: value.includes(question.id),
            })}
            onClick={() => onChange(question.id)}>
            <CheckIcon />
            <Text>{question.item}</Text>
          </S.OptionSelectItem>
        );
      })}
    </S.OptionSelectorContainer>
  );
};
