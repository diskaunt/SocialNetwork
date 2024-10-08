import * as React from "react";

function IconUnfollow(props: {[key: string]: any}) {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        d="M8.465 14.121a1 1 0 101.414 1.415l5.657-5.657a1 1 0 10-1.415-1.415l-5.656 5.657z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.343 17.657A8 8 0 1017.657 6.343 8 8 0 006.343 17.657zm9.9-1.414a6 6 0 11-8.486-8.485 6 6 0 018.486 8.485z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default IconUnfollow;