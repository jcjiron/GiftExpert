import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const changeValue = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    setCategories((categories) => {
      if (!categories.includes(inputValue)) return [inputValue, ...categories];
      return [...categories];
    });
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="category"
        value={inputValue}
        onChange={changeValue}
      />
    </form>
  );
};
