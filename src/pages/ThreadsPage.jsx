/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import ThreadList from '../component/ThreadList';
import Chategory from '../component/Chategory';
import asyncPopulateUserThreadAndLeaderboards from '../state/shared/action';

function ThreadsPage() {
  const {
    threads = ['hello'],
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserThreadAndLeaderboards());
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      <Chategory />
      <div className="my-5">
        {console.log(threads.title)}
        <h3 className="text-2xl font-bold">Disikusi Tersedia</h3>
        {/* <ThreadList thread={threadList} /> */}
      </div>
    </div>
  );
}

export default ThreadsPage;
