import React from "react";
import "./LoginPanel.less"
import { Checkbox } from "antd";
var nameReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
var passwordReg = /^([\w._]|[\u4e00-\u9fa5]){6,15}$/;
class LoginPanel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName:'',
            password:'',
            isShow:false,
            // isLogin:false,
            nameWarn:false,
            passwordWarn:false,
            nameInfo:'请输入11位手机号',
            passwordInfo:'请输入6-15位密码',
            checkRegister:false,
            isName:false,
            isPassword:false,
        }
    }
    changeName=(e)=>{
            this.setState({
                userName: e.target.value.trim()
            })

            
        
    }
    changePassword=(e)=>{
            this.setState({
                password: e.target.value.trim()
            })
    }

    changeShow=()=>{
        this.setState({
            isShow:!this.state.isShow,
        })
    }

    handleFocusName=()=>{
       this.setState({
                nameWarn:true,
        })
    }
    handleFocusPassword=()=>{
         this.setState({
                passwordWarn:true,
        })
    }

    handleBlurName=()=>{

        var isName = nameReg.test(this.state.userName);
            if(isName){
                this.setState({
                    nameInfo:'手机号格式正确',
                    isName:true,
                })
            }else{
                this.setState({
                    nameInfo: '手机号格式错误',
                    isName: false,
                })
            }
       
    }

    handleBlurPassword=()=>{
        var isPass = passwordReg.test(this.state.password);
            if (isPass) {
                this.setState({
                    passwordInfo: '密码格式正确',
                    isPassword: true,
                })
            } else {
                this.setState({
                    passwordInfo: '密码格式错误(6-15位)',
                    isPassword: false,
                })
            }
    }

    
    deleteName=()=>{
        this.setState({
            userName:''
        })
    }
    deletePassword=()=>{
        this.setState({
            password:''
        })
    }
    setLogin=(e)=>{
        e.preventDefault();
        
        // var nameReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        // var passwordReg = /^([\w._]|[\u4e00-\u9fa5]){6,15}$/;
        // if(this.state.userName&&this.state.password){
        //     var isName = nameReg.test(this.state.userName);
        //     var isPass = passwordReg.test(this.state.password)
        //     if(isName&&isPass){
        //         this.props.handleLogin(this.state.userName);
        //     }
        // }

        if(this.state.isName&&this.state.isPassword){
            this.props.handleLogin(this.state.userName);
        }else{
            return
        }
    }

    

    render(){
        return (
            <div className="loginPanel_wrap">
                <div className="login_panel">
                    <form action="" className="login_form">
                        <h2>乐享云登录</h2>
                        <div className="login_form_line">
                            <input type="text" placeholder="输入手机号" onChange={this.changeName} value={this.state.userName}  onFocus={this.handleFocusName} onBlur={this.handleBlurName}/>
                            <i className="iconfont icon-dengluyonghuming"></i>
                            <i className="iconfont icon-cuo" style={{display:this.state.userName===""?'none':'block'}} onClick={this.deleteName}></i>
                            <div className={this.state.nameWarn ? "login_name_warn login_warn login_warn_active" : "login_name_warn login_warn"} style={{ color: this.state.isName ? 'green' : 'red'}}>
                                <p>{this.state.nameInfo}</p>
                            </div>
                        </div>
                        <div className="login_form_line">
                            <input type={this.state.isShow ? 'text' : "password"} placeholder="输入密码" onChange={this.changePassword} value={this.state.password} onFocus={this.handleFocusPassword} onBlur={this.handleBlurPassword}/>
                            <i className="iconfont icon-mima"></i>
                            <i className="iconfont icon-cuo" style={{ display: this.state.password=== "" ? 'none' : 'block' }} onClick={this.deletePassword}></i>
                            <i  className={this.state.isShow ? "iconfont icon-yanjing-bi" : "iconfont icon-yanjing"} onClick={this.changeShow}></i>
                            <div className={this.state.passwordWarn ? "login_password_warn login_warn login_warn_active" : "login_password_warn login_warn"} style={{color:this.state.isPassword?'green':'red'}}>
                                <p>{this.state.passwordInfo}</p>
                            </div>
                        </div>
                        <div className="login_form_line clearfix">
                            <div className="login_form_line_left">
                                <input type="checkbox" id="agree_item" defaultChecked/>
                                <label htmlFor="agree_item"></label>
                                <span>同意并遵守</span><a href="#">《服务条款》</a>
                            </div>
                            <div className="login_form_line_right">
                                <input type="checkbox" id="not_login_again" />
                                <label htmlFor="not_login_again"></label>
                                <span>7天内免登陆</span>
                            </div>
                        </div>
                        <div className="login_form_line">
                            <button onClick={this.setLogin}>登 录</button>
                        </div>
                        <div className="login_form_line clearfix">
                            <div className="login_form_line_left">
                                <span>还没有账号？</span>
                                <a href="javascript:;">立即注册</a>
                            </div>
                            <div className="login_form_line_right">
                                <a href="javascript:;">忘记密码？</a>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
export default LoginPanel