import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const DropdownWrap = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 36px;
  padding: 0 10px;
  text-align: left;
  border: 1px solid ${colors.GRAY_BRIGHT_1};
  border-radius: 5px;
  font-size: 0.9em;
  outline: none;
  transition: all 0.3s;
  cursor: default;
  &:focus,
  &:active {
    border-color: ${colors.PRIMARY};
  }
  .select-current-value {
    height: 36px;
    vertical-align: middle;
    display: flex;
    align-items: center;
    > p {
      flex: 1;
      margin: 0;
    }
    .select-icon {
      width: 14px;
    }
  }
  .select-options-container {
    position: absolute;
    width: 100%;
    max-height: 300px;
    top: 0px;
    left: 0px;
    background-color: #fff;
    border-radius: inherit;
    overflow: auto;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);
    z-index: 9999;
    .select-options {
      padding: 0 10px;
      height: 36px;
      line-height: 36px;
      vertical-align: middle;
      &.selected {
        color: ${colors.BLACK};
        background-color: ${colors.GRAY_BRIGHT_1};
      }
      &:hover {
        color: #fff;
        background-color: ${colors.PRIMARY};
      }
    }
  }
`;
