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
  const { style, children, btntype, ...other } = props;
  return (
    <StyledIconButton
      style={
        btntype === "delete" ?
          {
            backgroundColor: palette.button.delete.bgc[t],
            color: palette.button.delete.color[t],
            ...style
          } :
          btntype === "navMenu" ?
            {
              backgroundColor: palette.button.navMenu.bgc[t],
              color: palette.button.delete.color[t],
              ...style
            } :
            btntype === "close" ?
              {
                backgroundColor: palette.button.close.bgc[t],
                color: palette.button.close.color[t],
                padding: 7,
                ...style
              } :
              btntype === "theme" ?
                {
                  backgroundColor: palette.theme.bgc[t],
                  color: palette.theme.color[t],
                  ...style
                } :
                {
                  backgroundColor: palette.icon.bgc[t],
                  color: palette.icon.color[t],
                  ...style
                }
      }
      {...other}
    >
      {children}
    </StyledIconButton>
  );
};