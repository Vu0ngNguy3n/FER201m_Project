import './Sidebar.scss'
import data from '../../json/type.json';
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import './Sidebar.scss';

function Sidebar() {
    const [category, setcategory] = useState(data);

    return (
        <div className='sideBar'>
                <h2>Thể Loại</h2>
                <hr />

            {
                category?.map((item, index) => (
                    <div className="categoryItems">
                        <li><span>{item?.category}</span></li>
                    </div>
                ))
            }

        </div>
    )
}

export default Sidebar