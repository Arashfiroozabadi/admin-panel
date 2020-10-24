import React from "react";
import styled from "styled-components/macro";
import { Button, ButtonProps } from "@material-ui/core";
import { useSelector } from "react-redux";

import palette from "../../../ui/palette";
import { selectors } from "../../../features/counter";
import { bgcTransition, colorTransition } from "../../../constants/timing";

interface PropsTypes extends ButtonProps {
  inInput?: boolean
}

export default styled((props: PropsTypes) => {
  const {
    style,
    inInput,
    disabled,
    ...other
  } = props;
  const t = useSelector(selectors.getTheme);

  if (inInput) {
    return (
      <Button
        style={{
          color: disabled ? palette.disable.color[t] : palette.text[t],
          transition: `${colorTransition} , ${bgcTransition}`,
          ...style
        }}
        disabled={disabled}
        {...other}
      />
    );
  }

  return (
    <Button
      style={{
        color: disabled ? palette.disable.color[t] : palette.text[t],
        backgroundColor: disabled ? palette.disable.bgc[t] : palette.secondary[t],
        transition: `${colorTransition} , ${bgcTransition}`,
        ...style
      }}
      disabled={disabled}
      {...other}
    />
  );
})`

`;