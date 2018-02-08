import React, { Component } from 'react';
import Slider from 'react-slick';
import ColorChart from './ColorChart'

class SliderComponent extends Component {
    render () {
        var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        };
        return (
        <Slider {...settings}>
            <div><h3><ColorChart /></h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
        </Slider>
        );
    }
}

export default SliderComponent;