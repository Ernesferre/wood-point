import { Box } from "@mui/system";
import React from "react";
import WoodPoint from "../assets/img/WoodPoint.png";

const Header = () => {
  return (
    <Box margin="1rem" cursor="pointer" display="flex" justifycontent="center">
      <img src={WoodPoint} width="110rem" alt="imagen" />
    </Box>
  );
};

export default Header;
