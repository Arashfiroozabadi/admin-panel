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
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Counter from "../../components/counter/Counter";
import {
  Container, Typography, IconButton,
  Main, Divider, LinearProgress
} from "../../components/themed";
import { selectors } from "../../features/counter";
import palette from "../../ui/palette";
import { device } from "../../constants/breakpoint";
import { colorTransition, bgcTransition } from "../../constants/timing";

import "react-calendar/dist/Calendar.css";
import "./index.scss";

import { TaskManage } from "../../components";

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
            <StyledRow>
              <StyledSection
                forcepad
                style={{
                  backgroundColor: palette.background[t]
                }}
              >
                <div className={classes.block} >
                  <Typography gutterBottom variant="h5" >
                    Welcome John
                  </Typography>
                  <Typography
                    style={{
                      color: palette.text.caption[t]
                    }}
                    variant="body2"
                    gutterBottom
                  >
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
              <StyledSection row >
                <Box display="flex" flexGrow={1}
                  m="10px" p="0px 10px" borderRadius={15}
                  maxHeight={300}
                  style={{
                    transition: bgcTransition,
                    backgroundColor: palette.background[t]
                  }}
                >
                  <StyledCard>
                    <Box p="0px 25px" display="flex" alignItems="center" flexDirection="column" >
                      <StyledAvatar
                        style={{
                          width: 45,
                          height: 45,
                          marginBottom: 10,
                          borderColor: palette.border[t],
                        }}
                        alt="Remy Sharp"
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                      />
                      <Typography variant="h5">
                        John Doe
                      </Typography>
                      <Typography
                        style={{
                          color: palette.text.caption[t]
                        }}
                        variant="body2"
                        gutterBottom
                      >
                        Sr. UI/UX Designer
                      </Typography>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        width={1}
                        marginBottom={1}
                      >
                        <StyledIcon
                          style={{
                            color: palette.icon.common.color[t],
                            backgroundColor: palette.icon.common.bgc[t]
                          }}
                        >
                          <CallIcon fontSize="small" />
                        </StyledIcon>
                        <StyledIcon
                          style={{
                            color: palette.icon.common.color[t],
                            backgroundColor: palette.icon.common.bgc[t]
                          }}
                        >
                          <MailIcon fontSize="small" />
                        </StyledIcon>
                        <StyledIcon
                          style={{
                            color: palette.icon.common.color[t],
                            backgroundColor: palette.icon.common.bgc[t]
                          }}
                        >
                          <ChatBubbleIcon fontSize="small" />
                        </StyledIcon>
                      </Box>
                    </Box>
                    <Divider />
                    <Box display="flex" width={1} flexGrow={1}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="body2">
                        Company
                      </Typography>
                      <Typography variant="caption"
                        style={{
                          color: palette.text.caption[t]
                        }}
                      >
                        Google
                      </Typography>
                    </Box>
                    <Box display="flex" width={1} flexGrow={1}
                      justifyContent="space-between" alignItems="center"
                    >
                      <Typography variant="body2">
                        Joining Date
                      </Typography>
                      <Typography variant="caption"
                        style={{
                          color: palette.text.caption[t]
                        }}
                      >
                        20/04/2019
                      </Typography>
                    </Box>
                    <Box display="flex" width={1} flexGrow={1}
                      justifyContent="space-between" alignItems="center"
                    >
                      <Typography variant="body2">
                        Tasks
                      </Typography>
                      <Typography variant="caption"
                        style={{
                          color: palette.text.caption[t]
                        }}
                      >
                        67 Active
                      </Typography>
                    </Box>
                  </StyledCard>
                </Box>
                <Box flexGrow={1} m="5px" display="flex" flexDirection="column">
                  <Box m="5px" p="16px" maxHeight={113}
                    borderRadius={15} flex={1}
                    style={{
                      transition: bgcTransition,
                      backgroundColor: palette.background[t]
                    }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <StyledAvatar>F</StyledAvatar>
                      <Box flexGrow={0.8}>
                        <Typography variant="body2">
                          FixPay App
                        </Typography>
                      </Box>
                      <StyledIcon>
                        <MoreVertIcon />
                      </StyledIcon>
                    </Box>
                    <Box width={0.7} >
                      <Typography>
                        Task Done: 25 / 50
                      </Typography>
                      <LinearProgress variant="determinate" value={50} />
                    </Box>
                    <Box marginTop={2}>
                      <AvatarGroup max={5} spacing="small">
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
                    </Box>
                  </Box>
                  <Box m="5px" p="16px" maxHeight={113}
                    flex={1}
                    borderRadius={15}
                    style={{
                      transition: bgcTransition,
                      backgroundColor: palette.background[t]
                    }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <StyledAvatar>R</StyledAvatar>
                      <Box flexGrow={0.8}>
                        <Typography variant="body2">
                          Risely App
                        </Typography>
                      </Box>
                      <StyledIcon>
                        <MoreVertIcon />
                      </StyledIcon>
                    </Box>
                    <Box width={0.7}>
                      <Typography>
                        Task Done: 25 / 50
                      </Typography>
                      <LinearProgress variant="determinate" value={50} />
                    </Box>
                    <Box marginTop={2}>
                      <AvatarGroup max={5} spacing="small">
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
                    </Box>
                  </Box>
                </Box>
              </StyledSection>
            </StyledRow>
            <StyledRow>
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

              <StyledSection
                style={{
                  backgroundColor: palette.background[t]
                }}
              >
                <Box p="0px 10px"
                  width={1}
                >
                  <TaskManage />
                </Box>
              </StyledSection>
            </StyledRow>
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
  justify-content: space-between;
  @media ${device.mobileS}{
    padding:0;
    margin: 0px 10px;
    align-items: initial;
    flex-direction: column-reverse;
  }
  @media ${device.laptop}{
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    margin: 0px 17px;
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
  padding: 5px 0px;
  flex-grow: 0.02;
  align-items: center;
  justify-content: space-between;
`;
const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileS}{
    
  }
  @media ${device.laptop}{
    // flex-direction: initial;
  }
`;
const StyledCard = styled.div`
  padding: 16px 0px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
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
const StyledSection = styled.section<{ column?: boolean, row?: boolean, forcepad?: boolean }>`
  flex-grow: 1;
  display: flex;
  ${props => props.forcepad ?
    `
    @media ${device.mobileS}{
      padding: 10px;
    }
    @media ${device.tablet}{
    }
  `: `
    @media ${device.mobileS}{
      padding: 0;
    }
    @media ${device.tablet}{
    }
  `
  }
  ${props => props.row ?
    `
    margin: 0px;
    @media ${device.mobileS}{
      padding: 0;
      flex-direction: column;
    }
    @media ${device.tablet}{
      flex-direction: initial;
    }
    `
    :
    `
      margin: 10px;
      display: flex;
      transition: ${colorTransition},${bgcTransition};
      align-items: center;
      border-radius: 15px;
      justify-content: space-between;
      @media ${device.mobileS}{
        flex-direction: column;
      }
      @media ${device.tablet}{
        flex-direction: row;
      }
      @media ${device.laptop}{
        padding: 0px 10px;
        flex-direction: initial;
      }
    `
  }
`;

const StyledIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  transition: ${colorTransition},${bgcTransition};
`;

const StyledImg = styled.img`
  width: 85%;
  height: auto;
  border-bottom-left-radius: 37%;
  border-top-right-radius: 37%;
`;