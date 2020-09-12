import React from "react";
import styled from "styled-components/macro";
import { Button, ButtonProps } from "@material-ui/core";
import { useSelector } from "react-redux";

import palette from "../../../ui/palette";
import { selectors } from "../../../features/counter";

interface PropsTypes extends ButtonProps {

}

export default styled((props: PropsTypes) => {
  const { disabled, ...other } = props;
  const t = useSelector(selectors.getTheme);
  return (
    <Button
      style={{
        color: disabled ? palette.text.error[t] : palette.text[t],
        backgroundColor: disabled ? palette.error[t] : palette.secondary[t]
      }}
      {...other}
    />
  );
})`

`;