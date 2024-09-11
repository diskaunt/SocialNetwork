import { MutableRefObject, RefObject, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/redux-store";
import { useParams } from "react-router-dom";

export const useClickOutside = (
  menuRef: any,
  buttonRef: any,
  handler: () => void
) => {
  const handleClick = (e: Event) => {
    if (
     ( Boolean(menuRef.current) &&
      !menuRef.current.contains(e.target)) &&
      !buttonRef?.current.contains(e.target)
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

export const useCloseOnBackModalClick = (
  ref: MutableRefObject<HTMLDialogElement | null>,
  handler: () => void
) => {
  useEffect(() => {
    let modalref = ref.current;
    modalref && modalref.addEventListener("click", closeOnBackDropClick);
    return () => {
      modalref && modalref.addEventListener("click", closeOnBackDropClick);
    };
  }, [ref, handler]);

  function closeOnBackDropClick(e: Event) {
    if (e.target === e.currentTarget) {
      handler();
    }
  }
};

export const useMouseOverLeaveDebounce = (
  ref: any,
  callback: (a: boolean) => void,
  ms: number
) => {
  const debounce = (func: (e: Event) => void, ms: number) => {
    let timer: any;
    return (...args: [Event]) => {
      clearInterval(timer);
      timer = setTimeout(() => func(...args), ms);
    };
  };
  const handle = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(false);
    }
    if (ref.current && ref.current.contains(e.target)) {
      callback(true);
    }
  };

  const debounceFn = debounce(handle, ms);

  useEffect(() => {
    document.addEventListener("mouseover", debounceFn);
    return () => {
      document.removeEventListener("mouseover", debounceFn);
    };
  }, [ref, callback, ms]);
};

export const useGetUserProfile = (
  authId: number | null,
  getUserProfile: (userId: number) => void,
  getUserStatus: (userId: number) => void,
  requestUsers: (
    currentPage: number,
    pageSize: number,
    search?: string,
    friend?: boolean
  ) => void
) => {

	let id: number | null = null;
	const { userId } = useParams();
	if (userId === "me" && authId !== null) {
		id = authId;
	} else if (userId !== "me" && userId) {
		id = +userId;
	}
	
	useEffect(() => {
    if (id !== null) {
      getUserProfile(id);
      getUserStatus(id);
      requestUsers(1, 8, "", true);
    }
  }, [getUserProfile, getUserStatus, id, requestUsers]);
  return id;
};

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();
