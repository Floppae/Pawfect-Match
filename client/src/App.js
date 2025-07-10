import React, { useEffect, useState } from "react";
import axios from "axios";
// import logo from "./logo.png";
import ScrollToTop from "./ScrollToTop.js";

import Navbar from "./Navbar.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Footer from './Footer.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Required to have multiple pages
// Add 'Link' in brackets when using the other navbar and not the one already built


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
      className="mt-10 p-8 bg-white rounded-lg shadow-lg font-playfair grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
    >
      <input
        className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
        placeholder="🐾 Zip Code *"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        required
      />
      <select
        className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      >
        <option value="dog">🐶 Dog</option>
        <option value="cat">🐱 Cat</option>
      </select>
      <select
        className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
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
        className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">⚧️ Any Gender</option>
        <option value="male">♂️ Male</option>
        <option value="female">♀️ Female</option>
      </select>
      <input
        className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
        placeholder="🦴 Breed (optional)"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-neutral-900 hover:bg-neutral-700 text-white py-3 rounded-md transition"
      >
        Search
      </button>
    </form>
  );
}


/*this piece of code has been change by walter issue: pet picture did not fit well ::::  WALTER

function PetCard({ animal }) {
  const photo = animal?.photos?.[0]?.medium;
  return (
    <article className="bg-white border border-gray-300 rounded-3xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 overflow-hidden flex flex-col h-full">
      {photo && (
        <img
          src={photo}
          alt={animal.name}
          className="w-full h-52 object-cover rounded-t-3xl"
        />
      )}
      *////// this code below is to make pet images fit and it is enclosed by slash sign 
  function PetCard({ animal }) {
  const photo = animal?.photos?.[0]?.medium;
  return (
    <article className="w-80 bg-white border border-gray-200 rounded-3xl shadow-md hover:scale-105 transition duration-300 overflow-hidden flex flex-col h-full">

      {photo && (
        <img
          src={photo}
          alt={animal.name}
          className="w-full h-60 object-cover
          rounded-t-3xl"//w-full h-54
        />
      )}
      
      <div className="flex flex-col flex-grow p-6">
        <h2 className="font-playfair text-2xl font-semibold text-[#4B3B29] mb-2">
          {animal.name}
        </h2>
        <p className="text-gray-700 mb-1 text-sm">
          {animal.breeds.primary} • {animal.age} • {animal.gender}
        </p>
        <p className="text-gray-500 text-xs mb-3 pt-1">
          📍 {animal.contact.address.city}, {animal.contact.address.state}
        </p>
        {animal.distance && (
          <p className="text-gray-500 text-xs mb-4">
            🚗 {animal.distance.toFixed(1)} miles away
          </p>
        )}

        <div className="mt-auto">
          <a
            href={animal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 bg-neutral-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            View on Petfinder
          </a>
        </div>
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
    <main className="min-h-screen bg-[#f5ebe0] font-playfair">
      <section className="relative w-full min-h-[80vh] flex items-center justify-center text-center font-playfair">
        <div className="absolute inset-0">
          <img
            src="https://www.census.gov/newsroom/stories/pet-day/_jcr_content/root/responsivegrid/responsivegrid_1749353263/imagecore.coreimg.jpeg/1680634248356/stories-pet3-1300x867.jpeg" // Replace with your actual image path
            alt="Adoptable pets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 text-white px-6 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Find Your Pawfect Match
          </h1>
          <p className="text-lg sm:text-xl mb-6">
          Connect with adoptable pets from shelters nationwide. 
          Every pet deserves a loving home, and every family deserves 
          the perfect companion.
          </p>
          <a
            href="#search"
            className="inline-block bg-black text-white font-semibold py-3 px-6 rounded-full shadow hover:bg-neutral-700 transition"
          >
            Start Searching
          </a>
        </div>
      </section>

      <div className="px-4">
        <div id="search" className="max-w-6xl mx-auto pb-12 scroll-mt-20">
          <SearchForm onSearch={fetchAnimals} />
        </div>

        <div className="max-w-6xl mx-auto pb-16">
          {loading ? (
            <div className="flex justify-center mt-12">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-neutral-400 border-t-transparent"></div>
            </div>
          ) : (
            <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
              {animals.length === 0 ? (
                <p className="text-center col-span-full text-neutral-600 text-lg">
                  No pets found. Try adjusting your search.
                </p>
              ) : (
                animals.map((animal) => <PetCard key={animal.id} animal={animal} />)
              )}
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

export default function App() {
  // const [animals, setAnimals] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const fetchAnimals = async (params) => {
  //   if (!params) return;
  //   setLoading(true);
  //   try {
  //     const res = await axios.get(
  //       "https://pawfect-match-jvhf.onrender.com/api/animals",
  //       { params }
  //     );
  //     setAnimals(res.data);
  //   } catch (err) {
  //     console.error("Error fetching animals:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {}, []);

  return (
    <Router>
    <ScrollToTop />
    <div className="min-h-screen flex flex-col">
      {/* <header className="bg-white shadow sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-pink-600">🐾 Pawfect Match</h1>
          <img src={logo} alt="logo" className="h-12 w-12 rounded-full border border-pink-200" />

          <nav>
            <Link to="/" className="mr-4 text-pink-600 hover:underline">
              Home
            </Link>
            <Link to="/about" className="mr-4 text-pink-600 hover:underline">
              About
            </Link>
            <Link to="/contact" className="text-pink-600 hover:underline">
              Contact
            </Link>
            </nav>
        </div>
      </header> */}

      {/* Imported Version: */}
      <Navbar />

      {/* <main className="flex-grow max-w-7xl mx-auto px-4 pb-16"> */}
      {/* <Routes>
        <Route path="/" element= {
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
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* </main> */}

      {/* { <footer className="bg-pink-100 text-center py-4 text-sm text-pink-700">
        Made with ❤️ by the Pawfect Match Team
        &copy; 2025 PawMatch. All rights reserved.
      </footer> } */}

      {/* Imported Version: */}
      <Footer />

    </div>
    </Router>
  );
}
