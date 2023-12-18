import styled from "styled-components";
import { Flex } from "../Box";

const StyledBottomNav = styled(Flex)`
  position: fixed;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  bottom: 0px;
  width: 100%;
  padding: 5px 8px;
  border-image-slice: 1;
  padding-bottom: env(safe-area-inset-bottom);
  html[data-useragent*="TokenPocket_iOS"] & {
    padding-bottom: 45px;
  }
  z-index: 20;
`;

export default StyledBottomNav;
