import React from "react";
import {Link} from "react-router-dom"
import "./LoginHeader.less"
class LoginHeader extends React.Component{
    render(){
        return (
            <header className="loginHeader">
                <div className="loginHeader_wrap">
                    <div className="loginHeader_left">
                        <Link to="/">
                            <img src={require('../img/logo.png')} alt="" />
                            <span>乐享云</span>
                        </Link>
                    </div>
                </div>
            </header>
        )
    }
}
export default LoginHeader