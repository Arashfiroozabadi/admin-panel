import React from "react";
import { ContainerProps } from "@material-ui/core";
import { useSelector } from "react-redux";

import { selectors } from "../../../features/counter";
import palette from "../../../ui/palette";

import { StyledContainer } from "./styledContainer";


interface PropsType extends ContainerProps { }

export default (props: PropsType) => {
  // Props
  const { style, ...other } = props;

  // Redux Hooks
  const t = useSelector(selectors.getTheme);

  // Element Body
  return (
    <StyledContainer
      style={{
        backgroundColor: palette.paper[t],
        ...style
      }}
      {...other}
    >
      {props.children}
    </StyledContainer>
  );
};