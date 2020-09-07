import React, { useEffect, useRef, useState } from "react";
import gsap, { TimelineMax } from "gsap";

import { TaskStateType } from "../../features/taskmanage/reducer";
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
  const tIn = new TimelineMax({ paused: true });
  const tOut = new TimelineMax({ paused: true });

  useEffect(() => {
    const el = divEl.current;
    tIn.fromTo(el,
      { opacity: 0 },
      {
        opacity: 1, onComplete: () => {
          setPlay(false);
        }
      }
    );
    if (play) tIn.play();
  }, []);
  return (
    <div>
      <div
        ref={divEl}
        className="task" >
        <h1>{data.title}</h1>
        <h6>{data.caption}</h6>
      </div>

    </div>
  );
};