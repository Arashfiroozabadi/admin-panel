import React from "react";
import styled from "styled-components/macro";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";

import { selectors } from "../../../features/counter";
import palette from "../../../ui/palette";
import { colorTransition } from "../../../constants/timing";


type LoadingType = "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes";

declare interface LoadingProps {
  color?: string;
  height?: any;
  width?: any;
  delay?: number;
  type?: LoadingType;
  className?: string;
}

const Loading = styled((props: LoadingProps) => {
  const { ...other } = props;
  const t = useSelector(selectors.getTheme);
  return (
    <ReactLoading
      color={palette.loading.color[t]}
      {...other}
    />
  );
})`
transition: ${colorTransition}

`;

export default Loading;