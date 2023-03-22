import "./Header.scss";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { AccountContext } from "../../App";

function Header({setSearch, search}) {
  const { account, setAccount } = useContext(AccountContext);

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div className="contain">
      <div className="inner">
        <Link
          className="logo"
          style={{ textDecoration: "none", color: "black" }}
          to="/"
        >
          MY <span>FILM</span>
        </Link>
        <div className="search">
          <input
            onChange={(e) => setSearch(e.target.value)}
			value={search || ''}
            placeholder="Enter a Film ..."
          />
          <button className="clear" onClick={clearSearch}>
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
          <button className="searchbtn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="actions">
          {!account ? "" : <b>Hello {account.name}</b>}
          <Link
            className="action"
            style={{ textDecoration: "none" }}
            to="/login"
            onClick={() => setAccount(null)}
          >
            {!account ? <b>Đăng Nhập</b> : <b>Đăng Xuất</b>}
          </Link>
          {!account ? (
            <Link
              className="action"
              style={{ textDecoration: "none" }}
              to="/register"
            >
              <b>Đăng ký</b>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
