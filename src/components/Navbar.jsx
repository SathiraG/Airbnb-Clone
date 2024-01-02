import React from "react";
import logo from "../assets/logo.png"
import logoS from "../assets/logo-single.png"

export default function (){
    return(
        <nav>
            <div className="navContent">
                <img className="brand-logo" src={window.innerWidth < 657 ? logoS : logo} alt="Airbnb Logo" />
                <div className="navMiddleDiv">
                    <div>Anywhere</div>
                    <div className="middle">Anyweek</div>
                    <div>Add</div><i style={{color:"#FF5A5F"}} className="ri-search-line"></i>
                </div>
                {window.innerWidth<517 ? "": <div className="navEndDiv">
                    Airbnb your home 
                    <i class="ri-global-line"></i> 
                    <div style={{display:"flex"}}>
                        <i class="ri-menu-line"></i><i class="ri-account-circle-line"></i>
                    </div>
                </div>}
            </div>
        </nav>
    )
}