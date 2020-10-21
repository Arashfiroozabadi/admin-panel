import React from "react";
import styled from "styled-components/macro";

// Local Components 
import { device } from "../../constants/breakpoint";

// Component Types
interface HeaderProps {

}
// Component
 const Header = styled((props: HeaderProps) => {
  // Props
  const { ...other } = props;

  //Element Body 
  return (
    <header {...other} />
  );
})
// Styles
`
@media ${device.mobileS}{

}
@media ${device.laptop}{
}
`;

export default Header;