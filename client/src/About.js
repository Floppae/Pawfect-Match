import React from 'react';

function About() {
  return (

    <main classname = "min-h-screen px-4 bg-neutral-500">
      <section classname = "bg-gradient-to-br from-neutral-50 to-neutral-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-playfair">
          <h1 className="text-5xl font-bold text-neutral-900 mb-6 pt-10">
            About The Pawfect Match
          </h1>
          <p className="text-xl text-neutral-600 text-black ">
          <i>The Pawfect Match</i>, or <i>PawMatch</i> for short, is a platform that allows individuals like you 
          to connect with pets that are looking for a perfect home. Our mission is to use technology 
          to make this process easier and accessible to all.
          </p>
      </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 font-playfair">
        <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-3xl mb-6 font-playfair font-bold ">
              Our Mission
            </h2>
          <div className="text-neutral-600 text-lg leading-relaxed font-playfair space-y-5 text-grey-50">
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
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4 font-display">
            How It Works
            </h3>
            <p className="text-neutral-600 leading-relaxed">
            Our smooth adoption process makes it easy and stress-free for you to find your perfect pet:
            <li>Browse the thousands of adoptable pets available</li>
            <li>Filter by your preference (i.e. age, trait, breed)</li>
            <li>Find a shelter to go and meet your potential pet</li>
            <li>Get support along the way for a successful adoption</li>
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4 font-display">
              Our Website
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Pets Available</span>
                <span className="font-bold text-neutral-900">10,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Shelters</span>
                <span className="font-bold text-neutral-900">500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Cities</span>
                <span className="font-bold text-neutral-900">50+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Listings Daily</span>
                <span className="font-bold text-neutral-900">1,000+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="px-6 py-12">
          <h2 className="text-3xl text-center font-semibold font-playfair text-neutral-900">
            Our Values
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-l-4 border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold font-playfair text-neutral-900 mb-3">
                Trust
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                We are honest about the backgrounds and needs of our pet, hoping that you can choose the one that is best for you.
              </p>
            </div>

            <div className="bg-white border-l-4 border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold font-playfair text-neutral-900 mb-3">
                Compassion
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                We believe that every animal should be treated with care, kindness, and dignity.
              </p>
            </div>

            <div className="bg-white border-l-4 border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold font-playfair text-neutral-900 mb-3">
                Hope
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                For every pet, you can help them start a new beginning.
              </p>
            </div>
          </div>
        </section>



      </div>


    </main>
  );
}

export default About;
