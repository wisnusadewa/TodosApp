import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../../Features/Filter/FilterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const filterValue = useSelector((state) => state.filterValue);

  console.log('filterValue?', filterValue.filterValue);

  return (
    <div className="">
      <select value={filterValue.filterValue} onChange={(e) => dispatch(setFilterValue(e.target.value))} className="select select-accent w-full">
        <option value="list_task">List Task</option>
        <option value="progress">Progress</option>
        <option value="completed">Complete</option>
        <option value="alltask">All Task</option>
      </select>
    </div>
  );
};

export default Filter;
