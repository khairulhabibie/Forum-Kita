/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import ThreadCategory from './ThreadCategory';
import ThreadContent from './ThreadContent';

function ThreadItem({
  title, body, createdAt, user, category,
}) {
  return (
    <div className="mb-5 border-b-2 border-solid">
      <ThreadCategory category={category} />
      <ThreadContent title={title} body={body} createdAt={createdAt} user={user} />
    </div>
  );
}

ThreadItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  // upVotesBy: PropTypes.array.isRequired,
  // downVotesBy: PropTypes.array.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,

};

export default ThreadItem;
