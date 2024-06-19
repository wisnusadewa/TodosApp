import { useState } from 'react';
import { useSelector } from 'react-redux';
import CardDasboardComp from './CardDashboardComp';

const CardListMap = () => {
  const todos = useSelector((state) => state.todos);

  // AKAN MENCARI BERAPA BANYAK TASK, PROGRESS dan COMPLETE
  const listTask = todos.map((todo) => todo.category).filter((e) => e === 'list_task');
  console.log('list_task', listTask.length);

  const progressLabel = todos.map((todo) => todo.category).filter((e) => e === 'progress');
  console.log('progressLabel', progressLabel.length);

  const completeLabel = todos.map((todo) => todo.category).filter((e) => e === 'completed');
  console.log('completeLabel', completeLabel.length);

  const allTask = todos.map((todo) => todo.category);
  console.log('allTask', allTask.length);

  const completePercentage = (completeLabel.length / allTask.length) * 100;

  return (
    <div className=" flex flex-col justify-center items-center w-full gap-10 md:grid md:grid-cols-2 ">
      <CardDasboardComp style="bg-primary" label="List Task" labelLength={listTask.length} />
      <CardDasboardComp style="bg-accent" label="Progress" labelLength={progressLabel.length} />
      <CardDasboardComp style="bg-error" label="Completed" labelLength={completeLabel.length} />
      <CardDasboardComp style="bg-warning " label="All Task" labelLength={allTask.length} />
    </div>
  );
};

export default CardListMap;
