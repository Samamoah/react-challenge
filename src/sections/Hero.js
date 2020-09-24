import React from 'react';
import TV from '../assets/images/tv.svg';
import Plug from '../assets/images/plug.svg';
import Tshirt from '../assets/images/tshirt.svg';
import Football from '../assets/images/futball.svg';
import Audio from '../assets/images/audio.svg';
import Babies from '../assets/images/babies.svg';
import Laptop from '../assets/images/laptop.svg';
import Heart from '../assets/images/heart.svg';
import shoes from '../assets/images/bg-3.png';
import bg from '../assets/images/bg.png';
import bg1 from '../assets/images/bg-1.png';
import bg2 from '../assets/images/bg-2.png';

export default function Hero() {
  return (
    <>
      {/* home */}
      <div class="w-10/12 mx-auto mb-8">
        <div class="flex">
          <div class="w-1/4">
            <div class="w-full">
              <ul class="bg-white  text-xs text-gray-light">
                <li class="flex items-center py-2 px-3   relative  border-t border-r border-l border-gray-300">
                  <img src={TV} alt="tv" class="mr-2" />
                  TV & Home Appliance
                  <div class="absolute w-1/2 bg-white right-0 block text-white">
                    .
                  </div>
                </li>
                <li class="flex items-center py-2 px-3   relative border-t border-r border-l border-gray-300">
                  <img src={Plug} alt="plug" class="mr-4" />
                  Electronic Accessories
                  <div class="absolute w-1/2 bg-white right-0 block text-white">
                    .
                  </div>
                </li>
                <li class="flex items-center py-2 px-3   relative border-t border-r border-l border-gray-300">
                  <img src={Laptop} alt="laptop" class="mr-2" />
                  Electronic Devices
                </li>
                <li class="flex items-center py-2 px-3   relative border-t border-r border-l border-gray-300">
                  <img src={Tshirt} alt="tshirt" class="mr-2" />
                  Fashion & Clothing
                  <div class="absolute w-1/2 bg-white right-0 block text-white">
                    .
                  </div>
                </li>
                <li class="flex items-center py-2 px-3   relative border-t border-r border-l border-gray-300">
                  <img src={Heart} alt="heart" class="mr-2" />
                  Health & Beauty
                  <div class="absolute w-1/2 bg-white right-0 block text-white">
                    .
                  </div>
                </li>
                <li class="flex items-center py-2 px-3   relative border-t border-r border-l border-gray-300">
                  <img src={Football} alt="football" class="mr-2" />
                  Sports & Travel
                  <div class="absolute w-1/2 bg-white right-0 block text-white">
                    .
                  </div>
                </li>
                <li class="flex items-center py-2 px-3   relative border-t border-r border-l border-gray-300">
                  <img src={Babies} alt="babies" class="mr-2" />
                  Babies & Toys
                  <div class="absolute w-1/2 bg-white right-0 block text-white">
                    .
                  </div>
                </li>
                <li class="flex items-center py-2 px-3 relative  border border-gray-300">
                  <img src={Audio} alt="audio" class="mr-2" />
                  Home Theatre
                  <div class="absolute w-1/2 bg-white right-0 block text-white">
                    .
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-3/4 pl-2 pt-2">
            <div class="w-full bg-white px-4  py-5">
              <div class="flex">
                <div class=" flex items-center">
                  <div class="bg-ivory p-3 mx-auto">
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div class="">
                  <div class="flex items-center justify-between">
                    <div class="w-3/5">
                      <div class="w-9/12 mx-auto text-black-light mt-16">
                        <h2 class="uppercase font-bold text-xs mb-3 tracking-wider">
                          Daily Offer Available
                        </h2>
                        <h2 class="uppercase font-bold text-xl mb-3 tracking-tight">
                          Ultra Boost 20
                        </h2>
                        <p class="mb-8 text-gray-400 font-medium leading-5 text-base">
                          Endless energy return and instant comfort with each
                          wide to keep you going further.
                        </p>
                        <button class="bg-blue text-white py-3 px-8">
                          Shop Now
                        </button>
                      </div>
                    </div>
                    <div class="w-2/5">
                      <img src={shoes} alt="shoes" />
                    </div>
                  </div>
                  <div class="w-full mt-4 text-center">
                    <span class="bg-blue w-3 h-3  rounded-full mr-2 inline-block"></span>
                    <span class="bg-gray-200 w-3 h-3  rounded-full mr-2 inline-block"></span>
                    <span class="bg-gray-200 w-3 h-3 rounded-full  inline-block"></span>
                  </div>
                </div>

                <div class=" flex items-center">
                  <div class="bg-ivory p-3 mx-auto">
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex mt-2 -mx-1">
              <img src={bg} alt="shoes" class="w-1/3 px-1" />
              <img src={bg1} alt="shoes" class="w-1/3 px-1" />
              <img src={bg2} alt="shoes" class="w-1/3 px-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
