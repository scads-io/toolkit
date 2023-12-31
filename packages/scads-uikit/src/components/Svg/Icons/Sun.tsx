import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path d="M10,0c0.7,0,1.2,0.6,1.2,1.2v1.2c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2V1.2C8.8,0.6,9.3,0,10,0z M15,10
	c0,2.8-2.2,5-5,5c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5C12.8,5,15,7.2,15,10z M14.4,16.2l0.9,0.9c0.5,0.5,1.3,0.5,1.8,0
	c0.5-0.5,0.5-1.3,0-1.8l-0.9-0.9c-0.5-0.5-1.3-0.5-1.8,0C13.9,14.9,13.9,15.7,14.4,16.2z M17.1,2.9c0.5,0.5,0.5,1.3,0,1.8l-0.9,0.9
	c-0.5,0.5-1.3,0.5-1.8,0c-0.5-0.5-0.5-1.3,0-1.8l0.9-0.9C15.8,2.4,16.6,2.4,17.1,2.9z M18.8,11.2c0.7,0,1.2-0.6,1.2-1.2
	c0-0.7-0.6-1.2-1.2-1.2h-1.2c-0.7,0-1.2,0.6-1.2,1.2c0,0.7,0.6,1.2,1.2,1.2H18.8z M10,16.2c0.7,0,1.2,0.6,1.2,1.2v1.2
	c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2v-1.2C8.8,16.8,9.3,16.2,10,16.2z M3.8,5.6c0.5,0.5,1.3,0.5,1.8,0
	c0.5-0.5,0.5-1.3,0-1.8L4.7,2.9c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8L3.8,5.6z M5.6,16.2l-0.9,0.9c-0.5,0.5-1.3,0.5-1.8,0
	c-0.5-0.5-0.5-1.3,0-1.8l0.9-0.9c0.5-0.5,1.3-0.5,1.8,0C6.1,14.9,6.1,15.7,5.6,16.2z M2.5,11.2c0.7,0,1.2-0.6,1.2-1.2
	c0-0.7-0.6-1.2-1.2-1.2H1.2C0.6,8.8,0,9.3,0,10c0,0.7,0.6,1.2,1.2,1.2H2.5z"/>
    </Svg>
  );
};

export default Icon;
