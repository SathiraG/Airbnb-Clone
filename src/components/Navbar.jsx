import React from "react";
import logo from "../assets/logo.png"

export default function (){
    return(
        <nav>
            <div className="navContent">
                <img src={logo} alt="Airbnb Logo" />
                <div className="navMiddleDiv">
                    <div>Anywhere</div>
                    <div className="middle">Anyweek</div>
                    <div>Add</div><i className="ri-search-line"></i>
                </div>
                <div className="navEndDiv">
                    Airbnb your home 
                    <i class="ri-global-line"></i> 
                    <div style={{display:"flex"}}>
                        <i class="ri-menu-line"></i><i class="ri-account-circle-line"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}