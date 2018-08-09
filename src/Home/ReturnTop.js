import React from "react";
import "./ReturnTop.less"
var timer=null;
class ReturnTop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isShow:false,
        }
    }
    returnTopFn=()=>{
        clearInterval(timer)
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        var scrollValue = scrollTop;
        timer = setInterval(function () {
            scrollValue -= Math.ceil(scrollValue / 10);
            if (scrollValue <= 0) {
                scrollValue = 0;
                clearInterval(timer)
            }
            document.documentElement.scrollTop = scrollValue;
            document.body.scrollTop = scrollValue;
        }, 10)
    }
    componentDidMount(){
        window.addEventListener('scroll', function () {
            var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
            if (scrollTop >= 100) {
                this.setState({
                    isShow:true,
                })
            } else {
                this.setState({
                    isShow: false,
                })
            }
        }.bind(this))
    }
    render(){
        return (
            <div className={this.state.isShow ? "returnTop returnTop_active" : "returnTop"} onClick={this.returnTopFn}>
                <i className="iconfont icon-fanhuidingbu2"></i>
            </div>
        )
    }
}
export default ReturnTop