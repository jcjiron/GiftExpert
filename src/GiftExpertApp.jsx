import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GiftGrid } from "./GiftGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory setCategories={setCategories}/>

        {categories.map((category)=>(
        <GiftGrid key={category} category={category}/>
      ))}
    </>
  );
};
