import './CardMovie.scss'

function CardMovie({movie}){
    return(
        <div className='card'>
            <img src={movie.imageUrl}/>
           <div className='cardContent'>
                <h4>{movie.name}</h4>
                <b>Year: {movie.year}</b>
                <p>Type: {movie.type}</p>
           </div>
        </div>
    )
}

export default CardMovie