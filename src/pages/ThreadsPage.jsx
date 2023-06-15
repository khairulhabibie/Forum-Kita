/* eslint-disable no-console */
import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import ThreadList from '../component/ThreadList';
// import Chategory from '../component/Chategory';
import asyncPopulateUserThreadAndLeaderboards from '../state/shared/action';

function ThreadsPage() {
  const dispath = useDispatch();
  const { threads = [], users = [], authUser } = useSelector((states) => states);
  useEffect(() => {
    dispath(asyncPopulateUserThreadAndLeaderboards());
  }, [dispath]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser,
  }));
  return (
    <div className="min-h-screen">
      {/* <Chategory /> */}
      <div className="my-5">
        <h3 className="text-2xl font-bold">Disikusi Tersedia</h3>
        <ThreadList threads={threadList} />
      </div>
    </div>
  );
}

export default ThreadsPage;
