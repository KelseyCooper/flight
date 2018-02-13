import React, { Component } from 'react';
import Slider from 'react-slick';
import ColorChart from '../containers/ColorChart';
import GenderChart from '../containers/GenderChart';
import AgeChart from "../containers/AgeChart";

class SliderComponent extends Component {
    render () {
        var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true
        };
        return (
            <Slider {...settings}>
            <div><h3><ColorChart /></h3></div>
            <div><h3><GenderChart /></h3></div>
            <div><h3><AgeChart /></h3></div>
        </Slider>
        );
    }
}

export default SliderComponent;