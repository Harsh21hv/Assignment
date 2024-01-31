import { API_OPTIONS } from '../utils/constants';

import { useEffect, useState } from 'react';

const useAPI = () => {
    const [movies, setmovies] = useState(null)
  const Movies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?&page=1',
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
    setmovies(json.results)
  };

  useEffect(() => {
    Movies();
  }, []);

  return movies;
};

export default useAPI;
