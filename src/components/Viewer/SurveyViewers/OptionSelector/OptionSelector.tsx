import { ReactElement } from 'react';
import classnames from 'classnames';
import { CheckIcon } from '../../../../components/Icons';
import { Text } from '../../../../components';
import { colors } from '../../../../styles/colors';
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
  maxChoice,
  onChange,
  totalVoteCount,
  top,
}: T): ReactElement<T> => {
  return (
    <S.OptionSelectorContainer>
      {questions.map(question => {
        return (
          <S.OptionSelectItem
            key={question.id}
            className={classnames({
              selected: value.includes(question.id),
              top: question.count === top,
            })}
            onClick={() => {
              if (value.length < maxChoice) {
                return onChange(question.id);
              } else if (value.length === maxChoice && value.includes(question.id)) {
                return onChange(question.id);
              }
            }}>
            <CheckIcon />
            <Text color={colors.GRAY_BRIGHT_3}>{question.item}</Text>
            <div className='right-area'>
              {totalVoteCount > 0 && (
                <Text color={colors.GRAY_BRIGHT_3}>{`${Math.floor(
                  (question.count / totalVoteCount) * 100,
                )} %`}</Text>
              )}
              {question.image && (
                <img className='preview' src={question.image} alt='question_Image' />
              )}
            </div>
            {totalVoteCount > 0 && (
              <S.OptionSelectItemBg
                percent={Math.floor((question.count / totalVoteCount) * 100)}
                top={question.count === top}
              />
            )}
          </S.OptionSelectItem>
        );
      })}
    </S.OptionSelectorContainer>
  );
};
