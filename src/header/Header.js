import React from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as action from "../actions/login_action";
import * as userNameAction from "../actions/userName_action"
import "./Header.less"
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header_nav_middle: [{ title: '产品', href: 'javascript:;' }, { title: '解决方案', href: 'javascript:;' }, { title: '定价', href: 'javascript:;' }, { title: '文档', href: 'javascript:;' }, { title: '支持', href: 'javascript:;' },],
            header_nav_right: [{ title: '备案', href: 'javascript:;' }, { title: '控制台', href: 'javascript:;' }],
            isScroll:null,
        }
    }

    cancleLogin=()=>{
        this.props.loginActions.update("unLogin")
        localStorage.setItem('ISLOGIN',"unLogin")
        localStorage.setItem('USERNAME', "")
        this.props.userNameAction.update("");
    }

    componentDidMount(){
        //给window绑定滚动时头部背景变色
        window.addEventListener('scroll',function(){
            var scrollTop=document.documentElement.scrollTop;
            if(scrollTop>0){
                this.setState({
                    isScroll:true
                })
            }else{
                this.setState({
                    isScroll:false
                })
            }
        }.bind(this))
    }

    componentWillUnmount = () => {
        this.setState = (state, callback) => {
            return;
        };
    }

    render() {
        // console.log(this.props.loginState.isLogin)
        return (
            
                <header className="header" >
                    <div className={this.state.isScroll ? "header_wrap header_wrap_active" : "header_wrap"}>
                        <div className="header_wrap_content clearfix">
                            <div className="header_left">
                                <Link to="/">
                                    <img src={require('../img/logo.png')} alt="" />
                                    <span>乐享云</span>
                                </Link>
                            </div>
                            <div className="header_middle">
                                <nav>
                                    <ul>

                                        <li><a href="javascript:;" className="header_nav_item">产品</a>
                                            <div className="header_middle_list">
                                                <div className="header_middle_product_total">
                                                    <div className="header_middle_product_wrap">
                                                        <span>产品聚合：</span>
                                                        <span><a href="javascript:;">云计算基础服务</a></span>
                                                        <span><a href="javascript:;">大数据</a></span>
                                                        <span><a href="javascript:;">云安全</a></span>
                                                        <span><a href="javascript:;">通信与视频</a></span>
                                                    </div>
                                                </div>
                                                <div className="header_category clearfix">
                                                    <div className="header_category_item">
                                                        <dl>
                                                            <dt>计算服务</dt>
                                                            <dd><a href="javascript:;">容器服务</a></dd>
                                                            <dd><a href="javascript:;">云服务器</a></dd>
                                                            <dd><a href="javascript:;">镜像仓库</a></dd>
                                                        </dl>
                                                    </div>
                                                    <div className="header_category_item">
                                                        <dl>
                                                            <dt>业务安全</dt>
                                                            <dd><a href="javascript:;">验证码</a></dd>
                                                            <dd><a href="javascript:;">注册保护</a></dd>
                                                            <dd><a href="javascript:;">登录保护</a></dd>
                                                            <dd><a href="javascript:;">营销反作弊</a></dd>
                                                        </dl>
                                                    </div>
                                                    <div className="header_category_item">
                                                        <dl>
                                                            <dt>通信服务</dt>
                                                            <dd><a href="javascript:;">IM即时通讯</a></dd>
                                                            <dd><a href="javascript:;">音视频通话</a></dd>
                                                            <dd><a href="javascript:;">短信</a></dd>
                                                            <dd><a href="javascript:;">专线电话</a></dd>
                                                        </dl>
                                                    </div>
                                                    <div className="header_category_item">
                                                        <dl>
                                                            <dt>域名与备案</dt>
                                                            <dd><a href="javascript:;">备案系统</a></dd>
                                                            <dd><a href="javascript:;">域名系统</a></dd>
                                                        </dl>
                                                    </div>
                                                    <div className="header_category_item">
                                                        <dl>
                                                            <dt>存储和CDN</dt>
                                                            <dd><a href="javascript:;">云硬盘</a></dd>
                                                            <dd><a href="javascript:;">文件存储(公测中)</a></dd>
                                                            <dd><a href="javascript:;">对象存储</a></dd>
                                                            <dd><a href="javascript:;">CDN</a></dd>
                                                        </dl>
                                                    </div>
                                                    <div className="header_category_item">
                                                        <dl>
                                                            <dt>网络服务</dt>
                                                            <dd><a href="javascript:;">VPC</a></dd>
                                                            <dd><a href="javascript:;">负载均衡</a></dd>
                                                            <dd><a href="javascript:;">弹性公网IP</a></dd>
                                                        </dl>
                                                    </div>
                                                    <div className="header_category_item">
                                                        <dl>
                                                            <dt>网络安全</dt>
                                                            <dd><a href="javascript:;">DDoS高防</a></dd>
                                                            <dd><a href="javascript:;">DDoS基础防护</a></dd>
                                                            <dd><a href="javascript:;">SSL证书</a></dd>
                                                            <dd><a href="javascript:;">渗透测试</a></dd>
                                                        </dl>
                                                    </div>
                                                    <div className="header_category_item">
                                                        <dl>
                                                            <dt>视频服务</dt>
                                                            <dd><a href="javascript:;">点播</a></dd>
                                                            <dd><a href="javascript:;">直播</a></dd>
                                                            <dd><a href="javascript:;">互动直播</a></dd>
                                                            <dd><a href="javascript:;">互动白板</a></dd>
                                                        </dl>
                                                    </div>
                                                    <div className="header_category_item">
                                                        <dl>
                                                            <dt>管理与监控</dt>
                                                            <dd><a href="javascript:;">访问控制</a></dd>
                                                            <dd><a href="javascript:;">日志服务</a></dd>
                                                            <dd><a href="javascript:;">应用监控</a></dd>
                                                            <dd><a href="javascript:;">报警管理</a></dd>
                                                        </dl>
                                                    </div>
                                                    <div className="header_category_item">
                                                        <dl>
                                                            <dt>移动安全</dt>
                                                            <dd><a href="javascript:;"> Android应用加固</a></dd>
                                                            <dd><a href="javascript:;">ios应用加固</a></dd>
                                                            <dd><a href="javascript:;">SDK加固</a></dd>
                                                            <dd><a href="javascript:;">安全组件</a></dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="javascript:;" className="header_nav_item">解决方案</a>
                                            <div className="header_middle_list">

                                            </div>
                                        </li>
                                        <li><a href="javascript:;" className="header_nav_item">定价</a>
                                            <div className="header_middle_list">

                                            </div>
                                        </li>
                                        <li><a href="javascript:;" className="header_nav_item">文档</a>
                                            <div className="header_middle_list">

                                            </div>
                                        </li>
                                        <li><a href="javascript:;" className="header_nav_item">支持</a>
                                            <div className="header_middle_list">

                                            </div>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                            <div className="header_right">
                                <nav>
                                    <ul>
                                        <li><a href="javascript:;" className="header_nav_item">备案</a></li>
                                        <li><a href="javascript:;" className="header_nav_item">控制台</a></li>
                                        {
                                            this.props.loginState.isLogin === "login" ?
                                                <div className="hasLogin_wrap">
                                                    <a href="javascript:;">
                                                        <img src="./img/login_logo.jpg" alt="" />
                                                    </a>
                                                    <div className="userInfo_wrap">
                                                        <h3>{this.props.userName.userName}</h3>
                                                        <div className="cancle_login" onClick={this.cancleLogin}>
                                                            退出登录
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <li><Link to="/login" className="header_nav_item">登录</Link></li>
                                        }

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
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
export default connect(mapStateToProps, mapDispatchToProps)(Header)