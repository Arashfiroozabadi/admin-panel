import React from "react";
import styled from "styled-components/macro";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButtonProps } from "@material-ui/core";

import { IconButton } from "../themed";

interface MenuBtnProps extends IconButtonProps {
  btntype?: "delete" | "navMenu"
}
const MenuBtn = styled((props: MenuBtnProps) => {
  const { ...other } = props;
  return (
    <IconButton
      size="small"
      classes={{
        root: "root"
      }}
      {...other}
    >
      <MenuIcon fontSize="large" />
    </IconButton>
  );
})`
&.root{
  border-radius:2.5px;
  margin:5px;
}
`;

export {
  MenuBtn
};
