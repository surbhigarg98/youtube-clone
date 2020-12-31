import { Avatar } from '@material-ui/core'
import React from 'react'
import VideoCard from './VideoCard'
import './VideoSection.css'

function VideoSection() {
    return (
        <div className="videoSection">
         <h2>Recommended</h2>
      <div className="videoSection__container">
      <VideoCard
         image="http://i3.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
         ChannelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj"
         title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"   
         Channel="Clever Programmer"
         views="127,821 views"
         timestamp="Jul 29, 2020"  
         />
         <VideoCard
         image="http://i3.ytimg.com/vi/5uf7BzRBZwA/hqdefault.jpg"
         ChannelImage="//yt3.ggpht.com/ytc/AAUvwnjtWMudv9hT2_AH9PBHQcjpjU6hZTGnJfBxWewP=s48-c-k-c0xffffffff-no-nd-rj-mo"
         title="Ritviz - Liggi [Official Music Video]"   
         Channel="RITVIZ"
         views="87,826,122 views"
         timestamp="Dec 23, 2019"  
         />
         <VideoCard
         image="http://i3.ytimg.com/vi/hj_XHjnHrhI/maxresdefault.jpg"
         ChannelImage="https://yt3.ggpht.com/ytc/AAUvwnibKAf8ZWlWiZs4CJ3lGbXzl8IfWfzVycMabPpJdHQ=s88-c-k-c0x00ffffff-no-rj"
         title="🔴 The Ultimate Roadmap to Success as a Full-Stack developer in 2021 (PROJECT X REVEAL)"   
         Channel="Sonny Sangha"
         views="26,122 views"
         timestamp="Dec 31, 2020"  
         />
          <VideoCard
         image="http://i3.ytimg.com/vi/RsEZmictANA/hqdefault.jpg"
         ChannelImage="//yt3.ggpht.com/ytc/AAUvwnhNORMY-JuggrilsyPBCJL7YI_KcpiAQyQOeEKyGa0=s48-c-k-c0xffffffff-no-nd-rj-mo"
         title="taylor swift - willow (official music video)"   
         Channel="Taylor Swift"
         views="42,657,078 views"
         timestamp="Dec 11, 2020"  
         />
          <VideoCard
         image="http://i3.ytimg.com/vi/M2PcLUqxjuE/maxresdefault.jpg"
         ChannelImage="https://yt3.ggpht.com/ytc/AAUvwninBO2clpS6QYtcm4OT2RrDbLL2a4uRW9YqpUbcDg=s48-c-k-c0xffffffff-no-rj-mo"
         title="Top 2021 Marketing Strategies to Get Your Business the Most Attention Possible"   
         Channel="GaryVee"
         views="108,695 views"
         timestamp="Dec 17, 2020"  
         />
         <VideoCard
         image="http://i3.ytimg.com/vi/xvkh20mTvJQ/maxresdefault.jpg"
         ChannelImage="https://yt3.ggpht.com/ytc/AAUvwnj1emnl6QU53AJq1RUpjvHRiKrV6eM0S67oiZc2bd4=s88-c-k-c0x00ffffff-no-rj"
         title="0 to 100k Subscribers: My Total YouTube Earning | YouTube से आज तक कितना Paisa कमाया"   
         Channel="Aksh Verma"
         views="109,180 views"
         timestamp="Sep 9, 2020"  
         />
         <VideoCard
         image="http://i3.ytimg.com/vi/uD27CZEiuGk/hqdefault.jpg"
         ChannelImage="https://yt3.ggpht.com/ytc/AAUvwngAFkYK5AVn9PZLSUj4hJ5RH3MVlQ-XyLfY9shx=s88-c-k-c0x00ffffff-no-rj"
         title="How To Become a Full Stack Developer In 2020"   
         Channel="TiffInTech"
         views="32,959 views"
         timestamp="Nov 25, 2020"  
         />
         <VideoCard
         image="http://i3.ytimg.com/vi/3RLm7vFUYPU/maxresdefault.jpg"
         ChannelImage="https://yt3.ggpht.com/ytc/AAUvwngWlGNYaaHLBosaiLCZIv5ChxXdmRNuqIRLKh5GGA=s48-c-k-c0xffffffff-no-rj-mo"
         title="Study With Me *10 HOURS* (with talking during breaks)"   
         Channel="Study Vibes"
         views="76,617 views"
         timestamp="Oct 26, 2020"  
         />
         <VideoCard
         image="http://i3.ytimg.com/vi/5uf7BzRBZwA/hqdefault.jpg"
         ChannelImage="//yt3.ggpht.com/ytc/AAUvwnjtWMudv9hT2_AH9PBHQcjpjU6hZTGnJfBxWewP=s48-c-k-c0xffffffff-no-nd-rj-mo"
         title="Ritviz - Liggi [Official Music Video]"   
         Channel="RITVIZ"
         views="87,826,122 views"
         timestamp="Dec 23, 2019"  
         />
           <VideoCard
         image="http://i3.ytimg.com/vi/RsEZmictANA/hqdefault.jpg"
         ChannelImage="//yt3.ggpht.com/ytc/AAUvwnhNORMY-JuggrilsyPBCJL7YI_KcpiAQyQOeEKyGa0=s48-c-k-c0xffffffff-no-nd-rj-mo"
         title="taylor swift - willow (official music video)"   
         Channel="Taylor Swift"
         views="42,657,078 views"
         timestamp="Dec 11, 2020"  
         />
         

      </div>
      </div>
    )
}

export default VideoSection
