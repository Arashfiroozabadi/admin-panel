import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import Calendar from "react-calendar";
import {
  AppBar, Toolbar, InputAdornment,
  InputBase, Avatar, Box, makeStyles,
  Theme, createStyles
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

import "react-calendar/dist/Calendar.css";
import "./index.scss";

import Counter from "../../components/counter/Counter";
import { Container, Typography, IconButton, Main } from "../../components/themed";
import { selectors } from "../../features/counter";
import palette from "../../ui/palette";
import { device } from "../../constants/breakpoint";
import { colorTransition, bgcTransition } from "../../constants/timing";


import imgOne from "./imgOne.webp";

const Home: React.FC = () => {
  const t = useSelector(selectors.getTheme);
  const classes = useStyles();
  const [clenValue, clenChange] = useState(new Date());
  return (
    <Fragment>
      <Container maxWidth="lg">
        {/* >>==> Header */}
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
              <StyledBox
                style={{
                  color: palette.inputColor[t],
                }}
              >
                <NotificationsNoneIcon />
              </StyledBox>
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
              <IconButton>
                <StyledAddIcon />
              </IconButton>
            </StyledDiv>
          </StyledToolbar>
        </StyledAppBar>
        {/* Header <<==< */}

        {/* >>==> Main */}
        <Main className={classes.main} >
          <StyledArticle>
            <StyledSection
              style={{
                backgroundColor: palette.background[t]
              }}
            >
              <div className={classes.block} >
                <Typography gutterBottom variant="h3" >
                  Welcome John
                </Typography>
                <Typography variant="body2" >
                  Manage all the things from single
                  dashboard like HRMS, PMS, Recruitment,
                  and all the things.
                </Typography>
              </div>
              <div className={classes.imgBox} >
                <StyledImg
                  src={imgOne}
                  alt="https://dribbble.com/shots/4793102-Teamwork-and-Brainstorming"
                  title="https://dribbble.com/shots/4793102-Teamwork-and-Brainstorming"
                />
              </div>
            </StyledSection>
            <StyledSection
              style={{
                backgroundColor: palette.background[t]
              }}
            >
              <div
                className={classes.calendar}
                style={{
                  backgroundColor: palette.background[t]
                }}
              >
                <Calendar
                  onChange={() => clenChange}
                  value={clenValue}
                  tileClassName="day"
                />
              </div>
            </StyledSection>
          </StyledArticle>
        </Main>
        {/* Main <<==< */}

        <Counter />
      </Container>
    </Fragment>
  );
};

export default Home;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      marginTop: 20
    },
    block: {
      width: "50%",
      [theme.breakpoints.only("xs")]: {
        width: "100%",
      },
    },
    calendar: {
      width: "100%",
      borderRadius: 15,
    },
    imgBox: {
      width: "40%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.only("xs")]: {
        width: "100%",
      },
    }
  }),
);

const StyledAppBar = styled(AppBar)`

`;
const StyledToolbar = styled(Toolbar)`
  margin: 0px 10px;
  justify-content: space-between;
  @media ${device.mobileS}{
    padding:0;
    align-items: initial;
    flex-direction: column-reverse;
  }
  @media ${device.laptop}{
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: initial;
  }
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
  flex-grow: 0.02;
  align-items: center;
  justify-content: space-between;
`;
const StyledAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
`;
const StyledAddIcon = styled(AddIcon)`

`;
const StyledBox = styled(Box)`
  padding: 5px;
  margin: 0px 10px;
  transition: ${colorTransition}
`;

const StyledArticle = styled.article`
  display: flex;
  width:100%;
  @media ${device.mobileS}{
    flex-direction: column;
  }
  @media ${device.laptop}{
    flex-direction: initial;
  }
`;
const StyledSection = styled.section`
  margin: 10px;
  display: flex;
  padding: 0px 24px;
  transition: ${colorTransition},${bgcTransition};
  align-items: center;
  border-radius: 15px;
  justify-content: space-between;
  @media ${device.mobileS}{
    padding: 0;
    flex-direction: column;
  }
  @media ${device.laptop}{
    flex-direction: initial;
  }
`;

const StyledImg = styled.img`
  width: 85%;
  height: auto;
  border-bottom-left-radius: 37%;
  border-bottom-right-radius: 71%;
  border-top-left-radius: 75%;
  border-top-right-radius: 32%;
`;