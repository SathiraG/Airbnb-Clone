// const lastIndex = prop.img.length - 1
    // console.log(lastIndex)
    //className={prop.img[lastIndex] ? "opacity-0":""}
import React, { useState } from 'react';

export default function CardComponent(prop){

    const [x, setX] = useState(0);

    const cardRight = () => {
        if (x < prop.img.length - 1) {
          setX(x + 1);
        } else {
          // Set a class to the right arrow when x reaches the maximum index
          document.getElementById('rightArrow').classList.add('visibility-0');
        }
      };
      //   if(x===2){
        //     document.getElementById('rightArrow').classList.add('visibility-0');
        //   }
    
      const cardLeft = () => {
        if (x > 0) {
          setX(x - 1);
        }
      };    
    return(
        <div className="card">
            <div className="card-arrow">
                <div className={x === 0 ? "visibility-0" : ""}><i className="ri-arrow-left-line" onClick={cardLeft}></i></div>
                <div id='rightArrow' ><i class="ri-arrow-right-line" onClick={cardRight}></i></div>
            </div>
            <img src={`./images/Cards/${prop.img[x]}`} alt="" />
            <div className="card-text">
                <div>
                    <p className="bold">{prop.title}</p>
                    <p>{prop.description}</p>
                    <p>{prop.dates}</p>
                    <p className="card-price"><span className="bold">Rs {prop.price}</span> night</p>
                </div>
                <div>
                    <p><i class="ri-star-s-fill"></i> {prop.ratings}</p>
                </div>

            </div>
        </div>
    )
}