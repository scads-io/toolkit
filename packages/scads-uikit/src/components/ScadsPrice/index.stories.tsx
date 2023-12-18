import React from "react";
import { ScadsPrice, ScadsPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/ScadsPrice",
  component: ScadsPrice,
};

const Template: React.FC<ScadsPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <ScadsPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  scadsPriceUsd: 20.0,
};
