import { useState } from 'react'
import './LoginContent.scss'
import accounts from '../../json/account.json'


function LoginContent(){
    const [mail,setMail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        const account = accounts.filter(a => a.email === mail && a.password === password)

    }

    return(
        <div className='container'>
            <div className='loginContent'>
                <div className='input'>
                    <input placeholder='Enter mail address ...' onChange={e=> setMail(e.target.value)}/>
                    <input placeholder='Password' type={'password'} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className='handle'>
                    <button onClick={handleLogin}>Đăng nhập</button>
                    <a>Quên mật khẩu</a>
                </div>
                <div className='register'>
                    <span>Bạn chưa có tài khoản? Đăng ký</span>
                </div>
            </div>
        </div>
    )
}

export default LoginContent