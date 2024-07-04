import React, { useEffect } from "react";

const useMouseLeaveOutside = (ref, callback, ms) => {
  const throttle = (func, ms) => {
    let timer;
    return (...args) => {
      clearInterval(timer);
      timer = setTimeout(() => func(...args), ms);
    };
  };
  const handleLeave = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

	const throttleFn = throttle(handleLeave, ms)

  useEffect(() => {
    document.addEventListener("mouseover", throttleFn);
    return () => {
      document.removeEventListener("mouseover",throttleFn);
    };
  });
};

export default useMouseLeaveOutside;
