import { useContext, useEffect, useState } from "react";
import "./LoginContent.scss";
import accounts from "../../json/account.json";
import { AccountContext } from "../../App";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function LoginContent() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { account, setAccount } = useContext(AccountContext);
  const navigate = useNavigate();

  useEffect(() => {
    setAccount({});
  }, []);
  const handleLogin = () => {
    const account = accounts.find(
      (a) => a.email === mail && a.password === password
    );
    if (account.length === 0) {
      alert("No user");
    } else {
      setAccount(account);
      navigate("/");
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
          <div className="handle">
            <button onClick={handleLogin}>Đăng nhập</button>
            <a className="remember">Quên mật khẩu</a>
          </div>
          <div className="register">
            <span>Bạn chưa có tài khoản? </span>
            <Link
              style={{ color: "#f9004d",textDecoration: 'none' }}
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
