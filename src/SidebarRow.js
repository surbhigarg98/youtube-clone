import React from 'react'
import './Siderow.css'

function SidebarRow({selected,title,Icon}) {
    return (
        <div className={`siderow ${selected && 'selected'}`}>
         <Icon  className="siderow__icon"/>
         <h2 className="title">{title}</h2>
        </div>
    )
}

export default SidebarRow