import React, { useEffect, useRef, useState } from "react";
import gsap, { TimelineMax } from "gsap";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";

import { TaskStateType } from "../../features/taskmanage/reducer";
import { selectors } from "../../features/counter";
import palette from "../../ui/palette";

interface PropsType {
  data: {
    title: string
    caption: string
  }
}

export default (props: PropsType) => {
  const { data } = props;
  const divEl = useRef(null);
  const [play, setPlay] = useState(true);
  const t = useSelector(selectors.getTheme);

  const tIn = new TimelineMax({ paused: true });
  const tOut = new TimelineMax({ paused: true });

  useEffect(() => {
    const el = divEl.current;
    gsap.set(el, { opacity: 0 });
    tIn.fromTo(el,
      {
        opacity: 0
      },
      {
        opacity: 1, onComplete: () => {
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
      className="task"
      style={{
        backgroundColor: palette.paper[t]
      }}
    >
      <h1>{data.title}</h1>
      <h6>{data.caption}</h6>
    </List>
  );
};


const List = styled.div`
  opacity: 0;

  flex: 1 1 auto;
  margin: 2.5px;
  padding: 2px 5px;
  min-width: 20%;
  border-radius: 7px;
  background-color: #2e8b57;
`;