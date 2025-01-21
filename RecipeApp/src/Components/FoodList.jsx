import FoodItem from "./FoodItem";

export default function FoodList({ fooddata }) {
  //Accepting fooddata as props
  return (
    <div>
      {/*Here we are passing the fooddata var to the SearchBar so that we can make use of it there  */}
      {fooddata.map((food) => (
        <FoodItem key={food.idMeal} food={food} />
      ))}
    </div>
  );
}
