import React, { Fragment } from "react";
import styled from "styled-components/macro";
import SearchIcon from "@material-ui/icons/Search";
import { AppBar, Toolbar, InputAdornment, InputBase, Avatar } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

import { useSelector } from "react-redux";

import Counter from "../../components/counter/Counter";
import { Container, Typography } from "../../components/themed";
import { selectors } from "../../features/counter";
import palette from "../../ui/palette";

const Home: React.FC = () => {
  const t = useSelector(selectors.getTheme);
  return (
    <Fragment>
      <Container maxWidth="lg">
        <StyledAppBar
          color="transparent"
          elevation={0}
          position="static"
        >
          <StyledToolbar>
            <StyledSearch
              style={{
                color: palette.inputColor[t],
                backgroundColor: palette.background[t]
              }}
              placeholder="search"
              endAdornment={
                <InputAdornment position="end" ><SearchIcon /></InputAdornment>
              }
            />
            <StyledDiv>
              <AvatarGroup max={5} spacing="small">
                <StyledAvatar
                  style={{
                    borderColor: palette.border[t],
                  }}
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
                <StyledAvatar
                  style={{
                    borderColor: palette.border[t],
                  }}
                  alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg"
                />
                <StyledAvatar
                  style={{
                    borderColor: palette.border[t],
                  }}
                  alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg"
                />
                <StyledAvatar
                  style={{
                    borderColor: palette.border[t],
                  }}
                  alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg"
                />
                <StyledAvatar
                  style={{
                    borderColor: palette.border[t],
                  }}
                  alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/5.jpg"
                />
              </AvatarGroup>
            </StyledDiv>
          </StyledToolbar>
        </StyledAppBar>
        <Typography variant="h1">Create React App powered by fleonard</Typography>

        <Counter />
      </Container>
    </Fragment>
  );
};

export default Home;


const StyledAppBar = styled(AppBar)`

`;
const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;
const StyledSearch = styled(InputBase)`
  flex-grow: 0.2;
  padding: 5px 10px;
  border-radius: 2.5px;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1),background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;
const StyledDiv = styled.div`
  display: flex;
  padding: 5px 10px;
`;
const StyledAvatar = styled(Avatar)`

`;
