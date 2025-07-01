import React from 'react';

function About() {
  return (
    // <main className="flex-grow max-w-7xl mx-auto px-4 pb-16">
    //   <h1>About Pawfect Match</h1>
    //   <p>About page</p>
    // </main>

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
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

      </div>


    </main>
  );
}

export default About;
