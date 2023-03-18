import { ChangeEvent, ReactElement } from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { v4 as uuid } from 'uuid';
import { FlexDiv, UploadInput, Inputs } from '../../../../components';
import { IOptionEditorProps } from './OptionEditor.type';
import * as S from './OptionEditor.styled';

const OptionEditor = <T extends IOptionEditorProps>({
  items,
  onAddOption,
  onUpdateOption,
  onRemoveOption,
}: T): ReactElement<T> => {
  const updateImg = async ({
    target,
    key,
  }: {
    target: ChangeEvent<HTMLInputElement>;
    key: string;
  }) => {
    if (target.target.files) {
      const file = target.target.files[0];
      // 이미지 파일 저장
      // setSignupProfileFile(file);
      onUpdateOption(
        items.map(question =>
          question.key === key
            ? { ...question, image: URL.createObjectURL(new Blob([file])) }
            : question,
        ),
      );
    }
  };

  return (
    <S.OptionEditorContainer>
      {items.map(item => (
        <FlexDiv key={item.key} style={{ gap: 16 }}>
          <MinusCircleOutlined onClick={() => onRemoveOption(item.key)} />
          <UploadInput
            placeholder='항목 입력'
            value={item.value}
            onChange={e =>
              onUpdateOption(
                items.map(question =>
                  question.key === item.key ? { ...question, value: e.target.value } : question,
                ),
              )
            }
            previewFileSrc={item.image}
            handleUpdateImg={target => updateImg({ target, key: item.key })}
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
              image: '',
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
