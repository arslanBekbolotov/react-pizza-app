import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {setFilterName} from "../../redux/slices/filterSlice";
import './Search.css';

const Search = () => {
    const searchValue = useSelector((state:RootState) => state.filter.searchValue);
    const dispatch  = useDispatch();

    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(setFilterName(e.target.value));
    }

    return (
        <>
            <img
                className="search_icon search_find__icon"
                src="https://cdn-icons-png.flaticon.com/128/3641/3641364.png"
                alt="find"
            />
            <input
                className="search_input"
                placeholder={"Поиск"}
                value={searchValue}
                onChange={onChange}
            />
            {searchValue && <img
                className="search_icon search_close__icon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hLUgF6EDV_p_XQtU4VUjykSw6SAbXtjMI0scd2qY7w&s"
                alt="close"
                onClick={()=> dispatch(setFilterName(''))}
            />}
        </>
    );
};

export default Search;