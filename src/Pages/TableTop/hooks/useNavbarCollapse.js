import { useState } from "react";

export const useNavbarCollapse = () => {
  const [collapse, setCollapse] = useState();
  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return {
    collapse,
    handleCollapse,
  };
};