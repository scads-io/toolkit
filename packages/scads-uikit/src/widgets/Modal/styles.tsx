import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { ModalProps } from "./types";

export const ModalHeader = styled.div<{ background?: string }>`
  display: flex;
  align-items: center;
  padding: 12px 24px;
`;

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps["onDismiss"] }> = ({ onDismiss }) => {
  return (
    <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
      <CloseIcon width='35px' color="secondary" />
    </IconButton>
  );
};

export const ModalBackButton: React.FC<{ onBack: ModalProps["onBack"] }> = ({ onBack }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="secondary" />
    </IconButton>
  );
};

export const ModalContainer = styled(Box)<{ minWidth: string }>`
  overflow: hidden;
  border-radius: 32px;
  width: 100%;
  max-height: 100vh;
  background: ${({ theme }) => theme.isDark ? "#191919" : "#E2E6E9"};
  z-index: ${({ theme }) => theme.zIndices.modal};

  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }
`;

export const ConnectModalContainer = styled(Box)<{ minWidth: string }>`
  overflow: hidden;
  width: 100%;
  max-height: 100vh;

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px); /* For older versions of Chrome and Safari */
  background-color: ${({ theme }) => theme.isDark ? "rgba(88, 88, 94, 0.1)" : "rgba(255, 255, 255, 0.1)"};
  background-image: ${({ theme }) => theme.isDark ? "" : "linear-gradient(to bottom right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))"};
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.2), 0 1px 2px rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  transition: all 300ms;
  z-index: ${({ theme }) => theme.zIndices.modal};

  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }
`;
