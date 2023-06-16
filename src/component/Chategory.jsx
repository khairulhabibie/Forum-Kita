import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Chategory({ category }) {
  return (
    <>
      <h5 className="text-2xl font-bold">Kategori Poluler</h5>
      <div className="py-2 space-x-3">
        <span className="px-2 py-1 text-sm border-2 border-gray-400 border-solid rounded-md bg-purple-200">{category}</span>
      </div>
    </>
  );
}

Chategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Chategory;
