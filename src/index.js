import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class ReactSlick extends React.Component {
  constructor(props) {
    super(props);

    const [animals, setAnimals] = useState([])
    this.state = {
      animals: [{ src: 'http://placekitten.com/g/400/400', type: 'cat' }, { src: 'http://placekitten.com/g/800/400', type: 'cat' }, { src: 'http://placekitten.com/g/1400/1200', type: 'cat' }, { src: 'http://placekitten.com/g/800/800', type: 'cat' }, { src: 'https://placedog.net/500/280', type: 'dog' }, { src: 'https://placedog.net/600/380', type: 'dog' }],
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        infinite: true,
      }
    }

  }

  arrayToCats(animals) {
    this.setAnimals(animals.filter(animal => animal.type === 'cat'))
  }

  render() {
    return (
      <div>
        <div className="container">
          <Slider {...this.settings}>
            {this.animals.map((animal) =>
              <div >
                <img src={animal.src} alt={animal.type} />
              </div>
            )}
          </Slider>
        </div>
        <button onClick={this.arrayToCats(this.animals)}>Only cats!</button>
      </div >
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ReactSlick />
  </React.StrictMode >,
  document.getElementById('container')
);
