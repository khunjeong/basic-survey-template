import { ReactElement } from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { v4 as uuid } from 'uuid';
import { FlexDiv, Inputs } from '../../../../components';
import { IOptionEditorProps } from './OptionEditor.type';
import * as S from './OptionEditor.styled';

const OptionEditor = <T extends IOptionEditorProps>({
  items,
  onAddOption,
  onUpdateOption,
  onRemoveOption,
}: T): ReactElement<T> => {
  return (
    <S.OptionEditorContainer>
      {items.map(item => (
        <FlexDiv key={item.key} style={{ gap: 16 }}>
          <MinusCircleOutlined onClick={() => onRemoveOption(item.key)} />
          <Inputs
            placeholder='항목 입력'
            value={item.value}
            onChange={e =>
              onUpdateOption(
                items.map(question =>
                  question.key === item.key ? { ...question, value: e.target.value } : question,
                ),
              )
            }
          />
        </FlexDiv>
      ))}

      <FlexDiv
        style={{ gap: 16, cursor: 'pointer' }}
        onClick={() =>
          onAddOption([
            ...items,
            {
              key: uuid(),
              value: '',
              index: items.length + 1,
            },
          ])
        }>
        <PlusCircleOutlined />
        <Inputs placeholder='항목 추가' readOnly />
      </FlexDiv>
    </S.OptionEditorContainer>
  );
};

export default OptionEditor;
