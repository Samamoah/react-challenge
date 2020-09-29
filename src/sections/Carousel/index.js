import React, { useState, useEffect, useRef } from 'react';

import shoes from '../../assets/images/bg-3.png';
import jersey from '../../assets/images/Category/image-5.png';
import jersey2 from '../../assets/images/product/Product/Image-5.png';

import './style.css';

export default function Index() {
  var [currentSlide, setCurrentSlide] = useState(0);
  var [autoPlay] = useState(2);
  var [slides] = useState([
    {
      subtitle: 'Daily Offer Available',
      product: 'Ultra Boost 20',
      caption:
        'Endless energy return and instant comfort with each wide to keep you going furthed.',
      image: shoes,
      button: 'Shop Now',
    },
    {
      subtitle: 'Deal of the Day',
      product: 'Android HD Led TV',
      caption:
        'Endless energy return and instant comfort with each wide to keep you going furthed.',
      image: jersey,
      button: 'Try it now',
    },
    {
      subtitle: '40% off',
      product: 'Bluetooth Speaker',
      caption:
        'Endless energy return and instant comfort with each wide to keep you going furthed.',
      image: jersey2,
      button: 'Learn how',
    },
  ]);

  function prevSlide() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(slides.length - 1);
    }
  }
  function nextSlide() {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function showSlides(slide) {
    if (document.getElementsByClassName('slides').length > 0) {
      var slides = document.getElementsByClassName('slides');
      for (var i = 0; i < slides.length; i++) {
        if (i === slide) {
          slides[i].style.display = 'block';
        } else {
          slides[i].style.display = 'none';
        }
      }
    }
  }

  const autoPlayRef = useRef();
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, autoPlay * 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    showSlides(currentSlide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);
  return (
    <>
      <div className="w-full relative flex" style={{ height: '360px' }}>
        <div className=" absolute left-0 top-0 mt-40 z-10 ml-4 ">
          <button
            className="bg-ivory p-3 mx-auto outline-none hover:bg-gray-100 hover:border-none focus:outline-none active:outline-none transition duration-500 ease-in-out"
            onClick={() => {
              prevSlide();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>chevron-left</title>
              <g fill="none">
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="#495057"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        {slides.map((slide, i) => (
          <div
            className="flex flex-col px-4 py-5 bg-white w-full h-full slides absolute"
            key={slide + i}
          >
            <div className="flex items-center justify-between w-10/12 mx-auto ">
              <div className="w-3/5">
                <div className="w-9/12 mx-auto text-black-light mt-16 mySlides  transition duration-500 ease-in-out">
                  <h2 className="uppercase font-bold text-xs mb-3 tracking-wider w-full  ">
                    {slide.subtitle}
                  </h2>
                  <h2 className="uppercase font-bold text-xl mb-3 tracking-tight w-full ">
                    {slide.product}
                  </h2>
                  <p
                    className="mb-8 text-gray-400 leading-5 "
                    style={{ fontSize: '15px' }}
                  >
                    {slide.caption}
                  </p>

                  <button className="bg-blue text-white py-3 px-8">
                    {slide.button}
                  </button>
                </div>
              </div>
              <div className="w-2/5">
                <img
                  src={slides[currentSlide].image}
                  alt="shoes"
                  className="w-full h-full "
                />
              </div>
            </div>
          </div>
        ))}
        <div className="w-full mt-4 mb-2 text-center absolute z-10 bottom-0 mb-8">
          <button
            onClick={() => {
              setCurrentSlide(0);
            }}
            className={`${
              currentSlide === 0 ? 'bg-blue' : 'bg-gray-200'
            } w-3 h-3  rounded-full mr-2 inline-block transition duration-500 ease-in-out outline-none hover:bg-gray-100 hover:border-none focus:outline-none active:outline-none focus:outline-0`}
          ></button>
          <button
            onClick={() => {
              setCurrentSlide(1);
            }}
            className={`${
              currentSlide === 1 ? 'bg-blue' : 'bg-gray-200'
            } w-3 h-3  rounded-full mr-2 inline-block transition duration-500 ease-in-out outline-none hover:bg-gray-100 hover:border-none focus:outline-none active:outline-none focus:outline-0`}
          ></button>
          <button
            onClick={() => {
              setCurrentSlide(2);
            }}
            className={`${
              currentSlide === 2 ? 'bg-blue' : 'bg-gray-200'
            } w-3 h-3  rounded-full mr-2 inline-block transition duration-500 ease-in-out outline-none hover:bg-gray-100 hover:border-none focus:outline-none active:outline-none focus:outline-0`}
          ></button>
        </div>

        <div className=" flex items-center absolute right-0 top-0 mt-40 z-10 mr-4">
          <button
            className="bg-ivory p-3 mx-auto outline-none hover:bg-gray-100 hover:border-none focus:outline-none active:outline-none transition duration-500 ease-in-out"
            onClick={() => {
              nextSlide();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>chevron-right</title>
              <g fill="none">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="#495057"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
