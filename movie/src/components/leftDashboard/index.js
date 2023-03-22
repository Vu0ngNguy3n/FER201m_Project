import { useEffect, useState } from 'react';
import './LeftDashboard.scss'

function LeftDashboard(){
    const [type, setType] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:8000/type`,{
            method: 'GET'
        })
        .then(respon => respon.json())
        .then(data => setType(data))
    },[])

    return (
      <div className="leftDashboard">
        <h3><span>Dash</span>board</h3>
        <hr/>
        <div>
          <h5>Thể loại</h5>
          <ul>

          </ul>
        </div>
        <div>
          <h5>Danh sách phim</h5>
            <ul>
                {type.map((t,index) => {
                    return (
                        <li key={index}>{t}</li>
                    )
                })}
            </ul>
        </div>
      </div>
    );
}
export default LeftDashboard