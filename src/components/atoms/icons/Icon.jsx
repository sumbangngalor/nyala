import React from "react";
import { Crown, BicepsFlexed, CircleDollarSign } from "lucide-react";

const Icon = ({ name }) => {
  const icons = {
    Crown,
    BicepsFlexed,
    CircleDollarSign,
  };

  const IconComponent = icons[name];
  return <IconComponent />;
};

export default Icon;
