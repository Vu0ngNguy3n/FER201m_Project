import "./Header.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AccountContext } from "../../App";
import { Button } from "bootstrap";

function Header() {
  const { account, setAccount } = useContext(AccountContext);
  const [search, setSearch] = useState("");

  const searchRef = useRef();

  const clearSearch = () => {
    setSearch("");
    searchRef.current.focus();
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
            ref={searchRef}
            value={search}
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
          {account?.role === 0 && (
            <Link
              className="action"
              style={{ textDecoration: "none" }}
              to="/dashboard"
            >
              <b>Dashboard</b>
            </Link>
          )}
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
