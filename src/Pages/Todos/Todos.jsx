import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardListMap from '../../Components/Dashboard/CardDashboardMap';
import Filter from '../../Components/Filter/Filter';
import SearchBar from '../../Components/SearchBar/SearchBar';
import AddTodo from '../../Components/Todos/AddTodo';
import TodoListMap from '../../Components/Todos/TodoListMap';

const Todos = () => {
  return (
    <div className="flex flex-col w-full text-white h-full">
      {/* TODOS NAME APP */}
      <div className="flex justify-center items-center my-10">
        <h1 className="text-3xl">Todos APP</h1>
      </div>

      {/* DASHBOARD CARD */}
      <div className="mb-10 w-full ">
        <CardListMap />
      </div>

      {/* SEARCH BAR DAN FILTER */}
      <div className="flex flex-col mb-10 mx-5">
        <SearchBar />
        <Filter />
      </div>

      {/* BUTTON dan MODAL TODO */}
      <div className="mb-10 mx-5">
        <AddTodo />
      </div>

      {/* CARD TODOLIST */}
      <div className="mx-5">
        {/* NILAI SEARCH AKAN DI LEMPAR KE SINI */}
        <TodoListMap />
      </div>
    </div>
  );
};

export default Todos;
