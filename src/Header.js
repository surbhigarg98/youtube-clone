import React,{useState} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Apps, SearchOutlined, VideoCall,Notifications } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
  const [input , setInput] = useState('')
    return (
        <div className="header">
          <div className="header__left">
          <MenuIcon/>
          <Link to="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="logo" 
            className="header__logo"/>
          </Link>
          </div>
          <div className="header__input">
              <input type="text" placeholder="  Search" value={input} onChange={(e)=>setInput(e.target.value)}/>
              <Link to={`/search/${input}`}>
              <SearchOutlined className="header__inputIcon"/>
              </Link>
          </div>
          <div className="header__right">
             <IconButton>
             <VideoCall/>
             </IconButton>
             <IconButton>
             <Apps/> 
             </IconButton>
              <IconButton>
              <Notifications/>
              </IconButton>
            <IconButton>
            <Avatar/>    
              </IconButton> 
          </div>
        </div>
    )
}

export default Header
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            