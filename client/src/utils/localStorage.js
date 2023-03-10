export const getSavedFoodIds = () => {
  const savedFoodIds = localStorage.getItem("saved_food")
    ? JSON.parse(localStorage.getItem("saved_food"))
    : [];

  return savedFoodIds;
};

export const saveFoodIds = (foodToSave) => {
  if (foodToSave) {
    const savedFoodLSStr = localStorage.getItem("saved_food");
    const savedFoodLS = savedFoodLSStr ? JSON.parse(savedFoodLSStr) : [];

    // check if the food item is already saved
    const isFoodAlreadySaved = savedFoodLS.some(
      (savedFood) => savedFood.fdcId === foodToSave.fdcId
    );

    if (!isFoodAlreadySaved) {
      // add a unique id to the food item object
      const foodWithId = {
        ...foodToSave,
        id: new Date().getTime(), // use timestamp as the id
      };
      savedFoodLS.push(foodWithId);
      localStorage.setItem("saved_food", JSON.stringify(savedFoodLS));
    }
  }
};

export const removeFoodId = (id) => {
  const savedFood = localStorage.getItem("saved_food")
    ? JSON.parse(localStorage.getItem("saved_food"))
    : null;

  if (!savedFood) {
    return false;
  }

  const updatedSavedFood = savedFood.filter((food) => food.id !== id);
  localStorage.setItem("saved_food", JSON.stringify(updatedSavedFood));

  // remove the card element from the UI
  const card = document.querySelector(`[data-id="${id}"]`);
  if (card) {
    card.remove();
  }

  return true;
};


// export const saveFoodIds = (foodToSave) => {
//   // if (foodIdArr.length) {
//   if (foodToSave) {
//     const savedFoodLSStr = localStorage.getItem("saved_food");
//     const savedFoodLS = savedFoodLSStr ? JSON.parse(savedFoodLSStr) : [];
//     var existFlag = false;
//     // dedup the repeat searched food
//     for (let i = 0; i < savedFoodLS.length; i++) {
//       const oneFood = savedFoodLS[i];
//       if (oneFood.description === foodToSave.description) {
//         existFlag = true;
//         break;
//       }
//     }
//     if (!existFlag) {
//       savedFoodLS.push(foodToSave);
//       localStorage.setItem("saved_food", JSON.stringify(savedFoodLS));
//     }
//   }

//   // }
//   // else {
//   //   localStorage.removeItem("saved_food");
//   // }
// };

// export const removeFoodId = (fdcId) => {
//   const savedFoodIds = localStorage.getItem("saved_food")
//     ? JSON.parse(localStorage.getItem("saved_food"))
//     : null;

//   if (!savedFoodIds) {
//     return false;
//   }

//   const updatedSavedFoodIds = savedFoodIds?.filter(
//     (savedFoodId) => savedFoodId !== fdcId
//   );
//   localStorage.setItem("saved_food", JSON.stringify(updatedSavedFoodIds));

//   return true;
// };
