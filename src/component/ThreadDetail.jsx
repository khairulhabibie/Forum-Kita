import React from 'react';
import { useParams } from 'react-router';

function ThreadDetail() {
  const { id } = useParams();
  return (
    <div>{id}</div>
  );
}

export default ThreadDetail;
