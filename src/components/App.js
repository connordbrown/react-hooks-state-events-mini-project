import React, { useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDelete(taskToDelete) {
    const allTasks = tasks.filter(task => {
      return task.text !== taskToDelete;
    })
    setTasks(allTasks);
  } 

  function handleCategoryChange(chosenCategory) {
    setSelectedCategory(chosenCategory);
  }

  function addNewTask(newTask) {
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks);
  }

  const tasksToDisplay = tasks.filter(task => {
    if (selectedCategory === "All") return true;
  
    else return (task.category === selectedCategory); 
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addNewTask} />
      <TaskList tasks={tasksToDisplay} onDelete={handleDelete} />
    </div>
  );
}

export default App;
