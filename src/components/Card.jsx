import React from "react";
import CardData from "./CardData"
import Card from "./CardComponent";

const cardlist = CardData.map(data=>{
    return(
        <Card 
            key={data.key}
            title={data.title}
            description={data.description}
            dates={data.dates}
            price={data.price}
            ratings={data.ratings}
            img={data.img}
        />
    )
})


export default function (){
    return(
        <div className="container">
            <div className="cards">
                    {cardlist}
                    <card className="card-ending">
                        <h3>Continue exploring tropical homes</h3>
                        <button>Show More</button>
                    </card>
            </div>
        </div>
    )
}