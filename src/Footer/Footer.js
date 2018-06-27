import React from "react";
import "./Footer.less"
class Footer extends React.Component{
    render(){
        return (
            <footer className="footer_wrap">
                <div className="footer_wrap_content">
                    <div className="footer_serve  clearfix">
                        <div className="footer_serve_item">
                            <img src="./img/footer_01.png" alt=""/>
                            <p>0元免费备案</p>
                        </div>
                        <div className="footer_serve_item">
                            <img src="./img/footer_02.png" alt=""/>
                            <p>7 X 24 客户支持</p>
                        </div>
                        <div className="footer_serve_item">
                            <img src="./img/footer_03.png" alt=""/>
                            <p>1 V 1大客户服务</p>
                        </div>
                    </div>
                    <div className="footer_link clearfix">
                        <div className="footer_link_item">
                            <dl>
                                <dt>关于我们</dt>
                                <dd><a href="javascript:;">公司简介</a></dd>
                                <dd><a href="javascript:;">荣誉与认证</a></dd>
                                <dd><a href="javascript:;">友情链接</a></dd>
                            </dl>
                        </div>
                        <div className="footer_link_item">
                            <dl>
                                <dt>资源与文档</dt>
                                <dd><a href="javascript:;">新用户大礼包</a></dd>
                                <dd><a href="javascript:;">产品文档</a></dd>
                                <dd><a href="javascript:;">开发者资源</a></dd>
                            </dl>
                        </div>
                        <div className="footer_link_item">
                            <dl>
                                <dt>诚邀合作</dt>
                                <dd><a href="javascript:;">渠道合作</a></dd>
                                <dd><a href="javascript:;">社区合作</a></dd>
                                <dd><a href="javascript:;">教育合作</a></dd>
                            </dl>
                        </div>
                        <div className="footer_link_item">
                            <dl>
                                <dt>管理与支持</dt>
                                <dd><a href="javascript:;">控制台</a></dd>
                                <dd><a href="javascript:;">联系我们</a></dd>
                            </dl>
                        </div>
                    </div>
                    <div className="footer_info">
                            <p>ICP备11041704号-26|Copyright © 2018 electric 版权所有经营证照</p>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer