import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../Features/Search/SearchSlice';

const SearchBar = () => {
  // const searchValue = useSelector((state) => state.searchValue);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(value));
  };

  return (
    <div className="mb-2 ">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-2">
          <div className="w-full">
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Search todos..." className="w-full rounded-lg input input-accent" />
          </div>
          <div>
            <button className="btn btn-outline btn-accent hover:text-black hover:bg-accent" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
