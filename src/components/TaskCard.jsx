import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-orange-800 p-3 rounded-lg mx-5 my-5 text-center font-sans">
      <h1 className="m-3 font-bold text-2xl capitalize text-white">
        {task.title}
      </h1>
      <p className="text-lg text-gray-300">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
