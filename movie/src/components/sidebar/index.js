import './Sidebar.scss'
import data from '../../json/type.json';
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import './Sidebar.scss';

function Sidebar(){
    const [category, setcategory] = useState(data);

    return(
        <div className='sideBar'>
            <h2>Thể Loại</h2>
            <hr/>
            <ul>
            {
                category?.map((item, index) => (
                    <Link style={{textDecoration: 'none'}} key={index} to={`/category/${item.id}`}>
                    <div className="categoryItems">
                        <li><span>{item?.category}</span></li>
                    </div>
                </Link>
                ))
            }
            </ul>
        </div>
    )
}

export default Sidebar