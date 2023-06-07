import React from 'react';
import PostList from '../component/PostList';
import Chategory from '../component/Chategory';

function ThreadsPage() {
  return (
    <div className="min-h-screen">
      <Chategory />
      <div className="my-5">
        <h3 className="text-2xl font-bold">Disikusi Tersedia</h3>
        <PostList />
        <PostList />
        <PostList />
        <PostList />
        <PostList />
      </div>
    </div>
  );
}

export default ThreadsPage;
