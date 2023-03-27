import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

export const OptionSelectorContainer = styled.div`
  width: 100%;
`;

export const OptionSelectItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 52px;
  margin: 8px 0px;
  padding: 6px 13px;
  gap: 8px;
  border: 1px solid ${colors.GRAY_BRIGHT_3};
  cursor: pointer;
  img {
    position: absolute;
    top: 4px;
    right: 4px;
    object-fit: cover;
    width: 44px;
    height: 44px;
  }
  svg {
    path {
      fill: ${colors.GRAY_BRIGHT_3};
    }
  }
  &:hover {
    background-color: ${colors.PRIMARY};
    p {
      color: ${colors.WHITE};
    }
    svg {
      path {
        fill: ${colors.WHITE};
      }
    }
  }
  &.selected {
    background-color: ${colors.GRAY_ORIGIN_2};
    border: 1px solid ${colors.BLACK};
    p {
      color: ${colors.BLACK};
    }
    svg {
      path {
        fill: ${colors.BLACK};
      }
    }
  }
`;
