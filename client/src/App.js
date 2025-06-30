import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.png";

import Navbar from "./Navbar.js";
import About from "./About.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //Required to have multiple pages

function SearchForm({ onSearch }) {
  const [zipCode, setZipCode] = useState("");
  const [type, setType] = useState("dog");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!zipCode || !type) return;
    onSearch({ zipCode, type, age, gender, breed });
  };

  return (
    <form
      onSubmit={submit}
      className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 p-4 bg-pink-50 rounded-lg shadow-md"
    >
      <input
        className="input"
        placeholder="🐾 Zip Code *"
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
        <option value="dog">🐶 Dog</option>
        <option value="cat">🐱 Cat</option>
      </select>
      <select
        className="input"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      >
        <option value="">🎂 Any Age</option>
        <option value="baby">🍼 Baby</option>
        <option value="young">🧒 Young</option>
        <option value="adult">🧑 Adult</option>
        <option value="senior">👴 Senior</option>
      </select>
      <select
        className="input"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">⚧️ Any Gender</option>
        <option value="male">♂️ Male</option>
        <option value="female">♀️ Female</option>
      </select>
      <input
        className="input"
        placeholder="🦴 Breed (optional)"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <button
        type="submit"
        className="btn bg-pink-400 hover:bg-pink-500 text-white"
      >
        🔍 Search
      </button>
    </form>
  );
}

function PetCard({ animal }) {
  const photo = animal?.photos?.[0]?.medium;
  return (
    <article className="rounded-3xl shadow-lg bg-white overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-200">
      {photo && (
        <img
          src={photo}
          alt={animal.name}
          className="w-full h-48 object-cover rounded-t-3xl"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-pink-600 mb-1">
          🐾 {animal.name}
        </h2>
        <p className="text-sm text-gray-700 mb-2">
          {animal.breeds.primary} • {animal.age} • {animal.gender}
        </p>
        <p className="text-xs text-gray-500 mb-1">
          📍 {animal.contact.address.city}, {animal.contact.address.state}
        </p>
        {animal.distance && (
          <p className="text-xs text-gray-500 mb-4">
            🚗 {animal.distance.toFixed(1)} miles away
          </p>
        )}
        <a
          href={animal.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-center w-full btn bg-yellow-400 hover:bg-yellow-500 text-white"
        >
          View on Petfinder 💖
        </a>
      </div>
    </article>
  );
}

function Home() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAnimals = async (params) => {
    if (!params) return;
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

  useEffect(() => {}, []);

  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 pb-16">
      <SearchForm onSearch={fetchAnimals} />

      {loading ? (
        <div className="flex justify-center mt-12">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-300 border-t-transparent"></div>
        </div>
      ) : (
        <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {animals.length === 0 ? (
            <p className="text-center col-span-full text-gray-600">
              🥺 No pets found. Try adjusting your search.
            </p>
          ) : (
            animals.map((animal) => <PetCard key={animal.id} animal={animal} />)
          )}
        </section>
      )}
    </main>
  );
}

export default function App() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAnimals = async (params) => {
    if (!params) return;
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

  useEffect(() => {}, []);

  return (
    <Router>
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-100 via-rose-100 to-white">
      <header className="bg-white shadow sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-pink-600">🐾 Pawfect Match</h1>
          <img src={logo} alt="logo" className="h-12 w-12 rounded-full border border-pink-200" />

          {/* Nav Links */}
          <nav>
            <Link to="/" className="mr-4 text-pink-600 hover:underline">
              Home
            </Link>
            <Link to="/about" className="text-pink-600 hover:underline">
              About
            </Link>
            </nav>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 pb-16">
      <Routes>
        <Route path="/" element={
                <>
        <SearchForm onSearch={fetchAnimals} />

        {loading ? (
          <div className="flex justify-center mt-12">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-300 border-t-transparent"></div>
          </div>
        ) : (
          <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {animals.length === 0 ? (
              <p className="text-center col-span-full text-gray-600">
                🥺 No pets found. Try adjusting your search.
              </p>
            ) : (
              animals.map((animal) => <PetCard key={animal.id} animal={animal} />)
            )}
          </section>
        )}
        </> } />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>

      <footer className="bg-pink-100 text-center py-4 text-sm text-pink-700">
        Made with ❤️ by the Pawfect Match Team
      </footer>
    </div>
    </Router>
  );
}
