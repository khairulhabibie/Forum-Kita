import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import ThreadDetail from '../component/ThreadDetail';
import { asyncReceiveThreadDetail } from '../state/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { threadDetail = null } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  });

  if (!threadDetail) {
    return null;
  }

  return (
    <>
      {/* <ThreadDetail /> */}
      {`id yang diterima : ${id}`}
    </>
  );
}

export default DetailPage;
