/* eslint-disable max-len */
import React from 'react';

function ThreadsPage() {
  return (
    <div className="min-h-screen">
      <div>
        <h5 className="font-bold">Kategori Poluler</h5>
        <div className="py-2 space-x-3">
          <span className="px-2 py-1 text-sm border-2 border-gray-400 border-solid rounded-md">ketegori1</span>
          <span className="px-2 py-1 text-sm border-2 border-gray-400 border-solid rounded-md">ketegori1</span>
          <span className="px-2 py-1 text-sm border-2 border-gray-400 border-solid rounded-md">ketegori1</span>
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-2xl font-bold">Disikusi Tersedia</h3>
        <div className="my-3 border-b-2 border-solid">
          <div className="py-2">
            <span className="px-2 py-1 text-sm border-2 border-gray-400 border-solid rounded-md">ketegori1</span>
            <h4 className="py-2 text-lg font-bold">Judul</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, dignissimos quos cupiditate quibusdam ducimus perspiciatis! Consequatur vitae ducimus dolorum necessitatibus?</p>
            <div className="py-2 space-x-3">
              <span>like</span>
              <span>dislike</span>
              <span>balas</span>
              <span>timepost</span>
              <span>created by ....</span>
            </div>
          </div>
        </div>
        <div className="my-3 border-b-2 border-solid">
          <div className="py-2">
            <span className="px-2 py-1 text-sm border-2 border-gray-400 border-solid rounded-md">ketegori1</span>
            <h4 className="py-2 text-lg font-bold">Judul</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, dignissimos quos cupiditate quibusdam ducimus perspiciatis! Consequatur vitae ducimus dolorum necessitatibus?</p>
            <div className="py-2 space-x-3">
              <span>like</span>
              <span>dislike</span>
              <span>balas</span>
              <span>timepost</span>
              <span>created by ....</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreadsPage;
