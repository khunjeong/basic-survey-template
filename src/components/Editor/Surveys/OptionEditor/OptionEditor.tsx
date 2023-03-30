import { ChangeEvent, ReactElement } from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Axios from 'axios';
import { v4 as uuid } from 'uuid';
import { FlexDiv, UploadInput, Inputs } from '../../../../components';
import { IOptionEditorProps } from './OptionEditor.type';
import * as S from './OptionEditor.styled';

const OptionEditor = <T extends IOptionEditorProps>({
  items,
  onAddOption,
  onUpdateOption,
  onRemoveOption,
  uploadOptions,
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

      if (uploadOptions) {
        const { actionUrl, authorization } = uploadOptions;
        const customAxios = Axios.create({
          baseURL: '/',
          timeout: 10000,
        });
        customAxios.defaults.headers.common.Authorization = `Bearer ${authorization}`;
        const formData = new FormData();
        formData.append('file', file);

        customAxios
          .post(actionUrl, formData, {
            headers: {
              'content-type': 'multipart/form-data',
            },
          })
          .then(res => {
            onUpdateOption(
              items.map(question =>
                question.id === key ? { ...question, image: res.data.data } : question,
              ),
            );
          })
          .catch(error => console.log({ error }));
      } else {
        // 이미지 파일 저장
        onUpdateOption(
          items.map(question =>
            question.id === key
              ? { ...question, image: URL.createObjectURL(new Blob([file])) }
              : question,
          ),
        );
      }
    }
  };

  return (
    <S.OptionEditorContainer>
      {items.map(item => (
        <FlexDiv key={item.id} style={{ gap: 16 }}>
          <MinusCircleOutlined onClick={() => onRemoveOption(item.id)} />
          <UploadInput
            placeholder='항목 입력'
            value={item.item}
            onChange={e =>
              onUpdateOption(
                items.map(question =>
                  question.id === item.id ? { ...question, item: e.target.value } : question,
                ),
              )
            }
            previewFileSrc={item.image || null}
            handleUpdateImg={target => updateImg({ target, key: item.id })}
          />
        </FlexDiv>
      ))}

      <FlexDiv
        style={{ gap: 16, cursor: 'pointer' }}
        onClick={() =>
          onAddOption([
            ...items,
            {
              id: uuid(),
              item: '',
              index: items.length + 1,
              image: '',
              count: 0,
              self: false,
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
