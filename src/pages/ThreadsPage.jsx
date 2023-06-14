/* eslint-disable no-console */
import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import ThreadList from '../component/ThreadList';
// import Chategory from '../component/Chategory';
import { useDispatch, useSelector } from 'react-redux';
import asyncPopulateUserThreadAndLeaderboards from '../state/shared/action';

function ThreadsPage() {
  const dispath = useDispatch();
  const { users } = useSelector((states) => states);
  useEffect(() => {
    dispath(asyncPopulateUserThreadAndLeaderboards());
  }, [dispath]);

  return (
    <div className="min-h-screen">
      {/* <Chategory /> */}
      {console.log(users)}
      <div className="my-5">
        <h3 className="text-2xl font-bold">Disikusi Tersedia</h3>
        {/* <ThreadList thread={threadList} /> */}
      </div>
    </div>
  );
}

export default ThreadsPage;
