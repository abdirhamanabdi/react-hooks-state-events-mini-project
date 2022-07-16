import React,{useState} from "react";

function CategoryFilter({categories, selectedCategoty, changeCategories}) {
  // const handleClick = (categories)=>{
  //   changeCategories()
  // }

  const categoryList = categories.map((cat)=>(
    <button 
    key={cat} 
    onClick={(e)=>changeCategories(cat)}
    className={cat === selectedCategoty ? "selected" : null}
    >
      {cat}
      </button>
  ))


  return ( 
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}

    </div>
  );
}

export default CategoryFilter;