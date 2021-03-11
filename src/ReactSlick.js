import React, { useState } from "react";

import Slider from "react-slick";
import "./index.css";



const ReactSlick = () => {
    const [animals, setAnimals] = useState([])
    animals = [{ src: 'http://placekitten.com/g/400/400', type: 'cat' }, { src: 'http://placekitten.com/g/800/400', type: 'cat' }, { src: 'http://placekitten.com/g/1400/1200', type: 'cat' }, { src: 'http://placekitten.com/g/800/800', type: 'cat' }, { src: 'https://placedog.net/500/280', type: 'dog' }, { src: 'https://placedog.net/600/380', type: 'dog' }]

    const arrayToCats = (animals) => {
        setAnimals(animals.filter(animal => animal.type === 'cat'))

    }
    var settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        infinite: true,
    };



    return (
        <div>
            <div className="container">
                <Slider {...settings}>
                    {animals.map((animal) =>
                        <div >
                            <img src={animal.src} alt={animal.type} />
                        </div>
                    )}
                </Slider>

            </div>
            {/* onClick={ } */}
            <button onClick={arrayToCats(animals)}>Only cats!</button>
        </div >
    );
}



export default ReactSlick