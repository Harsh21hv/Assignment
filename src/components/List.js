import React from 'react';
import { IMG_CDN } from '../utils/constants';

const List = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className='m-4 px-2 '>
      <img className='rounded-md w-80 hover:w-96 transition-all ease-in-out duration-300' alt='img' src={IMG_CDN + posterPath} />
    </div>
  );
};

export default List;
