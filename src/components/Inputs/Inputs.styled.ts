import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Input = styled.input`
  width: 100%;
  height: 36px;
  padding: 0 10px;
  margin: 5px 0;
  border: 1px solid ${colors.GRAY_BRIGHT_1};
  border-radius: 5px;
  font-size: 0.9em;
  outline: none;
  transition: all 0.3s;
  &:focus,
  &:active {
    border-color: ${colors.PRIMARY};
  }
`;
