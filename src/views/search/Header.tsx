import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Box, FormControl, InputAdornment, MenuItem } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import styled from "styled-components/macro";

// @MUi Icons
import { Search, Tune } from "@material-ui/icons";

// Local Components 
import clsx from "clsx";

import { useDispatch, useSelector } from "react-redux";

import { Button, Divider, TextField, InputLabel, Select } from "../../components/themed";
import { device } from "../../constants/breakpoint";
import palette from "../../ui/palette";

import { selectors } from "../../features/counter";

import { bgcTransition } from "../../constants/timing";

import { getSearchQuery, getSearchType } from "../../features/gql";

import Filters from "./Filters";

// Component Types
interface HeaderProps {
  getQuery: any
}

// MUi Styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    rootTextField: {
      marginTop: 10,
      boxShadow: theme.shadows["3"],
      borderRadius: theme.shape.borderRadius,

      //CSS @Media Querys  
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },

      [theme.breakpoints.up("sm")]: {
        width: "70%",
      },

      [theme.breakpoints.up("md")]: {
        width: "60%",
      }
    },

    rootBtn: {
      border: "2px solid",
      padding: 4,
      minWidth: 28,
      borderRadius: "50%",
      boxShadow: theme.shadows["2"],
    },

    filterBtn: {
      margin: "0px -10px 0px 20px",
      borderRadius: theme.shape.borderRadius,
    },

    divider: {
      margin: "5px 0px 10px 0px"
    },

    filterContainer: {
      width: "100%",
      height: "100%",
      zIndex: 1,
      overflow: "hidden",
      position: "absolute",
      minHeight: 90,
      marginTop: -20,

    },
    filterBox: {
      top: -100,
      width: "calc(100% - 2px)",
      border: "1px solid",
      position: "absolute",
      boxShadow: theme.shadows["4"],
      borderRadius: theme.shape.borderRadius,
    },
    filter: {
      display: "flex",

      //CSS @Media Querys 
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(1)
      },

      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(1.2)
      },

      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(1.5)
      }
    },
    rootSearchTypeFormControl: {
      minWidth: 160
    },

    row: {

    },

  }),
);


type searchType = "USER" | "REPOSITORY" | "ISSUE" | ""

// Component
const Header = styled((props: HeaderProps) => {
  // Props
  const { getQuery, ...other } = props;

  // States
  const [open, setOpen] = useState(false);
  const [inValue, setInValue] = useState("");
  const [searchType, setSearchType] = useState<searchType>("REPOSITORY");

  // Redux
  const theme = useSelector(selectors.getTheme);
  const gqlSearchType = useSelector(getSearchType);
  const gqlSearchQuery = useSelector(getSearchQuery);
  const dispatch = useDispatch();

  // Material-UI Hooks
  const classes = useStyles();

  // Refs
  const filterRef = useRef(null);

  // Event Handlers
  const handleShowFilterMenu = () => {
    const el = filterRef.current;

    if (!open) {
      gsap.to(el, {
        top: 0,
        duration: 0.500
      });
      setOpen(!open);
    } else {
      gsap.to(el, {
        top: -100,
        duration: 0.500
      });
      setOpen(!open);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInValue(e.target.value);
  };
  const handleSearchBtn = () => {
    const el = filterRef.current;

    gsap.to(el, {
      top: -100,
      duration: 0.500
    });
    setOpen(false);
    getQuery();
    dispatch({
      type: "SEARCH_QUERY",
      payload: inValue
    });
  };

  const handleChangeSearchType = (e: React.ChangeEvent<{ value: unknown }>) => {
    setSearchType(e.target.value as searchType);
    dispatch({ type: e.target.value });
  };

  // React Hooks
  useEffect(() => {
    const el = filterRef.current;

    gsap.set(el, { top: -1000 });

    return () => undefined;
  }, []);

  //Element Body 

  return (
    <header {...other}>
      <TextField
        classes={{
          root: classes.rootTextField
        }}
        variant="outlined"
        label="Search"
        placeholder={`searching in ${gqlSearchType}`}
        onChange={handleChange}
        // value={inValue ? inValue : gqlSearchQuery}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <>
                <Button
                  disabled={searchType === "" ? true : false}
                  classes={{
                    root: classes.rootBtn,
                  }}
                  inInput
                  onClick={handleSearchBtn}
                >
                  <Search />
                </Button>
                <Button
                  classes={{
                    root: clsx(classes.rootBtn, classes.filterBtn)
                  }}
                  style={
                    open ? { color: palette.info.light }
                      :
                      {}
                  }
                  inInput
                  // event handlers
                  onClick={handleShowFilterMenu}

                >
                  <Tune />
                </Button>
              </>
            </InputAdornment>
          )
        }}
        inputProps={{
          style: {
            paddingRight: 10
          }
        }}
      />
      <Divider classes={{ root: classes.divider }} />
      <div
        className={classes.filterContainer}
      >
        <div
          ref={filterRef}
          className={classes.filterBox}
          style={{
            backgroundColor: palette.background[theme],
            borderColor: palette.border[theme],
            transition: bgcTransition,
          }}
        >
          <div className={classes.filter}>
            <Box flex={0.2} className={clsx(classes.row)} >
              <FormControl
                variant="outlined"
                classes={{
                  root: classes.rootSearchTypeFormControl
                }}
              >
                <InputLabel
                  id="demo-simple-select-label"
                >
                  Search Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gqlSearchType}
                  onChange={handleChangeSearchType}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="USER" >
                    USER
                  </MenuItem>
                  <MenuItem value="REPOSITORY" >
                    REPOSITORY
                  </MenuItem>
                  <MenuItem value="ISSUE" >
                    ISSUE
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
      </div>
    </header>
  );
})
  // Styles
  `
position: relative;
@media ${device.mobileS}{
  
}
@media ${device.laptop}{
}
`;

export default Header;
