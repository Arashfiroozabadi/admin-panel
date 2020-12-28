import styled from "styled-components/macro";

import { device } from "../../constants/breakpoint";


const Main = styled.main`
  padding:5px;
  @media ${device.mobileS}{
    padding:1em;
  }
  @media ${device.tablet}{
    padding:2em;
  }
  @media ${device.laptop}{
  }
`;


export default Main;