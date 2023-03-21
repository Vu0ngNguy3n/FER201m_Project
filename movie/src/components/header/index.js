import "./Header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AccountContext } from "../../App";
import { Button } from "bootstrap";

function Header() {
  const { account, setAccount } = useContext(AccountContext);

  return (
    <div className="contain">
      <div className="inner">
        <Link className="logo" style={{ textDecoration: "none", color:'black' }} to="/">
          MY <span>FILM</span>
        </Link>
        <div className="search">
          <input placeholder="Enter a Film ..." />
          <button className="clear">
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
          <button className="searchbtn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="actions">
          <Link
            className="action"
            style={{ textDecoration: "none" }}
            to="/login"
          >
            <b>{account.id === undefined ? "Đăng nhập" : "Đăng xuất"}</b>
          </Link>
          {account.id === undefined ? (
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
