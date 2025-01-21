import { useEffect, useState } from "react";

// Integrating external API
const URL = "https://www.themealdb.com/api/json/v1/1/search.php";

export default function SearchBar({ fooddata, setFoodData }) {
  // Using state variable query to store the value entered by the user in the search input field (<input>).
  const [query, setQuery] = useState("");

  /**
   * useEffect() is a hook that is used in an application when we need to interact with external systems or APIs.
   * useEffect() is used to fetch the data from external APIs.
   * It has two parameters: one is a callback function that handles the fetching of the data and
   * the other parameter is a dependency array that operates on the state variable. As many times as the state variable
   * changes, the callback function will be called to fetch the data.
   * Syntax of useEffect hook:
   * useEffect(() => {}, []);
   */
  useEffect(() => {
    async function fetchFood() {
      if (query.trim() === "") return; // Prevent API call for empty query

      // Making the function async to handle asynchronous behavior
      const res = await fetch(`${URL}?s=${query}`); // Corrected URL format
      const data = await res.json(); // Convert the data into JSON format
      console.log(data.meals); // Log data only after successful processing
      setFoodData(data.meals || []); // Setting up the food data or defaulting to an empty array
    }
    fetchFood();
  }, [query]);

  return (
    <div>
      <input
        value={query}
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
