import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("ALL");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleLiClick (foodId) {
    let newFoodArray = foods.map(food => {
      if (food.id === foodId) {
        food.heatLevel += 1;
        return food;
      } else {
        return food;
      };
    });
    setFoods(newFoodArray);
  }

  function handleChange (e) {
    setFilterBy(e.target.value);

  };

  const foodsToDisplay = foods.filter(food => {
    if (filterBy === 'ALL') {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });


  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select onChange={handleChange} name="filter">
        <option value="ALL">ALL</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="MexicanL">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
