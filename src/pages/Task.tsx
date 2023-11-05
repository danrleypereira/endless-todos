// Task.tsx
import React from "react";
import type { ITaskProps, ITask } from "~/utils/types";
import useLocalStorage from "../utils/hooks/LocalStorage";

const Task: React.FC<ITaskProps> = ({
  task,
  id,
  toggleTaskCompletion,
  handleTaskNameChange,
}) => {
  const [tasks, setTasks] = useLocalStorage({ key: "tasks", initialValue: [] });

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    key: string
  ) => {
    event.preventDefault();
    if (event.key === "Tab") {
      let indexOfBefore: number, subtask: ITask;
      const newTasks = tasks.filter((task, i) => {
        if (task.id === key) {
          indexOfBefore = i - 1;
          subtask = task;
          return false;
        }
        return true;
      });
      console.log({ Task: subtask! });
      newTasks[indexOfBefore!] = {
        ...newTasks[indexOfBefore!],
        subtasks: [subtask!] as ITask[],
      };
      console.log({ newTasks: newTasks });

      setTasks(newTasks);
    }
  };

  return (
    <>
      <div className="flex h-11 w-full min-w-[300px] flex-row items-center">
        <div
          className={`mr-2 h-4 w-4 rounded-full border-2 border-charcoal-600 ${
            task.completed ? "bg-charcoal-700" : "bg-charcoal-600"
          }`}
          aria-label={`Task ${id}`}
          onClick={() => toggleTaskCompletion(id)}
        />
        <label htmlFor={`item${id}`} className="flex-grow">
          <input
            key={id}
            className={`placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full border-none border-charcoal-600 bg-transparent pb-1.5 pt-1.5 font-inter text-sm font-normal outline outline-0 transition-all focus:border-slate-400 focus:outline-0 disabled:border-0 ${
              task.completed && "text-charcoal-600 line-through"
            }`}
            placeholder=""
            onChange={(e) => handleTaskNameChange(id, e)}
            value={task.text}
            onKeyDown={(e) => handleKeyDown(e, task.id)}
          />
        </label>
      </div>
      <div className="ml-3">
        {task.subtasks.map((subtask) => {
          return (
            <Task
              key={subtask.id}
              id={subtask.id}
              task={subtask}
              toggleTaskCompletion={toggleTaskCompletion}
              handleTaskNameChange={handleTaskNameChange}
            />
          );
        })}
      </div>
    </>
  );
};

export default Task;
