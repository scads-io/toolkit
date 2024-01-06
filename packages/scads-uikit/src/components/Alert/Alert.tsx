import React from "react";
import styled, { DefaultTheme } from "styled-components";
import CheckmarkCircleIcon from "../Svg/Icons/CheckmarkCircle";
import ErrorIcon from "../Svg/Icons/Error";
import BlockIcon from "../Svg/Icons/Block";
import InfoIcon from "../Svg/Icons/Info";
import { Text } from "../Text";
import { IconButton } from "../Button";
import { CloseIcon } from "../Svg";
import Flex from "../Box/Flex";
import { AlertProps, variants } from "./types";
import { Heading } from "../Heading";

interface ThemedIconLabel {
  variant: AlertProps["variant"];
  theme: DefaultTheme;
  hasDescription: boolean;
}

const getThemeColor = ({ theme, variant = variants.INFO }: ThemedIconLabel) => {
  switch (variant) {
    case variants.DANGER:
      return theme.colors.failure;
    case variants.WARNING:
      return theme.colors.warning;
    case variants.SUCCESS:
      return theme.colors.success;
    case variants.INFO:
    default:
      return theme.colors.secondary;
  }
};

const getIcon = (variant: AlertProps["variant"] = variants.INFO) => {
  switch (variant) {
    case variants.DANGER:
      return BlockIcon;
    case variants.WARNING:
      return ErrorIcon;
    case variants.SUCCESS:
      return CheckmarkCircleIcon;
    case variants.INFO:
    default:
      return InfoIcon;
  }
};

const IconLabel = styled.div<ThemedIconLabel>`
  background-color: ${getThemeColor};
  border-radius: 16px 0 0 16px;
  color: ${({ theme }) => theme.alert.background};
  padding: 12px;
`;

const withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
const Details = styled.div<{ hasHandler: boolean }>`
  flex: 1;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: ${({ hasHandler }) => (hasHandler ? `${withHandlerSpacing}px` : "12px")};
  padding-top: 12px;
`;

const CloseHandler = styled.div`
  border-radius: 0 16px 16px 0;
  right: 8px;
  position: absolute;
  top: 8px;
`;

const StyledAlert = styled(Flex)`
  position: relative;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px); /* For older versions of Chrome and Safari */
  background-color: ${({ theme }) => theme.isDark ? "rgba(88, 88, 94, 0.1)" : "rgba(255, 255, 255, 0.1)"};
  background-image: ${({ theme }) => theme.isDark ? "" : "linear-gradient(to bottom right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))"};
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.2), 0 1px 2px rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  transition: all 300ms;
`;

const StyledHeading= styled(Heading)`
  color: ${({ theme }) => theme.isDark ? "white" : "black"};
`

const StyledText= styled(Text)`
  color: ${({ theme }) => theme.isDark ? "white" : "black"};
`

const Alert: React.FC<AlertProps> = ({ title, children, variant, onClick }) => {
  const Icon = getIcon(variant);

  return (
    <StyledAlert>
      <IconLabel variant={variant} hasDescription={!!children}>
        <Icon color="currentColor" width="24px" />
      </IconLabel>
      <Details hasHandler={!!onClick}>
        <StyledHeading as="h2" scale="md" mb="5px">
          {title}
        </StyledHeading>
        {typeof children === "string" ? <StyledText bold color="overlay" as="p">{children}</StyledText> : children}
      </Details>
      {onClick && (
        <CloseHandler>
          <IconButton scale="sm" variant="text" onClick={onClick}>
            <CloseIcon width="24px" color="currentColor" />
          </IconButton>
        </CloseHandler>
      )}
    </StyledAlert>
  );
};

export default Alert;
