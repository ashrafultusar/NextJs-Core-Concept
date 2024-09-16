// "use client";
// import { useState, useEffect } from "react";

// const Page = () => {
//   const [search, setSearch] = useState("a");  // Default search value
//   const [meals, setMeals] = useState([]);     // State for meals data
//   const [errorMsg, setErrorMsg] = useState(""); // State for error message

//   // Function to load data from API
//   const loadData = async () => {
//     try {
//       const res = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
//       );
//       const data = await res.json();

//       // If no meals are found
//       if (data.meals === null) {
//         setMeals([]);
//         setErrorMsg("No Data Found");
//       } else {
//         setMeals(data.meals);  // Set meals data
//         setErrorMsg("");       // Clear error message
//       }
//     } catch (error) {
//       setErrorMsg("Error fetching data");
//     }
//   };

//   // Handle search input changes
//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   // Fetch data whenever the search term changes
//   useEffect(() => {
//     loadData();
//   }, [search]);

//   return (
//     <div className="p-12">
//       <h1 className="text-3xl font-semibold">Choose Your Meals</h1>
//       <p>Choose meals of your choice by searching....</p>

//       <div className="mt-12">
//         <input
//           onChange={handleSearch}
//           value={search}
//           className="p-4 border-2"
//           type="text"
//           placeholder="Search meals..."
//         />
//         <button onClick={loadData} className="bg-red-400 p-4 ml-2">
//           Search
//         </button>
//       </div>

//       {/* Meals grid */}
//       <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {/* Render meals */}
//         {meals.length > 0 &&
//           meals.map((meal) => (
//               <div key={meal.idMeal} className="border-2 p-4">
//                  <Image src={meal.strMealThumb} alt={meal.strMeal} width={500} height={500} />
//               <h6 className="font-semibold">{meal.strMeal}</h6>
//               <p>{meal.strInstructions.slice(0, 100)}...</p>
//             </div>
//           ))}

//         {/* Show error message if no data is found */}
//         {errorMsg && <h6>{errorMsg}</h6>}
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; // Import the Next.js Image component

const Page = () => {
  const [search, setSearch] = useState("a"); // Default search value
  const [meals, setMeals] = useState([]); // State for meals data
  const [errorMsg, setErrorMsg] = useState(""); // State for error message

  // Function to load data from API
  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();

      // If no meals are found
      if (data.meals === null) {
        setMeals([]);
        setErrorMsg("No Data Found");
      } else {
        setMeals(data.meals); // Set meals data
        setErrorMsg(""); // Clear error message
      }
    } catch (error) {
      setErrorMsg("Error fetching data");
    }
  };

  // Handle search input changes
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Fetch data whenever the search term changes
  useEffect(() => {
    loadData();
  }, [search]);

  return (
    <div className="p-12">
      <h1 className="text-3xl font-semibold">Choose Your Meals</h1>
      <p>Choose meals of your choice by searching....</p>

      <div className="mt-12">
        <input
          onChange={handleSearch}
          value={search}
          className="p-4 border-2"
          type="text"
          placeholder="Search meals..."
        />
        <button onClick={loadData} className="bg-red-400 p-4 ml-2">
          Search
        </button>
      </div>

      {/* Meals grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render meals */}
        {meals.length > 0 &&
          meals.map((meal) => (
            <div key={meal.idMeal} className="border-2 p-4">
              {/* Display the meal image using the strMealThumb property */}
              <Image
                src={meal.strMealThumb} 
                alt={meal.strMeal} 
                width={500}
                height={500}
              />

              <h6 className="font-semibold">{meal.strMeal}</h6>
              <p>{meal.strInstructions.slice(0, 100)}...</p>
            </div>
          ))}

        {/* Show error message if no data is found */}
        {errorMsg && <h6>{errorMsg}</h6>}
      </div>
    </div>
  );
};

export default Page;
