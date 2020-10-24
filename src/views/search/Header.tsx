import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { InputAdornment } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import styled from "styled-components/macro";

// @MUi Icons
import { Search, Tune } from "@material-ui/icons";

// Local Components 
import clsx from "clsx";

import { Button, Divider, TextField } from "../../components/themed";
import { device } from "../../constants/breakpoint";
import palette from "../../ui/palette";

// Component Types
interface HeaderProps {

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
      overflow: "hidden",
      position: "absolute",
      minHeight: 450,

    },
    filterBox: {
      top: -125,
      width: "100%",
      position: "absolute",
      boxShadow: theme.shadows["4"],
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "red",
    },
    filter: {
      //CSS @Media Querys  
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(1)
      },

      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(1.5)
      },

      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(2)
      }
    },

  }),
);


// Component
const Header = styled((props: HeaderProps) => {
  // Props
  const { ...other } = props;

  // States
  const [open, setOpen] = useState(false);

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
        duration: 0.250
      });
      setOpen(!open);
    } else {
      gsap.to(el, {
        top: -125,
        duration: 0.250
      });
      setOpen(!open);
    }
  };

  useEffect(() => {
    const el = filterRef.current;

    gsap.set(el, { top: -125 });

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
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <>
                <Button
                  classes={{
                    root: classes.rootBtn,
                  }}
                  inInput
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
      <div className={classes.filterContainer} >
        <div ref={filterRef} className={classes.filterBox}>
          <div className={classes.filter} >
            <h1>test</h1>
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