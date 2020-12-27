import React from "react";
import { IconButtonProps } from "@material-ui/core";

import { useSelector } from "react-redux";

import { selectors } from "../../../features/counter";
import palette from "../../../ui/palette";

import { StyledIconButton } from "./StyledIconBtn";

interface PropsType extends IconButtonProps {
  btntype?: "delete" | "navMenu" | "close" | "theme"
}

export default (props: PropsType) => {
  const t = useSelector(selectors.getTheme);
  const { style, children, btntype, disabled, ...other } = props;
  return (
    <StyledIconButton
      style={
        btntype === "delete" ?
          {
            backgroundColor: disabled ? palette.disable.bgc[t] : palette.button.delete.bgc[t],
            color: disabled ? palette.disable.color[t] : palette.button.delete.color[t],
            ...style
          } :
          btntype === "navMenu" ?
            {
              backgroundColor: disabled ? palette.disable.bgc[t] : palette.button.navMenu.bgc[t],
              color: disabled ? palette.disable.color[t] : palette.button.delete.color[t],
              ...style
            } :
            btntype === "close" ?
              {
                backgroundColor: disabled ? palette.disable.bgc[t] : palette.button.close.bgc[t],
                color: disabled ? palette.disable.color[t] : palette.button.close.color[t],
                padding: 7,
                ...style
              } :
              btntype === "theme" ?
                {
                  backgroundColor: disabled ? palette.disable.bgc[t] : palette.theme.bgc[t],
                  color: palette.theme.color[t],
                  ...style
                } :
                {
                  backgroundColor: disabled ? palette.disable.bgc[t] : palette.icon.bgc[t],
                  color: disabled ? palette.disable.color[t] : palette.icon.color[t],
                  ...style
                }
      }
      disabled={disabled}
      {...other}
    >
      {children}
    </StyledIconButton>
  );
};