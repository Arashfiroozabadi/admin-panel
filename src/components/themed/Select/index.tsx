import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { SelectProps } from "@material-ui/core";


import { selectors } from "../../../features/counter";
import palette from "../../../ui/palette";
import { bgcTransition, colorTransition } from "../../../constants/timing";

import { Select } from "./styledEl";


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    transition: `
      ${colorTransition},
      ${bgcTransition}
    `,
  }
}));




interface Props extends SelectProps {
  children?: React.ReactNode;
}

function InputLabel(props: Props) {
  // Props
  const { children, ...other } = props;

  // Material-UI Hooks
  const classes = useStyles();
  // THEME
  const theme = useSelector(selectors.getTheme);

  // Element Body
  return (
    <Select
      tcolor={palette.inputColor[theme]}
      classes={{
        root: clsx("root", classes.root)
      }}
      {...other}
    >
      {children}
    </Select>
  );
}


export default InputLabel;