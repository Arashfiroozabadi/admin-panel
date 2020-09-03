import React from "react";
import styled from "styled-components/macro";
import { LinearProgress, LinearProgressProps } from "@material-ui/core";


const StyledLinearProgress = styled(LinearProgress)`
  width:100%
`;



interface PropsType extends LinearProgressProps {

}

export default (props: PropsType) => {
  return (
    <StyledLinearProgress {...props} />
  );
};