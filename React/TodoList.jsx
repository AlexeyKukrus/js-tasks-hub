import { useState } from "react";

/** 
Написать todo лист на react, с функционалом
 - изменения статуса completed/uncompleted, в случае если completed, то элемент перечеркут
 - список итемов
 - инпут с возможностью добавления нового итема
*/

export const TodoList = () => {
  const [currentTask, setCurrentTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentTask.trim()) return;

    const newEvent = {
      id: Date.now(),
      name: currentTask.trim(),
      completed: false,
    };

    setTasksList((prevTasks) => [...prevTasks, newEvent]);
    setCurrentTask("");
  };

  const handleInputChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleComplete = (e) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === e.id ? { ...task, completed: !task.completed } : task
      )
    );
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите"
          value={currentTask}
          onChange={handleInputChange}
        />
      </form>
      <ul>
        {tasksList.map((task) => {
            return <li 
                key={task.id} 
                onClick={() => handleComplete(task)}
                style={{ textDecoration: task.completed ? "line-through" : "none" }}
            >
              {task.name}
            </li>
        })}
      </ul>
    </div>
  );

};
export default TodoList;
