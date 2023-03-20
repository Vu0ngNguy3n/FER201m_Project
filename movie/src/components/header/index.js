import  './Header.scss'
import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="header">
        <div className='left'>
            <img src="https://w7.pngwing.com/pngs/1011/407/png-transparent-movies-logo-the-film-television-logo.png" />
            <Link to='/'><h5>Trang chủ</h5></Link>
        </div>
        <div className='right'>
            <input placeholder='Nhập tên cần tìm'/>
            <button>Tìm</button>
            <p>Đăng nhập</p>
            <p>Đăng kí</p>
            <p>Đăng xuất</p>
        </div>
      </header>
    );
}

export default Header