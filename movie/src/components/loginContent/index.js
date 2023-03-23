import { useContext, useEffect, useState } from "react";
import "./LoginContent.scss";
import { AccountContext } from "../../App";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function LoginContent() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [listAccount, setListAccount] = useState([]);
  const [isUndifined, setIsUndifined] = useState(null);
  const { account, setAccount } = useContext(AccountContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/account`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setListAccount(data);
      });
  }, []);

  const handleLogin = () => {
    const account = listAccount.find(
      (a) => a.email === mail && a.password === password
    );
    if (account === undefined) {
      setIsUndifined(false);
      toast('Username or Password is Incorrect!!!')
    } else {
      setAccount(account);
      navigate("/");
      toast("Login successfully!!");
    }
  };

  return (
    <div className="container">
      <div className="loginContent">
        <div className="leftContent">
          <h1>Sign In</h1>
          <img src="https://i.pinimg.com/originals/09/7d/24/097d248efe07333fd04582d35ba42dde.jpg" />
          <h2>Privacy policy {"&"} Term of service</h2>
        </div>
        <div className="rightContent">
          <div className="input">
            <label htmlFor="mail">Email: </label>
            <input
              placeholder="Enter mail address "
              id="mail"
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password:</label>
            <input
              placeholder="Password"
              type={"password"}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isUndifined === false ? (
            <p
              style={{ color: "#f9004d", textAlign: "left", fontSize: "12px" }}
            >
              Incorrect Email or Password
            </p>
          ) : (
            ""
          )}
          <div className="handle">
            <button onClick={handleLogin}>Đăng nhập</button>
            <a className="remember">Quên mật khẩu</a>
          </div>
          <div className="register">
            <b>Bạn chưa có tài khoản? </b>
            <Link
              style={{ color: "#f9004d", textDecoration: "none" }}
              className="signup"
              to="/register"
            >
              <p>Đăng ký</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginContent;
