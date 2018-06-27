import React from "react";
import "./Serve.less"
class Serve extends React.Component{
    render(){
        return (
            <div className="serve_wrap">
                <div className="serve_wrap_content">
                    <div className="serve_title">
                        <h2>安全、高效的专属云服务</h2>
                        <p>创新部署模式，兼具高安全、高弹性、高性能、低成本、易运维、全功能的优势</p>
                    </div>
                    <div className="serve_content clearfix">
                        <div className="serve_content_left">
                            <div className="serve_left_line_title">
                                <h3>企业级专属云平台</h3>
                                <p>向企业客户提供独占的资源池，以及完备的资源池管控能力；同时，针对企业场景提供云上账号管理、财务管理等组织管理能力。</p>
                            </div>

                            <div className="serve_left_line">
                                <h4>独占资源池</h4>
                                <p>既可提高资源使用率、优化成本，也可保证性能稳定性</p>
                            </div>
                            <div className="serve_left_line">
                                <h4>全量云服务</h4>
                                <p>提供 IaaS/PaaS/CaaS 全量云服务</p>
                            </div>
                            <div className="serve_left_line">
                                <h4>无限弹性扩容能力</h4>
                                <p>高峰流量时可扩容至公有云，借助公有云资源实现无限弹性扩容</p>
                            </div>
                            <div className="serve_left_line">
                                <h4>组织管理</h4>
                                <p>提供多账号的统一计费、权限控制等能力，支持多层级管理模式</p>
                            </div>
                            <div className="server_left_line_button"><a href="javascript:;">了解更多</a></div>
                        </div>
                        <div className="serve_content_right">
                            <img src="./img/09.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Serve