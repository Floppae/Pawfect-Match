import React from 'react';

function About() {
  return (
    // <main className="flex-grow max-w-7xl mx-auto px-4 pb-16">
    //   <h1>About Pawfect Match</h1>
    //   <p>About page</p>
    // </main>

    <main classname = "min-h-screen px-4 bg-neutral-100">
      <section classname = "bg-gradient-to-br from-neutral-50 to-neutral-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-playfair">
          <h1 className="text-5xl font-bold text-neutral-900 mb-6">
            About The Pawfect Match
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
          <i>The Pawfect Match</i>, or <i>PawMatch</i> for short, is a platform that allows individuals like you 
          to connect with pets that are looking for a perfect home. Our mission is to use technology 
          to make this process easier and accessible to all.
          </p>
      </div>
      </section>
    </main>
  );
}

export default About;
