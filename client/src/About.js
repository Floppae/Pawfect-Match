import React from 'react';
import { Link } from "react-router-dom";

function About() {
  return (

    <main className = "min-h-screen px-4 bg-[#f5ebe0] font-playfair relative">
      <section classname = "w-full bg-gradient-to-br from-neutral-50 to-neutral-100 py-20">
      <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl font-bold mb-6 pt-10">
            About The Pawfect Match
          </h1>
          <p className="text-xl px-20 text-neutral-700 text-black leading-relaxed">
          <i>The Pawfect Match</i>, or <i>PawMatch</i> for short, is a platform that allows individuals like you 
          to connect with pets that are looking for a perfect home. Our mission is to use technology 
          to make this process easier and accessible to all.
          </p>
      </div>
      </section>

      <div className="w-full px-1 py-10 space-y-16 max-w-6xl mx-auto">
        <div className="bg-white p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl mb-6 font-playfair font-bold "> Our Mission </h2>
          <div className="text-neutral-600 text-lg/8 leading-relaxed font-playfair space-y-5 text-grey-50 ">
            <p>
            Every year, while millions of healthy pets are placed in shelters across the country, there are many potential 
            adopters who would like to get a pet but don't know where to start the process. Every person deserves their pet 
            companion, and we hope to make the process of adopting a pet simpler by allowing you to match with a pet based on your preferences.
            </p>
            <p>
            This platform was built in an effort to close the gap in the process by making adoption a straightforward procedure. By connecting with 
            shelters nationwide, we hope to match pets with their owners while reducing pet homelessness.
            </p>
          </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4 font-playfair"> How It Works </h3>
            <p className="text-neutral-600 leading-relaxed text-lg/10">
            Our smooth adoption process makes it easy and stress-free for you to find your perfect pet:</p>
            <ul className="list-disc list-inside text-lg/10 space-y-2 text-neutral-600">
            <li>Browse the thousands of adoptable pets available</li>
            <li>Filter by your preference (i.e. age, zip code, breed)</li>
            <li>Find a shelter near you to meet your potential pet</li>
            <li>Receive support along the way for a successful adoption</li>
            </ul>
            
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4 font-playfair"> Our Website </h3>
            <div className="space-y-4 text-lg/10">
              <div className="flex justify-between ">
                <span className="text-neutral-600">Pets Available</span>
                <span className="font-bold text-neutral-700">1,000+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Shelters</span>
                <span className="font-bold text-neutral-700">500+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Cities</span>
                <span className="font-bold text-neutral-700">50+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Listings Daily</span>
                <span className="font-bold text-neutral-700">1,000+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="px-1 py-10">
          <h2 className="text-3xl text-center font-semibold font-playfair text-neutral-900"> Our Values </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white border-l-4 border-neutral-800 rounded-lg p-6 shadow">
              <h3 className="text-2xl font-semibold font-playfair text-neutral-900 mb-3">
                Trust
              </h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                We are honest about the backgrounds and needs of our pet, hoping that you can choose the one that is best for you.
              </p>
            </div>

            <div className="bg-white border-l-4 border-neutral-800 rounded-lg p-6 shadow">
              <h3 className="text-2xl font-semibold font-playfair text-neutral-900 mb-3">
                Compassion
              </h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                We believe that every animal should be treated with care, kindness, and dignity.
              </p>
            </div>

            <div className="bg-white border-l-4 border-neutral-800 rounded-lg p-6 shadow">
              <h3 className="text-2xl font-semibold font-playfair text-neutral-900 mb-3">
                Hope
              </h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                For every pet, you can help them start a new beginning.
              </p>
            </div>
          </div>
        </section>

        <div className="p-10 rounded-lg shadow bg-gradient-to-r from-neutral-800 to-neutral-900 text-white text-center">
          <h3 className="text-3xl font-bold mb-4 font-playfair">
            Are You Ready to Begin Your Journey With Us?
          </h3>
          <p className="mb-6 text-neutral-200 text-lg">
            Join us here on The Pawfect Match to find your perfect companion.
          </p>
          <Link to="/">
            <button className="bg-white text-neutral-900 py-2 px-6 rounded hover:bg-neutral-300 transition">
              Begin Your Search
            </button>
          </Link>
        </div>



      </div>


    </main>
  );
}

export default About;
