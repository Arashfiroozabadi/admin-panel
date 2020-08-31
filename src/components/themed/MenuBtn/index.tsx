import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { selectors } from "../../../features/counter";

import "./MenuBtn.scss";
export default (props: any) => {
  const theme = useTheme();
  const t = useSelector(selectors.getTheme);
  return (
    <div>
      <IconButton
        style={{
          color: theme.palette.info[t]
        }}
        className="btn_menu"
        {...props}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};