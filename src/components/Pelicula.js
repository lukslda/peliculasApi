import React from 'react';

const Pelicula = ({pelicula}) => {
    
    return (
      <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
              {pelicula.poster_path} 
          </div>
      </div>
    );
}

export default Pelicula;