import React from "react";
import styled from "styled-components/macro";
import useSWR from "swr";
import axios, { AxiosResponse } from "axios";
import { Avatar, AvatarProps } from "@material-ui/core";

import { Loading, Typography } from "../themed";


interface ImgLoaderProps {
  url: string
  alt: string
  width: number
  height: number
}
const fetcher = (url: string) => axios.get<any, AxiosResponse<any>>(url, {
  responseType: "arraybuffer"
}).then(res => Buffer.from(res.data, "binary").toString("base64"));

const ImgLoader = styled((props: ImgLoaderProps) => {
  const { url, alt, ...other } = props;
  const { data, error } = useSWR(url, fetcher);

  if (error) return <Typography variant="caption" >failed to load</Typography>;
  if (!data) {
    return (
      <Loading
        type="spinningBubbles"
        {...other}
      />
    );
  }
  return (
    <Img
      src={`data:image/jpeg;base64,${data}`}
      alt={alt}
      {...other}
    />
  );
})`

`;


interface ImgProps extends AvatarProps {
  width: number
  height: number
}
const Img = styled((props: ImgProps) => {
  const { ...other } = props;
  return (
    <Avatar classes={{ root: "avatar" }}  {...other} />
  );
})`
&.avatar{
  width: ${props => props.width}px;
  height: ${props => props.height}px;
}
`;

export default ImgLoader;
