import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

export const Td = styled.td<TypographyProps>`
  border-bottom: 1px solid transparent;
  border-image: ${({ theme }) => theme.colors.gradients.gold};
  border-image-slice: 1;
  color: ${({ theme }) => theme.colors.text};
  padding: 16px;
  vertical-align: middle;

  ${typography}
`;

export const Th = styled(Td).attrs({ as: "th" })`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 12px;
  text-transform: uppercase;
`;
