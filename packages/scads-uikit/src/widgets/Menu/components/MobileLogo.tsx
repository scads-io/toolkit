import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";

interface Props {
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .desktop-icon {
    width: 160px;
    max-height: 56px;
    display: block;
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
  .st0 {
    fill: #325100;
  }
  .st1 {
    font-family: "ShowcardGothic-Reg";
  }
  .st2 {
    font-size: 72px;
  }
  .st3 {
    fill: none;
  }
`;

const PhoneLogoIcon = styled.img`
  width: 40px;
`

const MobileLogo: React.FC<Props> = ({ href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
     <PhoneLogoIcon src={"/images/logo.webp"} />
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

export default React.memo(MobileLogo);
