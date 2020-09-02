import React from "react";
import { IconButtonProps } from "@material-ui/core";

import { useSelector } from "react-redux";

import { selectors } from "../../../features/counter";
import palette from "../../../ui/palette";

import { StyledIconButton } from "./StyledIconBtn";

interface PropsType extends IconButtonProps {

}

export default (props: PropsType) => {
  const t = useSelector(selectors.getTheme);
  const { children } = props;
  return (
    <StyledIconButton
      style={{
        backgroundColor: palette.icon.bgc[t],
        color: palette.icon.color[t]
      }}
      {...props}
    >
      {children}
    </StyledIconButton>
  );
};