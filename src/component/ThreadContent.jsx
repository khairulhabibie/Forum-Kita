/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsReplyAll } from 'react-icons/bs';
import { postedAt } from '../utils';

function ThreadContent({
  title, body, createdAt, user,
}) {
  return (
    <div className="my-2">
      <h4 className="text-lg font-bold text-purple-900">{title}</h4>
      <p>{body}</p>
      <div className="py-2 space-x-5 flex">
        <span className="flex items-center space-x-1">
          <AiOutlineLike />
          {/* <p>{upVotesBy}</p> */}
        </span>
        <span className="flex items-center space-x-1">
          <AiOutlineDislike />
          {/* <p>{downVotesBy}</p> */}
        </span>
        <span className="flex items-center">
          <BsReplyAll />
        </span>
        <span className="flex items-center">{postedAt(createdAt)}</span>
        <span className="flex items-center space-x-1">
          <p>Created by</p>
          <b>{user.name}</b>
        </span>
      </div>
    </div>
  );
}

ThreadContent.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  // upVotesBy: PropTypes.array.isRequired,
  // downVotesBy: PropTypes.array.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default ThreadContent;
