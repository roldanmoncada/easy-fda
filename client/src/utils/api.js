export const searchFoods = (query) => {
  return fetch(
    `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=blRyZDRgqeBVA3sGp7KTJdcUD1U38l754oWn9CbZ&query=${query}`
  );
};
