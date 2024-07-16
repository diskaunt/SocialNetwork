import React, { useEffect } from "react";

const useMouseOverLeaveDebounce = (ref, callback, ms) => {
  const debounce = (func, ms) => {
    let timer;
    return (...args) => {
      clearInterval(timer);
      timer = setTimeout(() => func(...args), ms);
    };
  };
  const handle = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(false);
    }
		if (ref.current && ref.current.contains(e.target)) {
			callback(true)
		}
  };

  const debounceFn = debounce(handle, ms);

  useEffect(() => {
    document.addEventListener("mouseover", debounceFn);
    return () => {
      document.removeEventListener("mouseover", debounceFn);
    };
  },[ref, callback, ms]);
};

export default useMouseOverLeaveDebounce;
