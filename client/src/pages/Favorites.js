import React, { useState, useEffect } from 'react';

import './FavoriteShow.css';

function Favorites({ id }) {
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    fetch(`/favorites/${id}`)
      .then(response => response.json())
      .then(data => setFavorite(data));
  }, [id]);

  if (!favorite) {
    return <p>Loading...</p>;
  }

  return (
    <div className="favorite-container">
      <h1 className="favorite-title">{favorite.title}</h1>
      <p className="favorite-description">{favorite.description}</p>
      <small>{favorite.minutes_to_complete}</small>
    </div>
  );
}

export default Favorites;
