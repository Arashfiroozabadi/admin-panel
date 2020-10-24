import React from "react";
import styled from "styled-components/macro";
import { TextField, OutlinedTextFieldProps } from "@material-ui/core";
import { useSelector } from "react-redux";

import { selectors } from "../../../features/counter";
import palette from "../../../ui/palette";



interface TextFieldProps extends OutlinedTextFieldProps {
  labelStyle?: React.CSSProperties
  inputStyle?: React.CSSProperties
}

export default (props: TextFieldProps) => {
  const { ...other } = props;
  return (
    <StyledTextField
      {...other}
    />
  );
};

interface Props extends OutlinedTextFieldProps {
  labelStyle?: React.CSSProperties
  inputStyle?: React.CSSProperties
}
const StyledTextField = styled((props: Props) => {
  const { InputProps, InputLabelProps, inputStyle, labelStyle, ...other } = props;
  const t = useSelector(selectors.getTheme);
  return (
    <TextField
      classes={{
        root: "root"
      }}
      InputLabelProps={{
        style: {
          color: palette.inputColor[t],
          ...labelStyle
        },
        ...InputLabelProps
      }}
      InputProps={{
        style: {
          color: palette.inputColor[t],
          ...inputStyle
        },
        ...InputProps
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