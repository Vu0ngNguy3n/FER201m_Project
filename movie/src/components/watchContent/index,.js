import { useState } from 'react';
import './WatchContent.scss'

function WatchContent({id}){
    const [movieUrl, setMovieUrl] = useState()
    const [name, setName] = useState('')

    fetch(`http://localhost:8000/movies`,{
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        const newId = parseInt(id)
        const newFilm = data.find(item => item.id === newId)
        setMovieUrl(newFilm.filmUrl)
        setName(newFilm.name)
    })


    return (
      <div className="filmContent">
        <h2>{name}</h2>
        <iframe
          width="640"
          height="360px"
          src={movieUrl}
          frameborder="0"
          scrolling="0"
          allowfullscreen
        ></iframe>
      </div>
    );
}

export default WatchContent