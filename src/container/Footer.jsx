import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 px-8 py-2 text-2xl text-white bg-black">
      <ul className="flex justify-center space-x-6">
        <li><Link to="/">Threads</Link></li>
        <li><Link to="/Leaderboards">Leaderboards</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Register">Register</Link></li>
      </ul>
    </div>
  );
}

export default Footer;
