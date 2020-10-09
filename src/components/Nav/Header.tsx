import React from "react";
import styled from "styled-components/macro";

interface NavHeaderProps {

}
const NavHeader = styled((props: NavHeaderProps) => {
  const { ...other } = props;
  return (
    <div {...other} />
  );
})`
flex: 0.2;
display: flex;
align-items: center;
justify-content: space-between;
`;

export {
  NavHeader
};