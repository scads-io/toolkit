import React from "react";
import { ScadsStack, ScadsInput, ScadsLabel } from "./StyledScadsToggle";
import { ScadsToggleProps, scales } from "./types";

const ScadsToggle: React.FC<ScadsToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <ScadsStack scale={scale}>
    <ScadsInput id={props.id || "scads-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <ScadsLabel scale={scale} checked={checked} htmlFor={props.id || "scads-toggle"}>
      <div className="scadss">
        <div className="scads" />
        <div className="scads" />
        <div className="scads" />
        <div className="butter" />
      </div>
    </ScadsLabel>
  </ScadsStack>
);

export default ScadsToggle;
