/** @format */

import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { useValueDispatch } from "../../../reducer/ValuePro";
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        border: "6px solid black",
        width: "40px",
        height: "40px",
        transform: "rotate(45deg)",
        borderBottom: "none",
        borderLeft: "none",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        border: "6px solid black",
        width: "40px",
        height: "40px",
        transform: "rotate(225deg)",
        borderBottom: "none",
        borderLeft: "none",
      }}
      onClick={onClick}
    />
  );
};

const SimpleSlider = () => {
  const disfatch = useValueDispatch();
  const showMaxCnt = 2;
  const arr = Array.from(new Array(3));
  const settings = {
    infinite: arr.length > showMaxCnt,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0px",
    touchThreshold: 100,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const handleMouseHover = (e) => {
    console.log("마우스 오버한값입니다.", e.target.alt);
    disfatch({ type: "MOUSEHOVER", alt: e.target.alt });
  };
  const handleMouseOut = () => {
    disfatch({ type: "MOUSEHOVER", alt: null });
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <h3>Netflix</h3>
          <a
            href="https://thseogns-netflix.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/project/Netfle.png`}
              alt="Netfle"
              onMouseEnter={handleMouseHover}
              onMouseOut={handleMouseOut}
            />
          </a>
        </div>
        <div>
          <h3>H&M</h3>
          <a
            href="https://sonhnm.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/project/Hnm.png`}
              alt="Hnm"
              onMouseEnter={handleMouseHover}
              onMouseOut={handleMouseOut}
            />
          </a>
        </div>
        <div>
          <h3>TsTodoList</h3>
          <a
            href="https://creative-nasturtium-945124.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/project/TsTodoList.png`}
              alt="tsTodo"
              onMouseEnter={handleMouseHover}
              onMouseOut={handleMouseOut}
            />
          </a>
        </div>
        <div>
          <h3>타이어테크</h3>
          <a
            href="https://thseogns.github.io/tire/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/project/tire.png`}
              alt="tire"
              onMouseEnter={handleMouseHover}
              onMouseOut={handleMouseOut}
            />
          </a>
        </div>

        <div>
          <h3>Airbnb</h3>
          <a
            href="https://fancy-swan-aa03d0.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/project/air.png`}
              alt="air"
              onMouseEnter={handleMouseHover}
              onMouseOut={handleMouseOut}
            />
          </a>
        </div>
        <div>
          <h3>frizmworks</h3>
          <a
            href="https://thseogns.github.io/frizm/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/project/frz_title.png`}
              alt="frz_title"
              onMouseEnter={handleMouseHover}
              onMouseOut={handleMouseOut}
            />
          </a>
        </div>
        <div>
          <h3>movieList</h3>
          <a
            href="https://glistening-frangollo-0aa3f6.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/project/movieList.png`}
              alt="movieList"
              onMouseEnter={handleMouseHover}
              onMouseOut={handleMouseOut}
            />
          </a>
        </div>
      </Slider>
    </>
  );
};
export default SimpleSlider;

