import './Sidebar.scss'
import data from '../../json/type.json';
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import './Sidebar.scss';

function Sidebar(){
    const [category, setcategory] = useState(data);

    return(
        <div className='sidebar'>
            <ul>
            {
                category?.map((item, index) => (
                    <Link key={index} to={`/category/${item.id}`}>
                    <div className="category_items">
                        <li>{item?.category}</li>
                    </div>
                </Link>
                ))
            }
            </ul>
        </div>
    )
}

export default Sidebar