export const getSavedFoodIds = () => {
  const savedFoodIds = localStorage.getItem("saved_food")
    ? JSON.parse(localStorage.getItem("saved_food"))
    : [];

  return savedFoodIds;
};

export const saveFoodIds = (foodIdArr) => {
  if (foodIdArr.length) {
    localStorage.setItem("saved_food", JSON.stringify(foodIdArr));
  } else {
    localStorage.removeItem("saved_food");
  }
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
