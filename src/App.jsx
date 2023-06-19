import React from 'react';
import { Routes, Route } from 'react-router';
import ThreadsPage from './pages/ThreadsPage';
import LoginPage from './pages/LoginPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import RegisterPage from './pages/RegisterPage';
// import DetailPage from './pages/DetailPage';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <section>
      <Navbar />
      <div className="w-[800px] bg-white mx-auto my-14 p-7">
        <Routes>
          <Route path="/" exact element={<ThreadsPage />} />
          <Route path="/leaderboards" login element={<LeaderboardsPage />} />
          <Route path="/login" login element={<LoginPage />} />
          <Route path="/register" login element={<RegisterPage />} />
          <Route path="/threads/:threadId" login element={<DetailPage />} />
        </Routes>
      </div>
      <Footer />
    </section>
  );
}

export default App;
