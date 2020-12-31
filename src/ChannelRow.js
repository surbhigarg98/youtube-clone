import { Avatar } from '@material-ui/core'
import { CheckCircle} from '@material-ui/icons'
import './ChannelRow.css'
import React from 'react'

function ChannelRow({image,channel,verified,subs,noOfVideos,description}) {
    return (
        <div className="channelRow">
            <Avatar src={image} alt="logo" className="channelRow__logo"/>
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircle className="channelRow__icon"/>}</h4>
                <p>{subs} subscribers • {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
