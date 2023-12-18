import styled from "styled-components";

export const Arrow = styled.div`
  &,
  &::before {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    z-index: -1;
  }

  &::before {
    content: "";
    transform: rotate(45deg);
    background: #ECD8AA;
  }
`;

export const StyledTooltip = styled.div`
  padding: 16px;
  font-size: 16px;
  line-height: 130%;
  max-width: 320px;
  z-index: 101;
  color: ${({ theme }) => theme.colors.overlay};
  font-weight: bold;
  background: rgba(171,168,155,0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
  -webkit-backdrop-filter: blur(8.5px);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border: 1px solid rgba(171,168,155,0.69);

  &[data-popper-placement^="top"] > ${Arrow} {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > ${Arrow} {
    top: -4px;
  }

  &[data-popper-placement^="left"] > ${Arrow} {
    right: -4px;
  }

  &[data-popper-placement^="right"] > ${Arrow} {
    left: -4px;
  }
`;
