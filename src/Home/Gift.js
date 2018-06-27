import React from "react";
import "./Gift.less"
class Gift extends React.Component{
    render(){
        return (
            <div className="gift_wrap">
                <div className="gift_wrap_content">
                    <div className="gift_content_text">
                        <h2>新人注册，立即享受新人大礼包</h2>
                        <div><a href="javascript:;">注册有礼</a></div>
                    </div>
                </div>
                   
                <div className="gift_content_video">
                    <video muted src="./video/video_01.mp4" autoPlay loop></video>
                </div>
            </div>
        )
    }
}
export default Gift