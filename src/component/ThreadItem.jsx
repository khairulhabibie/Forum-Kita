/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsReplyAll } from 'react-icons/bs';
import { postedAt } from '../utils';
import Chategory from './Chategory';

function ThreadItem({
  title, body, downVotesBy, upVotesBy, createdAt, user, category,

}) {
  return (
    <div className="my-3 border-b-2 border-solid">
      <div className="py-2">
        <Chategory category={category} />
        <h4 className="pt-3 text-lg font-bold text-purple-900">{title}</h4>
        <p>{body}</p>
        <div className="py-2 space-x-5 flex">
          <span className="flex items-center space-x-1">
            <AiOutlineLike />
            <p>{upVotesBy}</p>
          </span>
          <span className="flex items-center space-x-1">
            <AiOutlineDislike />
            <p>{downVotesBy}</p>
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
    </div>
  );
}

ThreadItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,

};

export default ThreadItem;
