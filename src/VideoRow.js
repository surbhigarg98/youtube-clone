import React from 'react'
import './VideoRow.css'

function VideoRow({img,title,channelName,subs,views,timestamp,description}) {
    return (
        <div className="videoRow">
           <img src={img} alt="img" className="videoRow__img"/>
           <div className="videoRow__text">
            <h3>{title}</h3>
            <p>{channelName} • <span className="subscribers"><span className="noOfSubs"> {subs}</span> subscribers</span> • {views} • {timestamp}</p>
            <p className="videoRow__description">{description}</p>   
            </div> 
        </div>
    )
}

export default VideoRow
