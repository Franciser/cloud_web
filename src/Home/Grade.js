import React from "react";
import "./Grade.less"
class Grade extends React.Component{
    render(){
        return (
            <div className="grade_wrap">
                <div className="grade_wrap_content">
                    <div className="grade_title">
                        <h2>安全合规的多重保障</h2>
                        <p>来自全球权威机构的权威认证，保证客户业务环境安全可靠</p>
                    </div>
                    <div className="grade_content clearfix">
                        <div className="grade_content_item">
                            <a href="javascript:;">
                                <img src="./img/grade_01.png" alt=""/>
                                <p>CSA STAR Certification 国际认证</p>
                            </a>
                        </div>
                        <div className="grade_content_item">
                            <a href="javascript:;">
                                <img src="./img/grade_02.png" alt=""/>
                                <p>信息系统安全等级保护认证</p>
                            </a>
                        </div>
                        <div className="grade_content_item">
                            <a href="javascript:;">
                                <img src="./img/grade_03.png" alt=""/>
                                <p>信息安全管理体系认证</p>
                            </a>
                        </div>
                        <div className="grade_content_item">
                            <a href="javascript:;">
                                <img src="./img/grade_04.png" alt=""/>
                                <p>ITSS 云计算服务能力增强级</p>
                            </a>
                        </div>
                        <div className="grade_content_item">
                            <a href="javascript:;">
                                <img src="./img/grade_05.png" alt=""/>
                                <p>Kubernetes一致性认证</p>
                            </a>
                        </div>
                        <div className="grade_content_item">
                            <a href="javascript:;">
                                <img src="./img/grade_06.png" alt=""/>
                                <p>可信云服务认证</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Grade