import React from "react";
import { IconButtonProps } from "@material-ui/core";

import { useSelector } from "react-redux";

import { selectors } from "../../../features/counter";
import palette from "../../../ui/palette";

import { StyledIconButton } from "./StyledIconBtn";

interface PropsType extends IconButtonProps {
  btntype?: "delete" | "navMenu"
}

export default (props: PropsType) => {
  const t = useSelector(selectors.getTheme);
  const { children, btntype, ...other } = props;
  return (
    <StyledIconButton
      style={
        btntype === "delete" ?
          {
            backgroundColor: palette.button.delete.bgc[t],
            color: palette.button.delete.color[t]
          } :
          btntype === "navMenu" ?
            {
              backgroundColor: palette.button.navMenu.bgc[t],
              color: palette.button.delete.color[t]
            } :
            {
              backgroundColor: palette.icon.bgc[t],
              color: palette.icon.color[t]
            }
      }
      {...other}
    >
      {children}
    </StyledIconButton>
  );
};