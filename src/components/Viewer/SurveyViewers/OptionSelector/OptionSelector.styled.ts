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
  z-index: 10;
  .right-area {
    display: flex;
    align-items: center;
    position: absolute;
    right: 4px;
    height: 52px;
    p {
      margin-right: 8px;
    }
    img {
      object-fit: cover;
      width: 44px;
      height: 44px;
    }
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
    border: 1px solid ${colors.PRIMARY};
    p {
      color: ${colors.BLACK};
    }
    svg {
      path {
        fill: ${colors.BLACK};
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
  }
  &.top {
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
  }
`;

export const OptionSelectItemBg = styled.div<{ percent: number; top: boolean }>`
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${props => props.percent}%;
  height: 100%;
  background: ${props => (props.top ? colors.GRAY_ORIGIN_2 : colors.GRAY_LIGHT_5)};
  z-index: -10;
`;
