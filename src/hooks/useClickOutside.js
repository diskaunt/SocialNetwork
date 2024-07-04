import React, { useEffect } from "react";

const useClickOutside = (menuRef, buttonRef, handler) => {
  const handleClick = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      !buttonRef.current.contains(e.target)
    ) {
      handler();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [menuRef, buttonRef, handler]);
};

export default useClickOutside;
