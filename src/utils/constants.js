export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Beare ${process.env.REACT_APP_TMDBAPI}`,
  },
};

export const IMG_CDN = 'https://image.tmdb.org/t/p/w500';
