import React from "react";
import styled from "styled-components/macro";
import { Paper, PaperProps } from "@material-ui/core";
import { useSelector } from "react-redux";

import { selectors } from "../../../features/counter";
import palette from "../../../ui/palette";

interface PropsTypes extends PaperProps {
  modal?: string
  type?: "container" | "modal"
}

export default styled((props: PropsTypes) => {
  const { ...other } = props;
  const t = useSelector(selectors.getTheme);
  return (
    <Paper
      style={{
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
