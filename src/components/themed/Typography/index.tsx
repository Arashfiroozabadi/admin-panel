import React from "react";
import styled from "styled-components/macro";
import { Typography, TypographyProps } from "@material-ui/core";

import { useSelector } from "react-redux";

import palette from "../../../ui/palette";
import { selectors } from "../../../features/counter";


interface PropsType extends TypographyProps {
  component?: string
}

export default (props: PropsType) => {
  const { children, ...other } = props;
  const t = useSelector(selectors.getTheme);

  return (
    <StyledTypo
      style={{
        color: palette.h1[t]
      }}
      {...other}
    >
      {children}
    </StyledTypo>
  );
};

const StyledTypo = styled(Typography)`
  transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;