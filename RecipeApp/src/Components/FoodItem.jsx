export default function FoodItem({ food }) {
  //accepting props
  return (
    <div>
      <img src={food.strMealThumb} alt="" />
      <h1>{food.strMealThumb}</h1>
      <button>View Recipe</button>
    </div>
  );
}
