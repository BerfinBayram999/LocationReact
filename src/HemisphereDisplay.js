import React from "react";
import kuzeyYarim from "./image/kuzeyyarim.png"
import guneyYarim from "./image/güneyyarim.png"
import './Hemisphere.css'

const hemisphereConfig={
    Kuzey:{
        text:"Konum Kuzey Yarım kürede yer almaktadır.",
        picture:kuzeyYarim
    },
    Guney:{
        text:"Konum Güney Yarım kürede yer almaktadır.",
        picture:guneyYarim
    }
}
const HemisphereDisplay = ({ latitude }) => {

    console.log(latitude)
    const hemisphere = latitude > 0 ? 'Kuzey' : 'Guney';
    const {text,picture} = hemisphereConfig[hemisphere]

    return (
        <div className={hemisphere}>
             <img src={picture} alt="" style={{ "width": "500px", "height": "200px" }} />        
             {text}
        </div>
    )
}


export default HemisphereDisplay;