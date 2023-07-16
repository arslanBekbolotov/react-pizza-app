import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setFilterName } from "../../redux/slices/filterSlice";
import "./Search.css";
import { debounce } from "lodash";

const Search = () => {
  const searchValue = useSelector(
    (state: RootState) => state.filter.searchValue,
  );
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setFilterName(str));
    }, 300),
    [],
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const onClick = () => {
    dispatch(setFilterName(""));
    setValue("");
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <img
        className="search_icon search_find__icon"
        src="https://cdn-icons-png.flaticon.com/128/3641/3641364.png"
        alt="find"
      />
      <input
        ref={inputRef}
        className="search_input"
        placeholder={"Поиск"}
        value={value}
        onChange={onChange}
      />
      {searchValue && (
        <img
          className="search_icon search_close__icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hLUgF6EDV_p_XQtU4VUjykSw6SAbXtjMI0scd2qY7w&s"
          alt="close"
          onClick={() => onClick()}
        />
      )}
    </>
  );
};

export default Search;
