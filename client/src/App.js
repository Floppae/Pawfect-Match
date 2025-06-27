import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch animals from server running on some port.
  const fetchAnimals = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/api/animals");
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
          {animals.map((animal) => (
            <div key={animal.id} className="flex flex-col items-center">
              <h2 className="">{animal.name}</h2>
              <p className="">{animal.breeds.primary}</p>
              <p className="">
                {animal.age}, {animal.gender}
              </p>
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
