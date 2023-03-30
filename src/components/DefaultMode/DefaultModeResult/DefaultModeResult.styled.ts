import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Container = styled.div`
  width: 100%;
  padding: 30px 15px;
  background: none;
  border: 1px solid ${colors.GRAY_ORIGIN_2};
  gap: 16px;
`;

export const QuestionWrap = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const QuestionItemWrap = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  border: 1px solid ${colors.BLACK};
  padding: 6px 13px;
  gap: 8px;
  &:hover: {
    border-color: ${colors.PRIMARY};
    p {
      color: ${colors.PRIMARY};
    }
  }
`;
