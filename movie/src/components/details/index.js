import './Details.scss'
import movies from "../../json/movie.json"
import reviews from "../../json/reviews.json"
import { useState } from 'react'
import { useParams } from 'react-router-dom'


function Details() {
	const { id } = useParams()
	const [movie, setMovies] = useState(() => {
		return movies.find(m => m.id === id)
	})

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-sm-12'>
					<div className='col-sm-3'>
						<img src={movie.imageUrl} alt={movie.name}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Details