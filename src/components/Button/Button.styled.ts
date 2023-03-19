import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Button = styled.button`
  width: 100%;
  height: 52px;
  padding: 0 5px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: ${colors.PRIMARY};
  }
  &.active {
    color: #fff;
    background-color: ${colors.PRIMARY};
  }
`;
