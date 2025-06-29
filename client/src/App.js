import React, { useEffect, useState } from "react";
import axios from "axios";

/******************************
 * SearchForm Component
 * Handles all user inputs and
 * triggers the onSearch callback
 ******************************/
function SearchForm({ onSearch }) {
  const [zipCode, setZipCode] = useState("");
  const [type, setType] = useState("dog");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!zipCode || !type) return; // required fields guard
    onSearch({ zipCode, type, age, gender, breed });
  };

  return (
    <form
      onSubmit={submit}
      className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
    >
      <input
        className="input"
        placeholder="Zip Code *"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        required
      />
      <select
        className="input"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      >
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
      <select
        className="input"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      >
        <option value="">Any Age</option>
        <option value="baby">Baby</option>
        <option value="young">Young</option>
        <option value="adult">Adult</option>
        <option value="senior">Senior</option>
      </select>
      <select
        className="input"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Any Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input
        className="input"
        placeholder="Breed (optional)"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <button
        type="submit"
        className="btn bg-blue-600 hover:bg-blue-700 text-white ">
        Search
      </button>
    </form>
  );
}

/******************************
 * PetCard Component
 * Displays individual animal
 ******************************/
function PetCard({ animal }) {
  const photo = animal?.photos?.[0]?.medium;
  return (
    <article className="rounded-xl shadow-lg bg-white overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition duration-200">
      {photo && (
        <img
          src={photo}
          alt={animal.name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{animal.name}</h2>
        <p className="text-sm text-gray-600 mb-2">
          {animal.breeds.primary} • {animal.age} • {animal.gender}
        </p>
        <p className="text-xs text-gray-500 mb-2">
          {animal.contact.address.city}, {" "}
          {animal.contact.address.state}
        </p>
        {animal.distance && (
          <p className="text-xs text-gray-500 mb-4">
            {animal.distance.toFixed(1)} miles away
          </p>
        )}
        <a
          href={animal.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-center w-full btn bg-pink-500 hover:bg-pink-600 text-white"
        >
          View on Petfinder
        </a>
      </div>
    </article>
  );
}

/******************************
 * Main App Component
 ******************************/
export default function App() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAnimals = async (params) => {
    if (!params) return; // guard for initial render
    setLoading(true);
    try {
      const res = await axios.get(
        "https://pawfect-match-jvhf.onrender.com/api/animals",
        { params }
      );
      setAnimals(res.data);
    } catch (err) {
      console.error("Error fetching animals:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Optionally perform an initial fetch with default params
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">🐾 Pawfect Match</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 pb-16">
        {/* Search Form */}
        <SearchForm onSearch={fetchAnimals} />

        {/* Results */}
        {loading ? (
          <div className="flex justify-center mt-10">
            <svg
              className="animate-spin h-10 w-10 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
              ></path>
            </svg>
          </div>
        ) : (
          <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {animals.length === 0 ? (
              <p className="text-center col-span-full text-gray-600">
                No pets found. Try adjusting your search.
              </p>
            ) : (
              animals.map((animal) => <PetCard key={animal.id} animal={animal} />)
            )}
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        Made with ❤️ by Pawfect Match Team
      </footer>
    </div>
  );
}

/******************************
 * Tailwind helper classes
 * (You can move these to a separate CSS file if preferred)
 ******************************/
/** @type {import("tailwindcss").Plugin} */
export const tailwindHelpers = {
  ".input":
    "border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400",
  ".btn":
    "rounded px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
};

