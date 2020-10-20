import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { Divider, DividerProps } from "@material-ui/core";


import palette from "../../../ui/palette";
import { selectors } from "../../../features/counter";
import { bgcTransition } from "../../../constants/timing";


const StyledDivider = styled(Divider)`
  width: 100%;
  transition: ${bgcTransition};
`;


interface PropsType extends DividerProps {

}

export default (props: PropsType) => {
  const t = useSelector(selectors.getTheme);

  return (
    <StyledDivider
      style={{
        marginBottom: 10,
        backgroundColor: palette.cDivider[t]
      }}
      {...props}
    />
  );
};