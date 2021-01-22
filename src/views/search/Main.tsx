import styled from "styled-components/macro";

import { device } from "../../constants/breakpoint";


const Main = styled.main`
  padding:5px;
  @media ${device.mobileS}{
    padding:0.5em;
  }
  @media ${device.tablet}{
    padding:2em;
  }
  @media ${device.laptop}{
    padding: 0.5em;
    padding-top: 0.5em
  }
`;


export default Main;