/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsReplyAll } from 'react-icons/bs';

function ThreadItem() {
  return (
    <div className="my-3 border-b-2 border-solid">
      <div className="py-2">
        <span className="px-2 py-1 text-sm border-2 border-gray-400 border-solid rounded-md bg-purple-200">ketegori1</span>
        <h4 className="pt-3 text-lg font-bold text-purple-900">Judul</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, dignissimos quos cupiditate quibusdam ducimus perspiciatis! Consequatur vitae ducimus dolorum necessitatibus?</p>
        <div className="py-2 space-x-5 flex">
          <span className="flex items-center space-x-1">
            <AiOutlineLike />
            <p>0</p>
          </span>
          <span className="flex items-center space-x-1">
            <AiOutlineDislike />
            <p>0</p>
          </span>
          <span className="flex items-center">
            <BsReplyAll />
          </span>
          <span className="flex items-center">9 Day Ago</span>
          <span className="flex items-center space-x-1">
            <p>Created by</p>
            <b>khairul habibie</b>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ThreadItem;
