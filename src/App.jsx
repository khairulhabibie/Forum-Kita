import React from 'react';
import { Routes, Route } from 'react-router';
import ThreadsPage from './pages/ThreadsPage';
import LoginPage from './pages/LoginPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import RegisterPage from './pages/RegisterPage';
// import DetailPage from './pages/DetailPage';
import Navbar from './container/Navbar';
import Footer from './container/Footer';

function App() {
  return (
    <section className=" bg-slate-100">
      <Navbar />
      <div className="w-[800px] bg-white mx-auto mt-14 p-7">
        <Routes>
          <Route path="/" exact element={<ThreadsPage />} />
          <Route path="/Leaderboards" login element={<LeaderboardsPage />} />
          <Route path="/login" login element={<LoginPage />} />
          <Route path="/register" login element={<RegisterPage />} />
        </Routes>
      </div>
      <Footer />
    </section>
  );
}

export default App;
