import {  useState } from "react";
import "./RegisterContent.scss";
import accounts from '../../json/account.json'

function RegisterContent() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("Male");


 

    const handleRegister = () => {
        const newId = accounts[accounts.length-1].id + 1;
        const newAccount = {
            id:newId,
            name: fullname,
            email: mail,
            password: password,
            gender: gender
        }
        //  const fs = require("fs");
        //  const data = JSON.parse(fs.readFileSync("account.json"));
        //  data.newData = {newAccount}
        //  const newDataJson = JSON.stringify(data)
        //  console.log(newAccount);
    }



  return (
    <div class="container">qwe
      <div className="registerContent">
        <label>Gmail:</label>
        <input
          onChange={(e) => setMail(e.target.value)}
          placeholder="Enter your gmail ..."
        />
        Password:
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password ..."
          type={"password"}
        />
        Full Name:{" "}
        <input
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Enter your Full Name ..."
        />
        <div className="gender">
          Gender:
          <input type={"radio"} onChange={e => setGender(e.target.value)} value="Male" checked={gender==='Male'?true:false} name="gender" /> Nam
          <input type={"radio"} onChange={e => setGender(e.target.value)} value="Female" checked={gender==='Female'?true:false} name="gender" /> Nữ
        </div>
        <button onClick={handleRegister}>Đăng ký</button>
      </div>
    </div>
  );
}

export default RegisterContent;
