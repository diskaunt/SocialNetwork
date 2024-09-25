import * as React from "react";
import classes from "./Paginator.module.css";
import IconChevronLeft from "./IconChevronLeft";
import IconChevronRight from "./IconChevronRight";

type PropsType = {
  onPageChanged?: (pageNumber: number) => void;
  currentPage?: number;
  totalItemsCount: number;
  pageSize: number;
  portionSize?: number;
  portionNumber?: number;
  setPortionNumber?: React.Dispatch<React.SetStateAction<number>>;
};

const Paginator = ({
  onPageChanged = () => {},
  currentPage = 1,
  totalItemsCount,
  pageSize,
  portionSize = 8,
  portionNumber = 1,
  setPortionNumber = () => {},
}: PropsType) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;

  return (
    <div className={classes.pagesWrapper}>
      <button
        data-testid={portionNumber > 1 ? "chevron" : null}
        className={
          portionNumber > 1
            ? classes.chevronIcons + " " + classes.pages
            : classes.chevronIcons +
              " " +
              classes.pages +
              " " +
              classes.invisability
        }
        onClick={() => {
          setPortionNumber((prev) => prev - 1);
          onPageChanged(rightPortionNumber - portionSize);
        }}
      >
        <IconChevronLeft />
      </button>

      {pagesCount > 1 &&
        pages
          .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
          .map((p) => (
            <button
              key={p}
              data-testid="pageNumber"
              onClick={() => onPageChanged(p)}
              className={
                currentPage === p
                  ? classes.activePage + " " + classes.pages
                  : classes.pages
              }
            >
              {p}
            </button>
          ))}

      <button
        data-testid={portionNumber < portionCount
				? "chevron" : null}
        className={
          portionNumber < portionCount
            ? classes.chevronIcons + " " + classes.pages
            : classes.chevronIcons +
              " " +
              classes.pages +
              " " +
              classes.invisability
        }
        onClick={() => {
          setPortionNumber((prev) => prev + 1);
          onPageChanged(leftPortionNumber + portionSize);
        }}
      >
        <IconChevronRight />
      </button>
    </div>
  );
};

export default Paginator;
