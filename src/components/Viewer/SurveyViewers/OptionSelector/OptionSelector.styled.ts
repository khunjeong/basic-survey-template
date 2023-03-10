import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

export const OptionSelectorContainer = styled.div`
  width: 100%;
`;

export const OptionSelectItem = styled.div`
  width: 100%;
  margin: 8px 0px;
  padding: 8px 16px;
  border: 1px solid ${colors.GRAY_BRIGHT_1};
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.PRIMARY};
    p {
      color: ${colors.WHITE};
    }
  }
  &.selected {
    background-color: ${colors.GRAY_BRIGHT_1};
    p {
      color: ${colors.WHITE};
    }
  }
`;
