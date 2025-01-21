import { useEffect, useState } from "react";

//Integrating external api
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "e7160d442d1e4f54bcd6c653a4dda4c9";

export default function SearchBar() {
  //Using state variable  query state variable stores the value entered by the user in the search input field (<input>).
  const [query, setQuery] = useState("");
  /**useEffect() is a hook that is used in a application when we need to interect with the external systems or apis
   * useEffect() is used to fectch the data from the external Apis
   * It has two parameters one is call back function that handles the feching of the data and
   * other parameter is dependancy array that operates on the state variable as many times the state variable 
   * changes the ;callback function will be called to fetch the data 
   * Sysntax of useEffect hook
     useEffect(()=>{},[]);
   */
  useEffect(() => {
    async function fetchFood() {
      // Making func async to prevent the async behaviour of the function
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`); // Here using await because HTTP request will take time to process data
      const data = await res.json(); // Here first converting the data into the json format and using await to prevent async behaviour
      console.log(data.results); // This line of code only be execute when the above two await line of code is execute succesfully
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
