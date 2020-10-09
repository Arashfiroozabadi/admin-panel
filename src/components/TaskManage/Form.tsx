import React, { forwardRef, useState } from "react";
import styled from "styled-components/macro";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { v1 as uuidv1 } from "uuid";
import DateFnsUtils from "@date-io/date-fns";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { Close } from "@material-ui/icons";

import {
  Typography, TextField, Paper,
  Button, IconButton
} from "../themed";
// import { selectors } from "../../features/counter";

import checklist from "../../img/check_list.webp";
import { actions } from "../../features/taskmanage";
import { device } from "../../constants/breakpoint";
import palette from "../../ui/palette";
import { selectors } from "../../features/counter";

interface PropsType {
  close: () => void
}
export default forwardRef<HTMLFormElement, PropsType>((props, ref) => {
  const [formData, setFormData] = useState({ title: "", caption: "" });
  const [Checker, setChecker] = useState({ title: false, caption: false });
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );

  const t = useSelector(selectors.getTheme);
  const dispatch = useDispatch();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setChecker({ ...Checker, [e.target.name]: e.target.value.length >= 2 ? true : false });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Checker.caption === true || Checker.title === true) {
      dispatch(actions.addTask({
        id: uuidv1(),
        title: formData.title,
        caption: formData.caption,
        date: {
          month: selectedDate!.getMonth(),
          date: selectedDate!.getDate(),
          day: selectedDate!.getDay(),
          h: selectedDate!.getHours(),
          m: selectedDate!.getMinutes()
        }
      }));
      setFormData({ title: "", caption: "" });
      setChecker({ title: false, caption: false });
      props.close();
    }
  };

  const handleClose = () => {
    props.close();
  };

  return (
    <Form ref={ref} onSubmit={(e) => handleSubmit(e)}>
      <Paper type="container">
        <ImgBox>
          <Img src={checklist} alt="" />
        </ImgBox>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Paper modal="true">
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h2">Add new task</Typography>
              <IconButton
                size="medium" 
                btntype="close"
                aria-label="close" 
                onClick={handleClose}
              >
                <Close fontSize="small" />
              </IconButton>
            </Box>

            <Div>
              <TextField
                name="title"
                label="Title"
                color="secondary"
                value={formData.title}
                variant="outlined"
                onChange={handleChange}
                placeholder="Title"
                autoComplete="off"
              />
              <TextField
                name="caption"
                label="Caption"
                color="secondary"
                value={formData.caption}
                variant="outlined"
                onChange={handleChange}
                placeholder="Caption"
                autoComplete="off"
              />
              <DateTimePicker
                className="root"
                inputVariant="outlined"
                value={selectedDate}
                disablePast
                InputProps={{
                  style: {
                    color: palette.inputColor[t]
                  }
                }}
                ampm={false}
                onChange={handleDateChange}
                label="With Today Button"
                showTodayButton
              // onAccept={(data) => handleAccept(data)}
              />
              <Button variant="outlined"
                type="submit"
                disabled={Checker.caption === false || Checker.title === false}
              >
                Add
              </Button>
            </Div>
          </Paper>
        </MuiPickersUtilsProvider>
      </Paper>
    </Form >
  );
});

const Form = styled.form`
  display: flex;
  justify-content: center;
`;
const Div = styled.div`
  flex: 1;
  margin:5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > .root{
    margin: 10px;
  }
`;

const ImgBox = styled.div`
  flex: 0.5;
  min-height: 300px;
  @media ${device.mobileS}{
    display: none
  }
  @media ${device.laptop}{
    display: block
  }
`;
const Img = styled.img`
  width:100%;
  height: 100%;
`;
