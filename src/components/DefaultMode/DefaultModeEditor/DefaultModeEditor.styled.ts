import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const CheckWrap = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${colors.PRIMARY};
  }
  &:disabled {
    color: ${colors.GRAY_BRIGHT_1};
    cursor: not-allowed;
    &:hover {
      color: ${colors.GRAY_BRIGHT_1};
    }
  }
`;
