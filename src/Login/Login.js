import React from "react";
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as action from "../actions/login_action";
import * as userNameAction from "../actions/userName_action"
import "./Login.less"
import LoginHeader from "./LoginHeader";
import LoginPanel from "./LoginPanel"
import LoginFooter from "./LoginFooter"
class Login extends React.Component{
    handleLogin=(value)=>{
        this.props.loginActions.update("login");
        localStorage.setItem('ISLOGIN',"login" )
        
        this.props.userNameAction.update(value);
        localStorage.setItem('USERNAME', value)
        this.jumpToPage()
        // console.log(this.props.loginState.isLogin)
        // console.log(value)
    }

    jumpToPage=()=>{
        this.props.history.push('/')
    }
    render(){
        // console.log(this.props.loginState.isLogin)
        return (
            <div className="login_wrap">
                <LoginHeader />
                {this.props.loginState.isLogin==="login"?
                    
                    <p style={{ color: "#fff", position: "fixed", top: "50%", left: "50%" }}>你已登录</p>
                    :
                    <LoginPanel handleLogin={this.handleLogin} />
                    
                    
                }
                <LoginFooter />
            </div>
        )
    }

    
}
function mapStateToProps(state) {
    return {
        loginState: state.loginReducer,
        userName: state.userNameReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loginActions: bindActionCreators(action, dispatch),
        userNameAction: bindActionCreators(userNameAction, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)