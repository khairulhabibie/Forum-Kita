import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function ThreadCategory({ category }) {
  return (
    <span className="px-2 py-1 text-sm border-2 border-gray-400 border-solid rounded-md bg-purple-200">{category}</span>
  );
}

ThreadCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ThreadCategory;
