import React, { useEffect, useRef, useState } from "react";
import gsap, { TimelineMax } from "gsap";
import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import { Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Popup from "react-popup";

import { TaskStateType } from "../../features/taskmanage/reducer";
import { selectors } from "../../features/counter";
import palette from "../../ui/palette";
import { bgcTransition, colorTransition } from "../../constants/timing";
import { IconButton, Typography } from "../themed";
import { actions } from "../../features/taskmanage";

interface PropsType {
  data: TaskStateType
}

export default (props: PropsType) => {
  const { data } = props;
  const divEl = useRef(null);
  const [play, setPlay] = useState(true);

  const t = useSelector(selectors.getTheme);
  const dispatch = useDispatch();

  const tIn = new TimelineMax({ paused: true });
  const tOut = new TimelineMax({ paused: true });

  const handleDelete = (id: number | string, task: string) => {
    Popup.registerPlugin("popover", function (this: typeof Popup, content: any, target: any) {
      this.create({
        content: content,
        className: "popover",
        noOverlay: true,
        position: function (box: any) {
          const bodyRect = document.body.getBoundingClientRect();
          const btnRect = target.getBoundingClientRect();
          const btnOffsetTop = btnRect.top - bodyRect.top;
          const btnOffsetLeft = btnRect.left - bodyRect.left;
          const scroll = document.documentElement.scrollTop || document.body.scrollTop;

          box.style.top = btnRect.top <= 200 ? "10px" :
            (btnOffsetTop - box.offsetHeight - 10) - scroll + "px";
          box.style.left = (btnOffsetLeft + (target.offsetWidth / 2) - (box.offsetWidth / 2)) + "px";
          box.style.margin = 0;
          box.style.opacity = 1;
        },
        buttons: {
          left: ["cancel"],
          right: [{
            text: "Yes",
            key: "enter",
            action: () => {
              const el = divEl.current;
              tOut.fromTo(el,
                {
                  opacity: 1
                },
                {
                  opacity: 0,
                  onComplete: () => {
                    dispatch(actions.deleteTask(id));
                    Popup.close();
                    setPlay(false);
                  }
                }
              );
              tOut.play();
            }
          }]
        }
      }, true);
    });

    Popup.plugins().popover(<h1>Delete this task "{task}" ?</h1>, divEl.current);
  };
  useEffect(() => {
    const el = divEl.current;
    gsap.set(el, { opacity: 0 });
    tIn.fromTo(el,
      {
        opacity: 0
      },
      {
        opacity: 1,
        onComplete: () => {
          setPlay(false);
        }
      }
    );
    if (play) tIn.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <List
      ref={divEl}
      elevation={4}
      className="task"
      style={{
        backgroundColor: palette.paper[t]
      }}
    >
      <Wrapper>
        <Typography variant="h6">{data.title}</Typography>
        <Popup />
        <DeleteBtn btntype="delete" onClick={() => handleDelete(data.id, data.title)} >
          <DeleteIcon fontSize="small" />
        </DeleteBtn>
      </Wrapper>
      <Typography variant="caption" gutterBottom >{data.caption}</Typography>
      <DueDate >
        <Wrapper>
          <Typography variant="overline" component="span" >{data.date?.month}</Typography>
          <Typography variant="overline" component="span">/</Typography>
          <Typography variant="overline" component="span" >{data.date?.date}</Typography>
          <Typography variant="overline" component="span">&nbsp;&nbsp;</Typography>
          <Typography variant="overline" component="span">{DayConvert(data.date!.day)}</Typography>
        </Wrapper>
        <Wrapper>
          <Typography variant="overline" component="span">{data.date?.h}</Typography>
          <Typography variant="overline" component="span">:</Typography>
          <Typography variant="overline" component="span">{data.date?.m}</Typography>
        </Wrapper>
      </DueDate>
    </List>
  );
};

function DayConvert(day: number | null) {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return;
  }
}

const List = styled(Paper)`
  opacity: 0;
  transition:${colorTransition}, ${bgcTransition},flex 250ms linear;
  flex: 1 1 auto;
  margin: 10px 5px;
  padding: 10px;
  min-width: 20%;
  border-radius: 7px;
  background-color: #2e8b57;
`;
const DueDate = styled.div`
  display: flex;
  min-height: 25px;
  align-items: center;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  border: 1px dotted green;
  padding: 1px 2.5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DeleteBtn = styled(IconButton)`
  padding: 3px;
  :hover {
    background-color:#980824!important;
    color: #888888!important;
  }
`;