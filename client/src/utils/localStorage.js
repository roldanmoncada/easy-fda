export const getSavedFoodIds = () => {
  const savedFoodIds = localStorage.getItem("saved_food")
    ? JSON.parse(localStorage.getItem("saved_food"))
    : [];

  return savedFoodIds;
};

export const saveFoodIds = (foodToSave) => {
  // if (foodIdArr.length) {
  if (foodToSave) {
    const savedFoodLSStr = localStorage.getItem("saved_food");
    const savedFoodLS = savedFoodLSStr ? JSON.parse(savedFoodLSStr) : [];
    var existFlag = false;
    // dedup the repeat searched food
    for (let i = 0; i < savedFoodLS.length; i++) {
      const oneFood = savedFoodLS[i];
      if (oneFood.description === foodToSave.description) {
        existFlag = true;
        break;
      }
    }
    if (!existFlag) {
      savedFoodLS.push(foodToSave);
      localStorage.setItem("saved_food", JSON.stringify(savedFoodLS));
    }
  }

  // }
  // else {
  //   localStorage.removeItem("saved_food");
  // }
};

export const removeFoodId = (fdcId) => {
  const savedFoodIds = localStorage.getItem("saved_food")
    ? JSON.parse(localStorage.getItem("saved_food"))
    : null;

  if (!savedFoodIds) {
    return false;
  }

  const updatedSavedFoodIds = savedFoodIds?.filter(
    (savedFoodId) => savedFoodId !== fdcId
  );
  localStorage.setItem("saved_food", JSON.stringify(updatedSavedFoodIds));

  return true;
};
