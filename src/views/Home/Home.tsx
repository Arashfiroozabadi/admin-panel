import React, {
  useRef,
  Fragment,
  useState,
} from "react";

import styled from "styled-components/macro";
import Calendar from "react-calendar";

import {
  useSelector
} from "react-redux";
import {
  useQuery
} from "@apollo/client";
import {
  loader
} from "graphql.macro";

// Material-Ui Components
import {
  Box,
  Theme,
  AppBar,
  // Avatar,
  Toolbar,
  InputBase,
  makeStyles,
  createStyles,
  InputAdornment,
} from "@material-ui/core";
// import AvatarGroup from "@material-ui/lab/AvatarGroup";

// Icons
import AddIcon from "@material-ui/icons/Add";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

// Local Components
import {
  ImgLoader,
  TaskManage,
  UserRepo,
} from "../../components";
import {
  Main,
  Tooltip,
  Divider,
  Loading,
  Container,
  IconButton,
  Typography,
  // LinearProgress,
} from "../../components/themed";

import {
  device
} from "../../constants/breakpoint";
import {
  selectors
} from "../../features/counter";
import {
  bgcTransition,
  colorTransition,
} from "../../constants/timing";

import palette from "../../ui/palette";

import { Repo } from "../../types";

import User from "./User";
import imgOne from "./imgOne.webp";


import "./index.scss";
import "react-calendar/dist/Calendar.css";

const GET_USER = loader("./user.graphql");

interface userType {
  user: {
    avatarUrl: string
    id: string
    login: string
    name: string
    email: string
    location: string
    bio: string
    company: string
    createdAt: string
    repositories: Repo
  }
}

const Home: React.FC = () => {
  const classes = useStyles();
  // Refs
  const input = useRef<any>(null);

  // States
  const [clenValue, clenChange] = useState(new Date());
  const [user, setUser] = useState<string | null>("arashfiroozabadi");

  // Graphql Querys
  const { loading, error, data } = useQuery<userType>(GET_USER, {
    variables: {
      user
    },
    notifyOnNetworkStatusChange: true,
    // pollInterval: 500,
  });

  // Redux
  const t = useSelector(selectors.getTheme);

  // Handlers
  const handleGQL = () => {
    const userName = prompt("Please enter your github username", "arashfiroozabadi");
    if (userName) {
      if (userName.includes(" ")) {
        alert("you can't use space in this field");
      } else {
        setUser(userName);
      }
    }
  };

  // Element Body
  if (error) return <p>error {error.message}</p>;
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
              inputRef={input}
              // onChange={() => {
              //   addNewRepo({ variables: { name: "testOK", desc: "in ham okye agha" } });
              // }}
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
              <User username={user} />
              <Tooltip title="Add your github username" >
                <IconButton
                  style={{
                    padding: 6,
                  }}
                  onClick={handleGQL}
                >
                  <StyledAddIcon />
                </IconButton>
              </Tooltip>
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
                    {loading ?
                      <Loading type="cylon" />
                      :
                      `Welcome ${data?.user.name}`
                    }
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
                <Box display="flex" flex={1}
                  m="10px" p="0px 10px" borderRadius={15}
                  maxHeight={300}
                  style={{
                    transition: bgcTransition,
                    backgroundColor: palette.background[t]
                  }}
                >
                  <StyledCard>
                    <Box p="0px 25px" display="flex" alignItems="center" flexDirection="column" >
                      {loading ?
                        <Loading
                          type="spinningBubbles"
                          height={40}
                          width={40}
                        />
                        :
                        <ImgLoader
                          alt="Travis Howard"
                          height={40}
                          width={40}
                          url={data!.user.avatarUrl}
                        />

                      }
                      <Typography variant="h5">
                        {loading ?
                          <Loading width={40} height={40} type="bubbles" />
                          :
                          data?.user.name
                        }
                      </Typography>
                      <Typography
                        style={{
                          color: palette.text.caption[t]
                        }}
                        component="div"
                        variant="body2"
                        gutterBottom
                      >
                        {loading ?
                          <Loading width={40} height={40} type="bubbles" />
                          :
                          data!.user.bio
                        }
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
                        {loading ?
                          "Loading..." :
                          data!.user.company === null
                            ? "Google" : data!.user.company
                        }
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
                        {loading ? "Loading..." : new Date(data!.user.createdAt).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <Box display="flex" width={1} flexGrow={1}
                      justifyContent="space-between" alignItems="center"
                    >
                      <Typography variant="body2">
                        Rrepositories
                      </Typography>
                      <Typography variant="caption"
                        style={{
                          color: palette.text.caption[t]
                        }}
                      >
                        {loading ? "Loading..." : data?.user.repositories.totalCount}
                      </Typography>
                    </Box>
                  </StyledCard>
                </Box>
                <Box
                  m="5px"
                  display="flex"
                  flex={1}
                  maxHeight={350}
                  flexDirection="column"
                  style={{
                    overflowX: "hidden",
                    overflowY: "scroll",
                  }}
                >
                  {
                    loading ?
                      <Box display="flex" height="100%" justifyContent="center" alignItems="center">
                        <Loading width={80} height={80} type="bubbles" />
                      </Box>
                      :
                      data!.user.repositories.nodes.map((item) => (
                        <UserRepo key={item.id} data={item} />
                      ))
                  }
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
                <Box width={1}>
                  <TaskManage />
                </Box>
              </StyledSection>
            </StyledRow>
          </StyledArticle>
        </Main>
        {/* Main <<==< */}
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
  @media ${device.mobileS}{
    width: 100%;
  }
  @media ${device.laptop}{
    width: initial
  }
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