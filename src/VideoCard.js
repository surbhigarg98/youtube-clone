import React from 'react'
import './VideoCard.css'
import { Avatar } from '@material-ui/core'

function VideoCard({image,title,Channel,views,timestamp,ChannelImage}) {
    return (
        <div className="videoCard">
             <img src={image} alt="image"
          className="videoCard__image"/>
          <div className="videoCard__info">
              <Avatar src={ChannelImage}
              className="videoCard__avatar"/>
              <div className="videoCard__text">
                  <h4>{title}</h4>
                  <p>{Channel}</p>
                  <p>{views} • {timestamp}</p>
              </div>
          </div>
        </div>
    )
}

export default VideoCard
