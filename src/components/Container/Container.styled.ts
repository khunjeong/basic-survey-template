import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { IFlexDivProps } from './Container.type';

export const FlexDiv = styled.div<IFlexDivProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
`;

export const Article = styled.article`
  width: 100%;
  padding: 20px;
  border: 1px solid ${colors.GRAY_BRIGHT_3};
`;

export const Section = styled.section`
  width: 100%;
  margin: 8px 0px;
`;
