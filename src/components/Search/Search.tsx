import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setFilterName } from "../../redux/slices/filterSlice";
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
    }, 400),
    [dispatch,debounce]
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
      <input
        ref={inputRef}
        className="search_input"
        placeholder={"Поиск"}
        value={value}
        onChange={onChange}
      />
  );
};

export default Search;
