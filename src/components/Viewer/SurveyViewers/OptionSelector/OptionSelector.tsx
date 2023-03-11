import { ReactElement } from 'react';
import classnames from 'classnames';
import { Text } from '../../../../components';
import * as S from './OptionSelector.styled';
import { IOptionSelectorProps } from './OptionSelector.type';

const OptionSelector = <T extends IOptionSelectorProps>({
  value,
  questions,
  onChange,
}: T): ReactElement<T> => {
  return (
    <S.OptionSelectorContainer>
      {questions.map(question => {
        return (
          <S.OptionSelectItem
            key={question.key}
            className={classnames({
              selected: value === question.key,
            })}
            onClick={() => onChange(question.key)}>
            <Text>{question.value}</Text>
          </S.OptionSelectItem>
        );
      })}
    </S.OptionSelectorContainer>
  );
};

export default OptionSelector;
