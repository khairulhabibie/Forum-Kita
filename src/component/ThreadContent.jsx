/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsReplyAll } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { postedAt } from '../utils';

function ThreadContent({
  id, title, body, createdAt, user,
}) {
  return (
    <div className="my-2">
      <h4 className="text-lg font-bold text-purple-900">
        {console.log(id)}
        <Link to={`/threads/${id}`}>{title}</Link>
      </h4>
      <p>
        <div
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </p>
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
  id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default ThreadContent;
