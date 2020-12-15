import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { InputLabelProps } from "@material-ui/core";


import { selectors } from "../../../features/counter";
import palette from "../../../ui/palette";
import { bgcTransition, colorTransition } from "../../../constants/timing";

import { Label } from "./styledEl";


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
    transition: `
      ${colorTransition},
      ${bgcTransition},
      transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms
    `,
  }
}));




interface Props extends InputLabelProps {
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
    <Label
      tcolor={palette.text.label[theme]}
      bgc={palette.background[theme]}
      classes={{
        root: clsx("root", classes.root)
      }}
      {...other}
    >
      {children}
    </Label>
  );
}


export default InputLabel;