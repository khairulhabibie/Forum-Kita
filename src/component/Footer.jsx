/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsChatSquareText } from 'react-icons/bs';
import { VscGraph } from 'react-icons/vsc';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import LogOut from './LogOut';

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 px-8 py-2 text-2xl text-white bg-black">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/">
            <BsChatSquareText className="mx-auto" />
            <p>Threads</p>
          </Link>
        </li>
        <li>
          <Link to="/Leaderboards">
            <VscGraph className="mx-auto" />
            <p>Leaderboards</p>
          </Link>
        </li>
        <li>
          <Link to="/Login">
            <IoMdLogIn className="mx-auto" />
            <p>Login</p>
          </Link>
        </li>
        <li>
          <Link to="/Register">
            <IoMdLogOut className="mx-auto" />
            <p>Register</p>
          </Link>
        </li>
        <li>
          <IoMdLogOut className="mx-auto" />
          <LogOut />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
