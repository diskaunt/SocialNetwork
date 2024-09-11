import React, { useRef } from "react";
import classes from "./Search.module.css";
import IconSearch from "../../../assets/svg/IconSearch";

type PropsType = {
  search: string;
  setSearchValue: (value: string) => void;
};

const Search = ({ search, setSearchValue }: PropsType) => {
  const searchRef = useRef(null);
  return (
    <div className={classes.searchContainer}>
      <div className={classes.inputWrapper}>
        <input
          ref={searchRef}
          type="text"
          value={search}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <div className={classes.buttonWrapper}>
        <button onClick={(e) => {}}>
          <IconSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
