import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Main from './sections/Main';
import Footer from './sections/Footer';

function App() {
  return (
    <div class="bg-gray-100 subpixel-antialiased text-gray-400">
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
