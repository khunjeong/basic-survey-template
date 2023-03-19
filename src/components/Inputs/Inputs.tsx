import { ReactElement, useRef } from 'react';
import { PictureOutlined } from '@ant-design/icons';
import * as S from './Inputs.styled';
import { TBaseInputProps, IUploadInputProps } from './inputs.type';

export const Inputs = <T extends TBaseInputProps>(props: T): ReactElement<T> => {
  return <S.Input {...props} />;
};

export const UploadInput = <T extends IUploadInputProps>(props: T): ReactElement<T> => {
  const { previewFileSrc, handleUpdateImg } = props;

  const imgInputRef = useRef<HTMLInputElement | null>(null);

  const onUploadClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    imgInputRef.current && imgInputRef.current.click();
  };

  return (
    <S.UploadInputContainer>
      <input className='question' {...props} />
      {previewFileSrc !== null ? (
        <button>
          <img
            className='preview'
            src={previewFileSrc}
            alt='question_Image'
            onClick={onUploadClick}
          />
        </button>
      ) : (
        <button className='upload' onClick={onUploadClick}>
          <PictureOutlined />
        </button>
      )}

      <input
        ref={imgInputRef}
        type='file'
        name='file'
        accept='image/*'
        style={{ display: 'none' }}
        onChange={handleUpdateImg}
      />
    </S.UploadInputContainer>
  );
};
