import React from "react";
import styled from "styled-components/macro";

import { device } from "../../../constants/breakpoint";

const StyledMain = styled.main`
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  @media ${device.mobileS}{
    padding:0;
  }
  @media ${device.laptop}{
    padding-left: 24px;
    padding-right: 24px;
  }
`;


interface PropsType {
  children: NonNullable<React.ReactNode>;
  className?: string
}

export default (props: PropsType) => {
  const { children, className } = props;
  return (
    <StyledMain
      className={className}
      style={{}}
      {...props}
    >
      {children}
    </StyledMain>
  );
};