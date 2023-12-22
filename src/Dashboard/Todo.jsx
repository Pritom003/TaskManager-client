import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDrag, useDrop } from 'react-dnd';
import useAuth from '../Hooks/UseAuth';
import useAxios from '../Hooks/UseAxios';

const Todo = () => {
  const { user } = useAuth();
  const axiospublic = useAxios();
  const { data: Alltask = [], isLoading, refetch } = useQuery({
    queryKey: ['verrrifieddata'],
    queryFn: async () => {
      try {
        const res = await axiospublic.get(`/alltask`);
        return res.data;
      } catch (error) {
        console.error('Error fetching properties:', error);
        throw error;
      }
    },
  });


  const [tasks, setTasks] = useState(Alltask);

  
  const [completedTasks, setCompletedTasks] = useState([]);

  const moveTask = (dragIndex, hoverIndex) => {
    const draggedTask = tasks[dragIndex];
    const updatedTasks = [...tasks];
    updatedTasks.splice(dragIndex, 1);
    updatedTasks.splice(hoverIndex, 0, draggedTask);

    setTasks(updatedTasks);
  };

  const [, dropTodo] = useDrop({
    accept: 'TASK',
    drop: (item) => handleTaskDrop(item),
  });

  const [, dropCompleted] = useDrop({
    accept: 'TASK',
    drop: (item) => handleCompletedTaskDrop(item),
  });

  const handleTaskDrop = (task) => {
  
    const updatedTask = { ...task, status: task.status === 'completed' ? 'pending' : 'completed' };


    setTasks((prevTasks) => prevTasks.map((t) => (t._id === task._id ? updatedTask : t)));

    
    if (updatedTask.status === 'completed') {
      setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, updatedTask]);
    } else {
 
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks.filter((t) => t._id !== task._id)
      );
    }


    refetch();
  };

  const handleCompletedTaskDrop = (item) => {
    const { completedTask } = item;

    setCompletedTasks((prevCompletedTasks) =>
      prevCompletedTasks.filter((t) => t._id !== completedTask._id)
    );

   
    refetch();
  };

  return (
    <div>
      <div className="">
        <h1></h1>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-2xl font-bold border-b-8 border-b-yellow-800 text-center text-yellow-900">
                  Todo list
                </th>
              </tr>
            </thead>
            <tbody ref={dropTodo}>
              {/* Todo list */}
              {tasks.map((data, index) => (
                <Task key={index} index={index} data={data} moveTask={moveTask} />
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div>
            <h1 className="text-2xl font-bold border-b-8 border-b-green-600 text-center text-green-700">
              Completed Task's list
            </h1>
          </div>
          <div ref={dropCompleted} className="completed-tasks-container">
            {/* Completed tasks */}
            {completedTasks.map((completedTask, index) => (
              <CompletedTask key={index} completedTask={completedTask} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Task = ({ data, index, moveTask }) => {
  const [, drag] = useDrag({
    type: 'TASK',
    item: { index, task: data },
  });

  const [, drop] = useDrop({
    accept: 'TASK',
    hover: (item) => {
      if (item.index !== index) {
        moveTask(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <tr ref={(node) => drag(drop(node))} className="bg-base-200">
      <td>{data.title}</td>
    </tr>
  );
};

const CompletedTask = ({ completedTask }) => {
  const [, drag] = useDrag({
    type: 'TASK',
    item: { completedTask },
  });

  return (
    <div ref={drag} className="bg-green-300 p-2 m-2">
      {completedTask.title}
    </div>
  );
};

export default Todo;
