import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  ${({ theme, level }) => {
    return theme.typography.headingFontSizes[level || 5];
  }}
  font-size: ${({ theme, level }) =>
    theme.typography.headingFontSizes[(level && level - 1) || 4]}em;
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  margin: 0;
`;

export const Title = ({ level, fontWeight, as, children }) => (
  <StyledTitle
    as={as || (level && `h${level}`) || "p"}
    level={level}
    fontWeight={fontWeight}
  >
    {children}
  </StyledTitle>
);

export const Text = styled.p`
  font-size: ${({ theme, level }) =>
    theme.typography.bodyFontSizes[(level && level - 1) || 2]}em;
  font-weight: ${({ currency, fontWeight }) =>
    (currency && 400) || fontWeight || 600};
  margin: 0;
  vertical-align: middle;
`;
