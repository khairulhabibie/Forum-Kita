import React from 'react';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Navbar from './container/Navbar';
import Footer from './container/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <HomePage />
        <DetailPage />
      </div>
      <Footer />
    </>
  );
}

export default App;
