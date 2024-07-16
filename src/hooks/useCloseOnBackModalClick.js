import { useEffect } from "react";

const useCloseOnBackModalClick = (ref, handler) => {
  useEffect(() => {
    ref.current && ref.current.addEventListener("click", closeOnBackDropClick);
    return () => {
      ref.current && ref.current.addEventListener("click", closeOnBackDropClick);
    };
  },[ref, handler]);

  function closeOnBackDropClick(e) {
    if (e.target === e.currentTarget) {
      handler();
    }
  }
};

export default useCloseOnBackModalClick
