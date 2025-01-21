import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
function App() {
  const [fooddata, setFoodData] = useState(
    []
  ); /*we are making state variable for food data inn App beacause by doing this we can pass our data anywhere in the page*/

  return (
    <div className="App">
      <Nav />
      <SearchBar fooddata={fooddata} setFoodData={setFoodData} />{" "}
      <FoodList fooddata={fooddata} />{" "}
      {/**Here we are using FoodList component for  the result and FoodList need fooddata so we have to pass fooddata as props */}
    </div>
  );
}

export default App;
