import React from "react";
import "./Solution.less"
class Solution extends React.Component{
    constructor(props){
        super(props);
        this.state={
            solution:[
                {
                    nav:'电商',
                    icon:'./img/solution_icon_01.png',
                    title:'电商场景化解决方案',
                    introduce:'针对电商行业的热门场景，提供一站式服务，帮助客户实现平台快速搭建、促销活动开展、精化准营销、全渠道智能客服接入，为电商企业客户的业务快速发展赋能',
                    client: ["./img/brand_04.png", "./img/brand_06.png", "./img/brand_07.png", "./img/brand_10.png",]
                },
                {
                    nav:'互联网金融',
                    icon:'./img/solution_icon_02.png',
                    title:'互联网金融场景化解决方案',
                    introduce:'针对互联网金融客户的业务需求，提供快速上云、金融安全防护、金融社交/股评、营销获客、财经直播/点播、智能客服系统等场景化解决方案，为互金企业提供全方位一站式服务，帮助客户快速上线安全、敏捷的业务系统',
                    client: ["./img/brand_06.png", "./img/brand_04.png", "./img/brand_10.png", "./img/brand_07.png",]
                },
                {
                    nav:'教育',
                    icon:'./img/solution_icon_03.png',
                    title:'教育场景化解决方案',
                    introduce:'针对从 K12、高校、教育机构及在线教育的全行业场景，结合自身技术与教育资源，提供教育信息化、智慧校园、教育实训平台、教育机构架构创新等场景化解决方案，帮助传统学校转型，同时帮助在线教育平台快速开展业务',
                    client: ["./img/brand_06.png", "./img/brand_07.png", "./img/brand_04.png", "./img/brand_10.png",]
                },
                {
                    nav:'医疗',
                    icon:'./img/solution_icon_04.png',
                    title:'医疗场景化解决方案',
                    introduce:'针对各类医疗场景，提供远程医疗云、分级诊疗云、医疗影像云、容灾备份云、科研和影像辅助诊断等场景化解决方案',
                    client: ["./img/brand_10.png", "./img/brand_04.png", "./img/brand_07.png", "./img/brand_06.png",]
                },
            ],

            index:0,
            background: ['./img/05.jpg', './img/06.jpg', './img/07.jpg', './img/08.jpg',]
        }
    }

    handleEnter=(index)=>{
        this.setState({
            index:index
        })
    }
    render(){
        return (
            <div className="solution_wrap" >
                <div className="solution_wrap_content clearfix">
                    <div className="solution_content_left">
                        <div className="solution_left_nav">
                            {
                                this.state.solution.map((item,index)=>{
                                    return (
                                        <div className={this.state.index === index ? "solution_nav_item solution_nav_active" : 'solution_nav_item'} key={index} onMouseEnter={() => { this.handleEnter(index)}}>
                                            <img src={item.icon} alt="" />
                                            <span>{item.nav}</span>
                                        </div>
                                    )
                                })
                            }
                            
                            {/* <div className="solution_nav_item">
                                <img src="../img/solution_icon_02.png" alt="" />
                                <span>互联网金融</span>
                            </div>
                            <div className="solution_nav_item">
                                <img src="../img/solution_icon_03.png" alt="" />
                                <span>教育</span>
                            </div>
                            <div className="solution_nav_item">
                                <img src="../img/solution_icon_04.png" alt="" />
                                <span>医疗</span>
                            </div> */}
                        </div>
                    </div>
                    <div className="solution_content_right">
                        <div className="solution_right_title">
                            <h2>个性化行业解决方案</h2>
                            <p>针对行业特征及细分业务场景深度定制，一站式引领业务升级</p>
                        </div>
                        <div className="solution_right_panel">
                            {
                                this.state.solution.map((item,index)=>{
                                    return(
                                        <div className={this.state.index === index ? "solution_panel_item solution_panel_active" :"solution_panel_item"} key={index}>
                                            <div className="solution_item_text">
                                                <h3>{item.title}</h3>
                                                <p>{item.introduce}</p>
                                            </div>
                                            <div className="solution_item_button">
                                                <a href="javascript:;">了解详情</a>
                                            </div>
                                            <div className="solution_item_client">
                                                <h3>客户案例</h3>
                                                {
                                                    item.client.map((k,i)=>{
                                                        return(
                                                            < img src = {k} alt = "" key={i}/>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Solution