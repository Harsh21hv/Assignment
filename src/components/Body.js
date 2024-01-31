import React from 'react'
import List from './List';

const Body = ({title,data}) => {
    return (
        <div className='px-6  '>
          {' '}
          <h1 className='text-4xl py-6 px-2 text-white'>{title}</h1>
          <div className='flex overflow-x-auto'>
            <div className='mx-24 ' > 
              {data?.map((movie) => (
                <List key={movie.id} posterPath={movie.poster_path} />
              ))}
            </div>
          </div>
        </div>
      );
}

export default Body