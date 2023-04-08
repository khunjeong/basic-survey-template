import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Button = styled.button`
  width: 50%;
  min-width: 100px;
  height: 52px;
  padding: 0 5px;
  border: none;
  border-radius: 5px;
  background-color: ${colors.GRAY_LIGHT_5};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${colors.WHITE};
    background-color: ${colors.PRIMARY};
  }
  &.active {
    color: ${colors.WHITE};
    background-color: ${colors.PRIMARY};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.GRAY_LIGHT_5}; 
    &:hover {
      background-color: ${colors.GRAY_LIGHT_5};
      color: ${colors.BLACK};
    }
`;
