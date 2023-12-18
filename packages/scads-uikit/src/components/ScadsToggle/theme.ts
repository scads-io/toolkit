import { darkColors, lightColors } from "../../theme/colors";
import { ScadsToggleTheme } from "./types";

export const light: ScadsToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: ScadsToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
