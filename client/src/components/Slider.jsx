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
            <div><GenderChart /></div>
            <div><AgeChart /></div>
            <div><ColorChart /></div>
        </Slider>
        );
    }
}

export default SliderComponent;