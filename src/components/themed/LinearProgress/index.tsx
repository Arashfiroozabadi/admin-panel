import React from "react";
import styled from "styled-components/macro";
import { LinearProgress, LinearProgressProps } from "@material-ui/core";
import { useSelector } from "react-redux";

import { selectors } from "../../../features/counter";
import palette from "../../../ui/palette";
import { bgcTransition } from "../../../constants/timing";


interface PropsType extends LinearProgressProps {
  colorprimary?: string
  bar?: string
}

const StyledLinearProgress = styled((props: PropsType) => (
  <LinearProgress
    classes={{
      root: "root",
      colorPrimary: "color",
      bar: "bar",
    }}
    {...props}
  />
))`
  width:100%;
  &.root {
    height:5px;
    transition: ${bgcTransition};
    border-radius:5px;
  }
  &.color{
     background-color: ${props => props.colorprimary};
  }
  > {
    &.bar{
      transition: ${bgcTransition};
      border-radius: 5px;
      background-color: ${props => props.bar};
    }
  } 
`;

export default (props: PropsType) => {
  const t = useSelector(selectors.getTheme);

  return (
    <StyledLinearProgress
      colorprimary={palette.progress.colorprimary[t]}
      bar={palette.progress.bar[t]}
      {...props}
    />
  );
};