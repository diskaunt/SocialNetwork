import {
  MutableRefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/redux-store';
import { useParams } from 'react-router-dom';

export const useClickOutside = (
  menuRef: any,
  buttonRef: any,
  handler: () => void
) => {
  const handleClick = (e: Event) => {
    if (
      Boolean(menuRef.current) &&
      !menuRef.current.contains(e.target) &&
      !buttonRef?.current.contains(e.target)
    ) {
      handler();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [menuRef, buttonRef, handler]);
};

export const useCloseOnBackModalClick = (
  ref: MutableRefObject<HTMLDialogElement | null>,
  handler: () => void
) => {
  useEffect(() => {
    let modalref = ref.current;
    modalref && modalref.addEventListener('click', closeOnBackDropClick);
    return () => {
      modalref && modalref.addEventListener('click', closeOnBackDropClick);
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
    document.addEventListener('mouseover', debounceFn);
    return () => {
      document.removeEventListener('mouseover', debounceFn);
    };
  }, [ref, callback, ms]);
};

export const useTrottle = (
  func: () => void,
  search: [string],
  delay: number
) => {
  let lastCall = useRef(Date.now());
  let searchCall = useRef(search);
  useEffect(() => {
    const handler = setTimeout(() => {
      const now = Date.now();
      if (now - lastCall.current >= delay && searchCall.current !== search) {
        lastCall.current = now;
        searchCall.current = search;
        func();
      }
    }, delay - (Date.now() - lastCall.current));

    return () => clearTimeout(handler);
  }, [delay, ...search]);
};

export const useGetUserProfile = (
  authId: number | null,
  getUserProfile: (userId: number) => void,
  getUserStatus: (userId: number) => void,
  requestUsers: ({
    currentPage,
    pageSize,
    search,
    friend,
  }: {
    currentPage: number;
    pageSize: number;
    search?: string;
    friend?: boolean;
  }) => void
) => {
  let id: number | null = null;
  const { userId } = useParams();
  if (userId === 'me' && authId !== null) {
    id = authId;
  } else if (userId !== 'me' && userId) {
    id = +userId;
  }

  useEffect(() => {
    if (id !== null) {
      getUserProfile(id);
      getUserStatus(id);
      requestUsers({ currentPage: 1, pageSize: 8, search: '', friend: true });
    }
  }, [getUserProfile, getUserStatus, id, requestUsers]);
  return id;
};

export const useResizeTextarea = (
  textarea: HTMLTextAreaElement | null,
  validlength: number = 200,
  enterTern: boolean = false,
  height: number = 40
) => {
  useEffect(() => {
    let enterDisabled = (e: KeyboardEvent) => {
      if (enterTern && e.key === 'Enter') {
        e.preventDefault();
      }
    };
    if (textarea) {
      textarea.style.height = height + 'px';
      textarea.addEventListener('keydown', enterDisabled);
      if (textarea.scrollHeight < height + 13) {
        textarea.style.height = height + 'px';
      }
      if (textarea.scrollHeight > validlength) {
        textarea.style.overflow = 'auto';
        textarea.style.height = validlength + 'px';
      } else {
        textarea.style.overflow = 'hidden';
        textarea.style.height = textarea.scrollHeight + 'px';
      }
      return textarea.removeEventListener('keypress', enterDisabled);
    }
  }, [textarea?.value]);
};

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();
