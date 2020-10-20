import React from "react";
import styled from "styled-components/macro";
import { Paper, PaperProps } from "@material-ui/core";
import { useSelector } from "react-redux";

import palette from "../../../ui/palette";
import { selectors } from "../../../features/counter";
import { bgcTransition } from "../../../constants/timing";

interface PropsTypes extends PaperProps {
  modal?: string
  type?: "container" | "modal"
}

export default styled((props: PropsTypes) => {
  // Props
  const { ...other } = props;
  
  // Redux Hooks
  const t = useSelector(selectors.getTheme);

  // Element Body
  return (
    <Paper
      style={{
        transition: bgcTransition,
        backgroundColor: palette.paper[t],
      }}
      {...other}
    />
  );
})
  `
  display: flex;
  ${props => props.modal === "true" ?
    `
      flex:1;
      padding: 1em;
      flex-direction: column;
    `
    : null
  }
  ${props => props.type === "container" ? 
    `
    width: 100%;
    `
    : null}
`;
