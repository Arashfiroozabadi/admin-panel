import React, { forwardRef } from "react";
import styled from "styled-components/macro";
import { Tooltip as Tool, TooltipProps } from "@material-ui/core";
// import { useSelector } from "react-redux";

// import { selectors } from "../../../features/counter";


const Ref = forwardRef<HTMLDivElement, any>((props, ref) => {
  
  // Element Body
  return (
    <div ref={ref} {...props} />
  );
});


interface PropsTypes extends TooltipProps {
  children: React.ReactElement<any, any>;
}

const Tooltip = styled((props: PropsTypes) => {
  // Props
  const { ...other } = props;

  // Redux
  // const theme = useSelector(selectors.getTheme);

  // Element Body
  return (
    <Tool {...other} >
      <Ref>{props.children}</Ref>
    </Tool>
  );
})`

`;


export default Tooltip;