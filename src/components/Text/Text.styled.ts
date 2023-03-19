import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { ITextProps } from './Text.type';

export const Title = styled.h2<ITextProps>`
  font-size: ${props => `${props.size}px` || '1.5em'};
  font-weight: ${props => props.weight || 700};
  color: ${props => props.color || colors.BLACK};
  ${props =>
    props.isEllipsis &&
    `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  `}
`;

export const Description = styled.p<ITextProps>`
  font-size: ${props => `${props.size}px` || '1em'};
  font-weight: ${props => props.weight || 700};
  color: ${props => props.color || colors.GRAY_ORIGIN_1};
  ${props =>
    props.isEllipsis &&
    `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  `}
`;

export const Text = styled.p<ITextProps>`
  font-size: ${props => `${props.size}px` || '1em'};
  font-weight: ${props => props.weight || 700};
  color: ${props => props.color || colors.BLACK};
  ${props =>
    props.isEllipsis &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    `}
`;
