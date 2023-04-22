import React, { useState, useEffect } from "react";
import { throttle } from "lodash";

function ScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const throttledScroll = throttle(() => {
    setScrollPosition(window.scrollY);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [throttledScroll]);

  return (
    <div>
      <p>Current scroll position: {scrollPosition}</p>
    </div>
  );
}

export default ScrollPosition;
