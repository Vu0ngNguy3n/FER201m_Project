import { useEffect, useState } from "react";
import "./LeftDashboard.scss";

function LeftDashboard() {
  const [type, setType] = useState([]);
  const [newType, setNewType] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/type`, {
      method: "GET",
    })
      .then((respon) => respon.json())
      .then((data) => setType(data));
  }, []);

  const handleAdd = () => {
    const newId = type[type.length-1].id 
    console.log(newId);
    // fetch(`http://localhost:8000/type`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newType),
    // });

    // setType([...type, newType]);
    // setNewType("");
    // setIsAdd(false);
  };

  const handleSet = () => {
    setIsAdd(!isAdd);
  };

  return (
    <div className="leftDashboard">
      <h3>
        <span>Dash</span>board
      </h3>
      <hr />
      <div>
        <h5>Thể loại</h5>
        <ul>
          {type.map((t, index) => {
            return <li key={index}>{t.category}</li>;
          })}
          {isAdd === true ? (
            <li>
              <input
                placeholder="Nhập tên thể loại..."
                onChange={(e) => setNewType(e.target.value)}
              />{" "}
              <button onClick={()=>handleAdd()}>Add</button>
            </li>
          ) : (
            ""
          )}
          <li
            onClick={handleSet}
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#f9004d",
            }}
          >
            Add Type <i class="fa-solid fa-plus"></i>
          </li>
        </ul>
      </div>
      <div>
        <h5>Danh sách phim</h5>
      </div>
    </div>
  );
}
export default LeftDashboard;