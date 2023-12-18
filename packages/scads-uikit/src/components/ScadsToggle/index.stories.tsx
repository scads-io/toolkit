import React, { useState } from "react";
import ScadsToggle from "./ScadsToggle";

export default {
  title: "Components/ScadsToggle",
  component: ScadsToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <ScadsToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <ScadsToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <ScadsToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
