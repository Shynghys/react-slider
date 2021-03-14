
import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SlickSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [{ src: 'http://placekitten.com/g/400/400', type: 'cat' }, { src: 'http://placekitten.com/g/800/400', type: 'cat' }, { src: 'http://placekitten.com/g/1400/1200', type: 'cat' }, { src: 'http://placekitten.com/g/800/800', type: 'cat' }, { src: 'https://placedog.net/500/280', type: 'dog' }, { src: 'https://placedog.net/600/380', type: 'dog' }],
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                speed: 1000,
                autoplaySpeed: 2000,
                cssEase: "linear",
                pauseOnHover: true,
                infinite: true,
            }
        }
    }
    render() {
        const allAnimals = [{ src: 'http://placekitten.com/g/400/400', type: 'cat' }, { src: 'http://placekitten.com/g/800/400', type: 'cat' }, { src: 'http://placekitten.com/g/1400/1200', type: 'cat' }, { src: 'http://placekitten.com/g/800/800', type: 'cat' }, { src: 'https://placedog.net/500/280', type: 'dog' }, { src: 'https://placedog.net/600/380', type: 'dog' }];
        return (
            <div>
                <div className="container">
                    <Slider {...this.settings}>
                        {this.state.animals.map((animal) =>
                            <div >
                                <img src={animal.src} alt={animal.type} />
                            </div>
                        )}

                    </Slider>
                    <button onClick={() => this.setState({ animals: this.state.animals.filter(animal => animal.type === 'cat') })}>Only cats!</button>
                    <button onClick={() => this.setState({ animals: allAnimals })}>All</button>
                </div>

            </div>
        );
    }
}

export default SlickSlider