import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj"
            channel="Clever Programmer"
            verified
            subs="380K"
            noOfVideos={290}
            description="You can find awesome programming lessons here! Also expect programming tips and tricks that will take your coding skills to..."
            />
            <hr/>
            <VideoRow 
            img="http://i3.ytimg.com/vi/8N4Ls6WmlyM/maxresdefault.jpg"
            title="VS Code Explained in 60 Seconds" 
            channelName="Clever Programmer"
            subs="380K"
            views="7,783 views"
            timestamp="2 days ago"
            description="Do you want a FREE Training on How to Build the Netflix Clone? 👇https://event.webinarjam.com/register..."/>  
 
            <VideoRow 
            img="http://i3.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
            title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners" 
            channelName="Clever Programmer"
            subs="380K"
            views="127,821 views"
            timestamp="Jul 29, 2020"
            description="Do you want a FREE one hpour training ... Check this out..."/>  
               <VideoRow 
            img="http://i3.ytimg.com/vi/uP-U9vFfZwo/maxresdefault.jpg"
            title="Profit with JavaScript - How We Started the BEST JavaScript Course on the Planet" 
            channelName="Clever Programmer"
            subs="380K"
            views="7,848 views"
            timestamp="Dec 29, 2020 "
            description="Do you want to become a 6-figure developer with JavaScript? Check out the best JavaScript course on the planet 👉 https://www.cleverprogrammer.com/pwj"/> 
             <VideoRow 
            img="http://i3.ytimg.com/vi/ByOPqVzGvJw/maxresdefault.jpg"
            title="My Advice for New Programmers (Things I Wish I Knew)" 
            channelName="Clever Programmer"
            subs="380K"
            views="25,796 views"
            timestamp=" Dec 26, 2020 "
            description="Want to master React JS and land a job 👉 https://CleverProgrammer.com/pwj 
            In this video I talk about what you need to master to get past being a beginner developer."/>   
              <VideoRow 
            img="http://i3.ytimg.com/vi/-bjJetWnNZg/maxresdefault.jpg"
            title="Backend Developer Guide 2021" 
            channelName="Clever Programmer"
            subs="380K"
            views="21,937 views"
            timestamp=" Dec 25, 2020 "
            description="Do you want a FREE Training on How to Build the Netflix Clone? 👇https://event.webinarjam.com/register..."/>
               <VideoRow 
            img="http://i3.ytimg.com/vi/CUGPbZ77OuQ/maxresdefault.jpg"
            title="🔴 Learn React JS with Me (for Beginners)" 
            channelName="Clever Programmer"
            subs="380K"
            views="28,436 views"
            timestamp=" Dec 18, 2020 "
            description="Register for the FREE Whiteboard Webinar Training that teaches you how to become a profitable software developer in 2021 and beyond 👉 https://event.webinarjam.com/register..."/>
                <VideoRow 
            img="http://i3.ytimg.com/vi/zeqJ-GppCDI/maxresdefault.jpg"
            title="Why I felt depressed last year and how I got out of it (mental health for developers)" 
            channelName="Clever Programmer"
            subs="380K"
            views="11,555 views"
            timestamp=" Dec 11, 2020 "
            description="Do you want to learn how to beat depression, get back on track with tons of accountability and start taking action to CHANGE your life with me and my team?"/>
            <VideoRow 
            img="http://i3.ytimg.com/vi/McEKVnUjV3c/maxresdefault.jpg"
            title="My life as a programmer (my story)" 
            channelName="Clever Programmer"
            subs="380K"
            views="29,270views"
            timestamp=" Nov 11, 2020 "
            description="Learn my exact 8-step system to BURST through procrastination, break down your income barriers and earn your first $1K or more with Python... https://cleverprogrammer.io/earn-1k"/>
       
        

        </div>
    )
}

export default SearchPage
