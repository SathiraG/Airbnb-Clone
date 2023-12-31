import React from "react";
import MenuItem from "./Menu-Item"
import MenuData from "./MenuData"

const menulist = MenuData.map(item => {
    return (
        <MenuItem 
            img={item.img}
            text={item.text}
            active={item.active}
        />
    )
})  

export default function (){
    return(
        <div className="container menu">
            {menulist}         
            <div className="filter">
                <i class="ri-equalizer-line"></i> Filter
            </div>
        </div>
    )
}