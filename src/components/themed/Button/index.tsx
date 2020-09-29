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
        color: disabled ? palette.disable.color[t] : palette.text[t],
        backgroundColor: disabled ? palette.disable.bgc[t] : palette.secondary[t]
      }}
      disabled={disabled}
      {...other}
    />
  );
})`

`;