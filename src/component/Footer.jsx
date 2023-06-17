/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsChatSquareText } from 'react-icons/bs';
import { VscGraph } from 'react-icons/vsc';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import { AiOutlineForm } from 'react-icons/ai';
import LogOut from './LogOut';

function Footer() {
  return (
    <div className="footer">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/">
            <BsChatSquareText className="mx-auto" />
            <p>Threads</p>
          </Link>
        </li>
        <li>
          <Link to="/leaderboards">
            <VscGraph className="mx-auto" />
            <p>Leaderboards</p>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <AiOutlineForm className="mx-auto" />
            <p>Register</p>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <IoMdLogIn className="mx-auto" />
            <p>Login</p>
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
