import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // array to hold animal objects holding animal data requested by fetchAnimals()
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);

  // additional state for user input
  // zip code, dog or cat, age of pet, gender
  const [zipCode, setZipCode] = useState("");
  const [distance, setDistance] = useState(null);
  const [type, setType] = useState("dog");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");

  // Fetch animals from server running on some port.
  const fetchAnimals = async () => {
    // API calls were breaking when refreshing without zip code or type since they're required.
    // Function returns immediately if these fields are empty
    if (!zipCode || !type) {
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        "https://pawfect-match-jvhf.onrender.com/api/animals",
        {
          params: {
            type,
            zipCode,
            age,
            gender,
            breed,
          },
        }
      );
      console.log(response);
      setAnimals(response.data);
    } catch (error) {
      console.error("Error fetching animals:", error);
    }
    setLoading(false);
  };

  // run fetchanimals on app startup
  useEffect(() => {
    fetchAnimals();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="font-bold">🐶 Petfinder Animal Data</h1>
      {/* Form for user input. Required: Zip Code and Type */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          fetchAnimals();
        }}
      >
        <input
          type="text"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
          className="border rounded p-2 w-40"
        />
        <input
          type="text"
          placeholder="Within (miles)"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          className="border rounded p-2 w-40"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          className="border rounded p-2 w-40"
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border rounded p-2 w-40"
        >
          <option value="">Any Age</option>
          <option value="baby">Baby</option>
          <option value="young">Young</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </select>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border rounded p-2 w-40"
        >
          <option value="">Any Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="border rounded p-2 w-40"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
          {animals.map((animal) => (
            <div key={animal.id} className="flex flex-col items-center">
              <h2 className="">Name: {animal.name}</h2>
              <p className="">Breed: {animal.breeds.primary}</p>
              <p className="">
                {animal.age}, {animal.gender}
              </p>
              <p>Distance: {animal.distance} miles</p>
              <p>{animal.contact.email}</p>
              {animal.photos[0] && (
                <img
                  src={animal.photos[0].small}
                  alt={animal.name}
                  className="w-40 h-40 object-cover rounded"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
