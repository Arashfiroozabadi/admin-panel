import { Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import { Star } from "@material-ui/icons";

import { bgcTransition } from "../../constants/timing";
import { selectors } from "../../features/counter";
import { RepoNodes } from "../../types";
import palette from "../../ui/palette";
import { Divider, Paper, Typography } from "../themed";


interface UserRepoProps {
  data: RepoNodes
}

const UserRepo = styled((props: UserRepoProps) => {
  // props
  const { data, ...other } = props;

  // Redux hooks
  const theme = useSelector(selectors.getTheme);

  return (
    <Paper
      elevation={5}
      classes={{
        rounded: "rounded"
      }}
      style={{
        transition: bgcTransition,
        backgroundColor: palette.background[theme]
      }}
      {...other}
    >
      <Header>
        <Typography gutterBottom variant="subtitle1" >{data.name}</Typography>
        <StarBox borderColor={palette.cDivider[theme]} >
          <Star
            style={{
              width: 15,
              height: 15,
            }}
            htmlColor="gold"
          />
          <Typography
            style={{
              fontSize: 12,
              fontFamily: "unset",
            }}
            variant="caption"
          >
            {data.stargazerCount}
          </Typography>
        </StarBox>
      </Header>
      <Divider />

      <Body>
        <a href={data.url} target="_blankc">
          <Typography variant="h6">
            Link
          </Typography>
        </a>
        <Typography
          component="p"
          style={{
            padding: 5,
            color: palette.text.caption[theme],
          }} variant="caption"
        >
          {data.description}
        </Typography>
      </Body>

      <Divider />
      <Footer>
        {data.languages.edges.map((item) => (
          <Languages
            key={item.node.name}
            color={item.node.color}
            hcolor={palette.text[theme]}
          >
            <Typography
              variant="caption"
              style={{
                color: "inherit",
              }}
            >
              {item.node.name}
            </Typography>
            <Bar
              style={{
                width: `${((item.size / data.languages.totalSize) * 100)}%`,
                backgroundColor: item.node.color
              }}
            />
          </Languages>
        ))}
        <div style={{
          marginTop: 10
        }} >
          <Box
            width={1}
            display="flex"
            flexGrow={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="caption">
              Created At:
          </Typography>
            <Typography
              style={{
                color: palette.text.caption[theme]
              }}
              variant="caption"
            >
              {new Date(data!.createdAt).toLocaleDateString()}
            </Typography>
          </Box>
          <Box
            width={1}
            display="flex"
            flexGrow={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="caption">
              Updated At:
          </Typography>
            <Typography
              style={{
                color: palette.text.caption[theme]
              }}
              variant="caption"
            >
              {new Date(data!.updatedAt).toLocaleDateString()}
            </Typography>
          </Box>
        </div>
      </Footer>
    </Paper>
  );
})`
flex: 1;
margin:5px;
padding:16px;
flex-direction: column;
&.rounded{
  // border-radius: 10px;
}
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  justify-content: space-between;
`;
const Body = styled.main`

`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;

const Bar = styled.div`
  height: 5px;
  border-radius: 10px;
`;

const Languages = styled.div<{ hcolor: string }>`
  color : ${props => props.color};
  &:hover {
    color : ${props => props.hcolor};
  }
`;

const StarBox = styled.div<{ borderColor: string }>`
width: 50px;
padding: 5px;
display: flex;
align-items: center;
justify-content: space-around;
transition: border-color 500ms cubic-bezier(0.4,0,0.2,1);
border: 1px solid ${props => props.borderColor};
border-radius: 4px;
`;

export default UserRepo;
