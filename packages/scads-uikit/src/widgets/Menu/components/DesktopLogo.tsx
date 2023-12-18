import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";

interface Props {
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const BigLogoIcon = styled.img`
  width: 60px;
`

const DesktopLogo: React.FC<Props> = ({ href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
     <BigLogoIcon src={"/images/logo.webp"} />
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Scads home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Scads home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(DesktopLogo);
