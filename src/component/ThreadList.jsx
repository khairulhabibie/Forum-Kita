import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import PostItem from './ThreadItem';

function ThreadList({ thread }) {
  // eslint-disable-next-line no-console
  console.log(thread);
  return (
    <PostItem />
  );
}

ThreadList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  thread: PropTypes.array.isRequired,
};

export default ThreadList;
