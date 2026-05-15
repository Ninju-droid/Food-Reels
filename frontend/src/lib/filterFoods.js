export function filterFoods(foods, query) {
  const needle = query.trim().toLowerCase();

  if (!needle) {
    return foods;
  }

  return foods.filter((food) => {
    return [food.name, food.description, food.category, food.location, food.foodPartner?.name]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(needle));
  });
}
