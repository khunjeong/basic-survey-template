import { ReactElement, useState } from 'react';
import classnames from 'classnames';
import { FlexDiv, Text } from '../../../../components';
import * as S from './OptionSelector.styled';
import { IOptionSelectorProps } from './OptionSelector.type';

const OptionSelector = <T extends IOptionSelectorProps>({
  value,
  questions,
}: T): ReactElement<T> => {
  const [checkedQuestion, setCheckedQuestion] = useState<string | null>(value);

  return (
    <S.OptionSelectorContainer>
      {questions.map(question => {
        return (
          <S.OptionSelectItem
            key={question.key}
            className={classnames({
              selected: checkedQuestion === question.key,
            })}
            onClick={() => setCheckedQuestion(question.key)}>
            <Text>{question.value}</Text>
          </S.OptionSelectItem>
        );
      })}
    </S.OptionSelectorContainer>
  );
};

export default OptionSelector;
