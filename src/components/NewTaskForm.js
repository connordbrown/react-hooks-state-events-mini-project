import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("Code");

  const categoryOptions = categories.map(category => {
    if (category !== 'All') {
      return <option key={category}>{category}</option>;
    }
  })

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      text: details,
      category: category
    };
    onTaskFormSubmit(formData);

    setDetails("");
    setCategory("All");
  }

  function handleDetailsChange(event) {
    setDetails(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange} value={details} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={category}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
