import styled from 'styled-components';
import { IFlexContainerProps } from './Container.type';

export const FlexContainer = styled.div<IFlexContainerProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
`;
