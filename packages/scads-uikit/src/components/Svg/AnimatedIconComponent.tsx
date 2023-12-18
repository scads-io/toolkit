import React from "react";
import * as IconModule from ".";
import { StyledAnimatedIconComponent, StyledIconContainer } from "./styles";
import { IconComponentType, SvgProps } from "./types";

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const AnimatedIconComponent: React.FC<IconComponentType> = ({
  iconName,
  color = "textSubtle",
  activeColor = "secondary",
  isActive = false,
  ...props
}) => {
  const IconElement = Icons[`${iconName}Icon`];
  const IconElementFill = Icons[`${iconName}FillIcon`];
  const hasFillIcon = false;
  return IconElement ? (
    <StyledAnimatedIconComponent isActive={isActive} hasFillIcon={hasFillIcon} {...props}>
      <StyledIconContainer>
        <IconElement color={color} />
      </StyledIconContainer>
      {hasFillIcon && (
        <StyledIconContainer {...props}>
          <IconElementFill color={activeColor} />
        </StyledIconContainer>
      )}
    </StyledAnimatedIconComponent>
  ) : null;
};

export default AnimatedIconComponent;
