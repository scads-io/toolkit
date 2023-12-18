import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20,13.9c-1.3,0.6-2.8,0.9-4.3,0.9c-5.8,0-10.5-4.6-10.5-10.5c0-1.5,0.3-3,0.9-4.3C2.5,1.8,0,5.4,0,9.6
	c0,5.8,4.7,10.5,10.5,10.5C14.7,20.1,18.3,17.6,20,13.9z"/>
    </Svg>
  );
};

export default Icon;
