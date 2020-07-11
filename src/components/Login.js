import React,{ useState } from "react";
import '../styles/LoginStyle.css'
import axios from 'axios';


function Login () {

    const [loginData,setLoginData] = useState({
        mail: '',
        password: ''
    });

    const setLoginDataMail = (e) => {
        setLoginData({
            ...loginData,
            mail: e.target.value
        });
    }


    const setLoginDataPassword = (e) => {
        setLoginData({
            ...loginData,
            password: e.target.value
        });
    }

    const onSubmitLogin = (event) => {
        event.preventDefault();
        console.log(loginData);

        axios.post("http://localhost/react-test-client/src/server/services/login.php", loginData)
            .then(res => console.log( res.data ))
            .catch(res => console.log(res.data));
    }

    return (
        <div className="login">
            <h1>login</h1>
            <form onSubmit={onSubmitLogin}>
                <div  className="loginRow">
                    <label className="loginMail">mail</label>
                    <input onChange={setLoginDataMail}></input>
                </div>
                <div className="loginRow">
                    <label className="loginPassword" >password</label>
                    <input onChange={setLoginDataPassword} type="password" ></input>
                </div>
                <input className="loginSubmit" type="submit" value="Login" ></input>
            </form>
        </div>    

    );
}

export default (Login)