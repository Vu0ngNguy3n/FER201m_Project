import './Content.scss'
import data from "../../json/movie.json"
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, userParms } from 'react-router-dom'


function Content({ type }) {
    const [movies, setMovie] = useState(data);

    useEffect(() => {
        fetch(' http://localhost:8000/movies', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(movies => setMovie(movies))
    })


    return (
        <div className='content'>
            {

                movies?.map((item, index) => (
                    <Link key={index} to={`moviedetail/${item.id}`}>
                        <div className="movieItems" onClick={() => setMovie(item.type == type)}>
                            <div>
                                <img src={item?.imageUrl} alt={item.imageUrl} width="auto" height="500px" />
                            </div>
                        </div>
                    </Link>
                ))

            }
        </div>
    )
}
export default Content;