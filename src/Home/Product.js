import React from "react";
import "./Product.less"
class Product extends React.Component{
    constructor(props){
        super(props);
        this.state={
            product:[],
            index:0,
        }
    }

    getData=()=>{
        fetch('./data/Product.json').then(res => res.json()).then(data => this.setState({ product: data})).catch(e=>console.log("Oops","error",e))
    }

    handleClick=(index)=>{
        this.setState({
            index:index
        })
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        return (
            <div className="product_wrap">
                <div className="product_wrap_content">
                    <div className="product_title">
                        <h2>可信赖的云计算产品家族</h2>
                        <p>以创新、开放、高性能的场景化云服务和大数据服务，助力产业升级</p>
                    </div>
                    <div className="product_content">
                        <div className="product_content_line clearfix">
                            {
                                this.state.product.map((item,index)=>{
                                    return(
                                        <div className="product_line_item" key={index}>
                                            <div className="product_item_top" onClick={() => { this.handleClick(index)}}>
                                                <div style={{ backgroundImage: 'url('+item.src+')',backgroundPosition:this.state.index===index?'60px 0':''}}></div>
                                                <p style={{ color: this.state.index === index ?'#387ee8':'#666666'}}>{item.title}</p>
                                                <i className={this.state.index === index ?"product_arrow_active":""}></i>
                                            </div>
                                            <div className={this.state.index === index ? "product_item_bottom clearfix product_bottom_active" :"product_item_bottom clearfix"} style={{left:-index*100+'%'}}>
                                                {
                                                    item.detail.map((k,i)=>{
                                                        return (
                                                            <div className="product_bottom_detail" key={i} >
                                                                <a href="javascript:;">
                                                                    <h3>{k[0]}</h3>
                                                                    <p>{k[1]}</p>
                                                                </a>
                                                            </div>
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
export default Product