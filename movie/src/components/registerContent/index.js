import { useState } from "react";
import "./RegisterContent.scss";
import accounts from "../../json/account.json";
import { Link } from "react-router-dom";

function RegisterContent() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("Male");

  const handleRegister = () => {
    const newId = accounts[accounts.length - 1].id + 1;
    const newAccount = {
      id: newId,
      name: fullname,
      email: mail,
      password: password,
      gender: gender,
    };
  };

  return (
    <div class="container">
      <div className="registerContent">
        <div className="leftRegister">
          <div className="input">
            <label htmlFor="mail">Email: </label>
            <input
              placeholder="Enter mail address "
              id="mail"
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="fullname">Full Name: </label>
            <input
              placeholder="Enter Your FullName "
              id="fullname"
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
          <div className="input">
            <div className="gender">
              <label>Gender:</label>
            </div>
            <div className="genderdetail">
              <input
                placeholder="gender"
                type={"radio"}
                name="gender"
                value="Male"
                checked
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>Male</p>{" "}
              <input
                placeholder="gender"
                name="gender"
                type={"radio"}
                value="Female"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>Female</p>
            </div>
          </div>
          <div className="handle">
            <button>Đăng ký</button>
          </div>
          <div className="login">
            <b>Have an account?</b>
            <Link
              style={{ color: "#f9004d", textDecoration: "none" }}
              className="signup"
              to="/login"
            >
              <p>Đăng nhập</p>
            </Link>
          </div>
        </div>
        <div className="rightRegister">
          <h1>Sign Up</h1>
          <img src="https://i.pinimg.com/736x/ae/d2/5c/aed25c2e7003ccff25ca62e3ec78693b.jpg" />
          <h2>Privacy policy {"&"} Term of service</h2>
        </div>
      </div>
    </div>
  );
}

export default RegisterContent;
