import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as action from "./actions/login_action";
import * as userNameAction from "./actions/userName_action"
import './App.less'
import Home from "./Home/Home"
import Login from "./Login/Login"
class App extends Component {


  checkLogin = () => {
    //先检查内存中是否已经有登录的数据
    var isLogin = localStorage.getItem('ISLOGIN');
    var userName=localStorage.getItem('USERNAME');
    // console.log(isLogin)
    if (isLogin) {
        this.props.loginActions.update(isLogin);
        this.props.userNameAction.update(userName);
    } else {
        localStorage.setItem('ISLOGIN',"unLogin")
        this.props.loginActions.update("unLogin")
        localStorage.setItem('USERNAME',"")
        this.props.userNameAction.update("");
    }
  }

  componentDidMount() {
    //先初始化检查看是否已经登录
    this.checkLogin();
  }
  
  
  render() {
    // console.log(this.props)
    return (
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </HashRouter>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    loginState: state.loginReducer,
    userName:state.userNameReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(action, dispatch),
    userNameAction: bindActionCreators(userNameAction, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
