import React from "react";
import { SvgProps } from "../Svg/types";
import { Colors } from "../../theme";
import { Button } from "../Button";
import { Scale } from "../Button/types";
import * as IconModule from "../Svg";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon } = Icons;

export interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  color: keyof Colors;
  buttonScale?: Scale;
}

const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme, color, buttonScale = "md" }) => (
      <Button scale={buttonScale} variant="text" onClick={() => toggleTheme(!isDark)} startIcon={
        isDark ? <MoonIcon color={color} width="24px" /> : <SunIcon color={color} width="24px" />}>
      </Button>
);

export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
