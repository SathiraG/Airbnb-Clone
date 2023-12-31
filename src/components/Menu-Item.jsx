export default function(prop){
    return(
        <div className="catergory">
            <div className={"catergory-item" + (prop.active === true ? " active" : "")}>
                <img src={`./images/Menu/${prop.img}`} alt="" />
                <p>{prop.text}</p>
            </div>
        </div>   
    )
}