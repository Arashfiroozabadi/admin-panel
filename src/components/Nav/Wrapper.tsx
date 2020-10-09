import React, { forwardRef, ReactNode } from "react";
import styled from "styled-components/macro";

interface WrapperProps {
  children: ReactNode
}
const Wrapper = forwardRef<HTMLDivElement, WrapperProps>((props: any, ref) => {
  const { ...other } = props;
  return (
    <Div ref={ref} {...other} />
  );
});

const Div = styled.div`
  flex: 1;
  padding: 0px 10px;
  display:flex;
  overflow: hidden;
  flex-direction: column;
`;

export default Wrapper;