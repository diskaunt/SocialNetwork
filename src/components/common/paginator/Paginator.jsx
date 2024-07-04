import React from "react";
import classes from "./Paginator.module.css";
import { useState } from "react";
import IconChevronLeft from "./IconChevronLeft";
import IconChevronRight from "./IconChevronRight";

const Paginator = ({
  onPageChanged,
  currentPage,
  totalItemsCount,
  pageSize,
  portionSize = 8,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  // let startIndex = currentPage - 3 > 0 ? currentPage - 3 : 1;
  // let endIndex = currentPage + 3 <= pagesCount ? currentPage + 3 : pagesCount;
  // for (let i = startIndex; i <= endIndex; i++) {
  //   pages.push(i);
  // }
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;
  return (
    <div className={classes.pagesWrapper}>
      {portionNumber > 1 && (
        <button
          className={classes.chevronIcons}
          onClick={() => {
            setPortionNumber((prev) => prev - 1);
            onPageChanged(rightPortionNumber - portionSize);
          }}
        >
          <IconChevronLeft />
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p) => (
          <span
            key={p}
            onClick={() => onPageChanged(p)}
            className={currentPage === p ? classes.activePage : classes.pages}
          >
            {p}
          </span>
        ))}
      {portionNumber < portionCount && (
        <button
          className={classes.chevronIcons}
          onClick={() => {
            setPortionNumber((prev) => prev + 1);
            onPageChanged(leftPortionNumber + portionSize);
          }}
        >
          <IconChevronRight />
        </button>
      )}
    </div>
  );
};

export default Paginator;
