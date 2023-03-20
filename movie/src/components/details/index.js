import './Details.scss'
import movies from "../../json/movie.json"
import fullReviews from "../../json/reviews.json"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Details() {
	const { id } = useParams()
	const [movie, setMovie] = useState(() => movies.find(m => m.id === parseInt(id)))
	const [reviews, setReviews] = useState(() => fullReviews.filter(rv => rv.id === parseInt(id)))

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-sm-12'>
					<div className='row'>
						<div className='col-sm-4'>
							<img src={movie.imageUrl} alt={movie.name} width="auto" height="500px" />
						</div>
						<div className='col-sm-8'>
							<div className='row'>
								<h1 className='col-sm-12'>{movie.name}</h1>
								<div className='col-sm-12'><span style={{ fontWeight: 'bold' }}>Thể loại: </span>{movie.type}</div>
								<div className='col-sm-12'><span style={{ fontWeight: 'bold' }}>Điểm đánh giá:</span> {movie.score}</div>
								<div className='col-sm-12'><span style={{ fontWeight: 'bold' }}>Mô tả:</span> {movie.description}</div>
								<button className='btn btn-primary ml-3'>Đánh giá</button>
							</div>
							<hr/>
							<div className='row'>
								<h2>Bình luận</h2>

							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Details