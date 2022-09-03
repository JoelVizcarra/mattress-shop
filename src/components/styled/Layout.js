import styled, { css } from "styled-components";

export const Box = styled.div`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

export const Flex = styled(Box)`
  display: flex;
  ${({ flexDirection }) => `flex-direction: ${flexDirection || "row"};`}
  ${({ justifyContent }) =>
    `justify-content: ${justifyContent || "flex-start"};`}
	${({ alignItems }) => `align-items: ${alignItems || "stretch"};`}
`;

export const Container = styled(Box)`
  max-width: 1110px;
  margin: 0 auto;
`;
