import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

const BaseInputCss = css`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  margin: 5px 0;
  border: 1px solid ${colors.GRAY_BRIGHT_1};
  border-radius: 5px;
  font-size: 0.9em;
  outline: none;
`;

export const Input = styled.input`
  ${BaseInputCss}
  transition: all 0.3s;
  &:focus,
  &:active {
    border-color: ${colors.PRIMARY};
  }
`;

export const UploadInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  ${BaseInputCss};
  
    button {
      position: absolute;
      overflow: hidden;
      background: none;
      border: none;
      cursor: pointer;
      border-radius: 2px;
      width: 44px;
      height: 44px;
      top: 4px;
      right: 4px;
      img {
        object-fit: cover;
        width: 44px;
        height: 44px;
      }
    }
    .question {
      width: 100%;
      border: none;
      &:focus,
      &:active {
        outline: none !important;
      }
    }
  }
`;
