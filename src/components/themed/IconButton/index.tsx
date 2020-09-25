import React from "react";
import { IconButtonProps } from "@material-ui/core";

import { useSelector } from "react-redux";

import { selectors } from "../../../features/counter";
import palette from "../../../ui/palette";

import { StyledIconButton } from "./StyledIconBtn";

interface PropsType extends IconButtonProps {
  btntype?: "delete"
}

export default (props: PropsType) => {
  const t = useSelector(selectors.getTheme);
  const { children, btntype } = props;
  return (
    <StyledIconButton
      style={
        btntype === "delete" ?
          {
            backgroundColor: palette.button.delete.bgc[t],
            color: palette.button.delete.color[t]
          }
          :
          {
            backgroundColor: palette.icon.bgc[t],
            color: palette.icon.color[t]
          }
      }
      {...props}
    >
      {children}
    </StyledIconButton>
  );
};