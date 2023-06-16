/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

function ThreadList({ threads }) {
  return (
    <div>
      {console.log(threads)}
      {threads.map((thread) => (<ThreadItem key={thread.id} {...thread} />))}
    </div>
  );
}

ThreadList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  threads: PropTypes.array.isRequired,
};

export default ThreadList;
