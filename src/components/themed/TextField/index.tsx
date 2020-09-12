import React from "react";
import styled from "styled-components/macro";
import { TextField, TextFieldProps, TextFieldClassKey } from "@material-ui/core";
import { useSelector } from "react-redux";

import { selectors } from "../../../features/counter";
import palette from "../../../ui/palette";


export default (props: TextFieldProps) => {
  const { ...other } = props;
  return (
    <StyledTextField
      {...other}
    />
  );
};
const StyledTextField = styled((props: TextFieldProps) => {
  const { ...other } = props;
  const t = useSelector(selectors.getTheme);
  return (
    <TextField
      classes={{
        root: "root"
      }}
      InputLabelProps={{
        style: {
          color: palette.inputColor[t]
        }
      }}
      InputProps={{
        style: {
          color: palette.inputColor[t]
        }
      }}
      {...other}
    />
  );
})
  `
&.root{
  border:1px red;
  
}
`;