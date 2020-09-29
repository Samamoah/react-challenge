import React from 'react';
import Slider from './Slider';
import TV from '../assets/images/tv.svg';
import Plug from '../assets/images/plug.svg';
import Tshirt from '../assets/images/tshirt.svg';
import Football from '../assets/images/futball.svg';
import Audio from '../assets/images/audio.svg';
import Babies from '../assets/images/babies.svg';
import Laptop from '../assets/images/laptop.svg';
import Heart from '../assets/images/heart.svg';
import bg from '../assets/images/bg.png';
import bg1 from '../assets/images/bg-1.png';
import bg2 from '../assets/images/bg-2.png';

//import './slide.js';

export default function Hero() {
  return (
    <>
      {/* home */}
      <div className="w-10/12 mx-auto mb-8">
        <div className="flex">
          <div className="w-64">
            <div className="w-full">
              <ul className="bg-white  text-xs text-gray-light">
                <li className="flex items-center py-2 px-3   relative  border-t border-r border-l border-gray-300">
                  <img src={TV} alt="tv" className="mr-2" />
                  TV & Home Appliance
                  <div className="absolute w-1/2 bg-white right-0 block text-white">
                    .
                  </div>
                </li>
                <li className="flex items-center py-2 px-3   relative border-t border-r border-l border-gray-300">
                  <img src={Plug} alt="plug" className="mr-4" />
                  Electronic Accessories
                  <div className="absolute w-1/2 bg-white right-0 block text-white">
                    .
                  </div>
                </li>
                <li className="flex items-center py-2 px-3   relative border-t border-r border-l border-gray-300">
                  <img src={Laptop} alt="laptop" className="mr-2" />
                  Electronic Devices
                </li>
                <li className="flex items-center py-2 px-3   relative border-t border-r border-l border-gray-300">
                  <img src={Tshirt} alt="tshirt" className="mr-2" />
                  Fashion & Clothing
                  <div className="absolute w-1/2 bg-white right-0 block text-white">
                    .
                  </div>
                </li>
                <li className="flex items-center py-2 px-3   relative border-t border-r border-l border-gray-300">
                  <img src={Heart} alt="heart" className="mr-2" />
                  Health & Beauty
                  <div className="absolute w-1/2 bg-white right-0 block text-white">
                    .
                  </div>
                </li>
                <li className="flex items-center py-2 px-3   relative border-t border-r border-l border-gray-300">
                  <img src={Football} alt="football" className="mr-2" />
                  Sports & Travel
                  <div className="absolute w-1/2 bg-white right-0 block text-white">
                    .
                  </div>
                </li>
                <li className="flex items-center py-2 px-3   relative border-t border-r border-l border-gray-300">
                  <img src={Babies} alt="babies" className="mr-2" />
                  Babies & Toys
                  <div className="absolute w-1/2 bg-white right-0 block text-white">
                    .
                  </div>
                </li>
                <li className="flex items-center py-2 px-3 relative  border border-gray-300">
                  <img src={Audio} alt="audio" className="mr-2" />
                  Home Theatre
                  <div className="absolute w-1/2 bg-white right-0 block text-white">
                    .
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-9/12 pl-2 pt-2">
            <Slider />
            <div className="flex mt-2 -mx-1">
              <img src={bg} alt="shoes" className="w-1/3 px-1" />
              <img src={bg1} alt="shoes" className="w-1/3 px-1" />
              <img src={bg2} alt="shoes" className="w-1/3 px-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
