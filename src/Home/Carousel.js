import React from "react";
import './Carousel.less'
var timer = null;
class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // img: [
            //     { src: require('../img/01.png'), href: 'javascript:;', text: ['乐享云可视化大赛', '展数据之美 赢丰厚大奖', '报名参赛']},
            //     { src: require('../img/02.png'), href: 'javascript:;', text: ['容器服务新版正式上线', '开放更多 Kubernetes 功能', '查看详情']},
            //     { src: require('../img/03.png'), href: 'javascript:;', text: ['布局教育完整生态链', '云创学院正式上线', '查看详情']},
            //     { src: require('../img/04.png'), href: 'javascript:;', text: ['云计算活动专区', '不定期更新热门活动', '查看详情']}
            // ],
            img:[],
            index:0,
        }
        
    }

    getData=()=>{

        fetch('./data/Carousel.json').then(res => res.json())
            .then(data => {
                this.setState({
                    img:data
                })
            })
            .catch(e => console.log("Oops, error", e));
    }
    
    handleEnter=()=>{
        clearInterval(timer)
    }
    handleLeave=()=>{
        this.autoPaly();
    }

    handleClick=(key)=>{
        // var key=key;
        this.setState({
            index:key
        })
    }
    autoPaly=()=>{
        timer=setInterval(this.setCarousel,3000)
    }

    setCarousel=()=>{
        this.setState((prev)=>{
            if (prev.index < prev.img.length-1){
                return {
                    index: prev.index + 1
                }
            }else{
                return{
                    index:0
                }
            }
        })
    }
    componentDidMount(){
        this.autoPaly();
        this.getData();
    }
    componentWillUnmount = () => {
        this.setState = (state, callback) => {
            return;
        };
    }
    render(){
        return (
            
                <div className="carousel">
                    <div className="carousel_wrap" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} >
                        {
                            this.state.img.map((item,index)=>{
                                return(
                                    <div className={this.state.index === index ? 'carousel_wrap_item active' : 'carousel_wrap_item'} key={index}>
                                        <img src={item.src} alt="" />
                                        <div className={this.state.index === index ? 'carousel_text active_text' : 'carousel_text'}>
                                            <h2>{item.text[0]}</h2>
                                            <p>{item.text[1]}</p>
                                            <div><a href={item.href}>{item.text[2]}</a></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="control_points">
                            {
                              this.state.img.map((item,index)=>{
                                  return (
                                      <span key={index} className={this.state.index === index ? 'active' : ''} onClick={() => { this.handleClick(index)}}></span> 
                                  )
                              })  
                            }
                        </div>
                    </div>
                </div>
            
        )
    }
}
export default Carousel