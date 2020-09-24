import React from 'react';

import shoes from './assets/images/bg-3.png';
import bg from './assets/images/bg.png';
import bg1 from './assets/images/bg-1.png';
import bg2 from './assets/images/bg-2.png';
import Ad from './assets/images/sections.png';
import product from './assets/images/product/Product/Image.png';
import product1 from './assets/images/product/Product/Image-1.png';
import product2 from './assets/images/product/Product/Image-2.png';
import product3 from './assets/images/product/Product/Image-3.png';
import product5 from './assets/images/product/Product/Image-5.png';
import product6 from './assets/images/product/Product/Image-6.png';
import banner from './assets/images/product/Banner.png';
import banner1 from './assets/images/product/Banner1.png';
import category from './assets/images/Category/image-1.png';
import category1 from './assets/images/Category/image-2.png';
import category2 from './assets/images/Category/image-3.png';
import category3 from './assets/images/Category/image-4.png';
import category4 from './assets/images/Category/image-5.png';
import category5 from './assets/images/Category/image-6.png';
import category6 from './assets/images/Category/image.png';
import category7 from './assets/images/Category/image-7.png';
import TV from './assets/images/tv.svg';
import Plug from './assets/images/plug.svg';
import Tshirt from './assets/images/tshirt.svg';
import Football from './assets/images/futball.svg';
import Audio from './assets/images/audio.svg';
import Babies from './assets/images/babies.svg';
import Laptop from './assets/images/laptop.svg';
//import Audio from './assets/images/audio.svg';
import Heart from './assets/images/heart.svg';

function App() {
  return (
    <div class="bg-gray-100 antialiased text-gray-400">
      {/* header */}
      <div class="bg-white font-semibold tracking-wide uppercase">
        <div class=" flex w-10/12 mx-auto justify-between items-center text-sm  ">
          <h2 class="flex  ">
            Shopping Hotline{' '}
            <span class="text-blue ml-1">: +233 55 377 2583</span>
          </h2>
          <div class="flex py-3">
            <h2 class="flex items-center  mr-3">
              <svg
                class="mr-1 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <title>bx-help-circle</title>
                <g fill="currentColor">
                  <path
                    d="M16 8a5.252 5.252 0 0 0-5.245 5.245h2.666c0-1.422 1.158-2.578 2.579-2.578s2.579 1.156 2.579 2.578c0 .798-.642 1.376-1.622 2.168-.34.276-.661.539-.921.799-1.33 1.33-1.37 2.741-1.37 2.899V20h2.667l-.001-.844c.001-.021.044-.515.588-1.057.2-.2.452-.4.713-.611 1.039-.841 2.61-2.112 2.61-4.243A5.25 5.25 0 0 0 16 8zm-1.333 13.333h2.666V24h-2.666v-2.667zM16 2.667C8.648 2.667 2.667 8.648 2.667 16S8.648 29.333 16 29.333 29.333 23.352 29.333 16 23.352 2.667 16 2.667zm0 24C10.119 26.667 5.333 21.88 5.333 16S10.12 5.333 16 5.333 26.667 10.12 26.667 16 21.88 26.667 16 26.667z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              Guide and Support
            </h2>
            <h2 class="flex items-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-1 w-6 h-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>clock</title>
                <g fill="none" stroke="#111111">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </g>
              </svg>
              Recently Viewed
            </h2>
            <h2 class="flex items-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-1 w-6 h-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>users</title>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  fill="none"
                  stroke="#111111"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </g>
              </svg>
              Affiliate program
            </h2>
            <h2 class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                class="mr-1 w-6 h-6"
                viewBox="0 0 24 24"
              >
                <title>user</title>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  fill="none"
                  stroke="#111111"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              Login or Register
            </h2>
          </div>
        </div>
      </div>
      {/* search */}
      <div class="bg-ivory">
        <div class="w-10/12 flex mx-auto py-8">
          <div class="w-1/4"></div>
          <div class="w-1/2 ">
            <div class="flex w-full">
              <select class="bg-gray-200 py-2 px-4 text-black-200 font-medium ">
                <option value="">All Category</option>
                <option value="">All Category</option>
              </select>
              <input
                type="text"
                placeholder="Search for products"
                class=" px-3 text-xs w-2/3 bg-gray-input text-gray-text border border-gray-border"
              />
              <button class="text-white bg-blue flex items-center px-2 font-roboto font-medium text-sm ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="mr-2 ml-2"
                >
                  <title>search</title>
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                  </g>
                </svg>
                <span class="mr-2">Search</span>
              </button>
            </div>
          </div>

          <div class="w-1/4 flex items-center ">
            <div class="ml-auto mr-2 flex">
              <svg
                width="28"
                height="27"
                viewBox="0 0 28 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-4"
              >
                <path
                  d="M20.84 7.60999C20.3292 7.099 19.7228 6.69364 19.0554 6.41708C18.3879 6.14052 17.6725 5.99817 16.95 5.99817C16.2275 5.99817 15.5121 6.14052 14.8446 6.41708C14.1772 6.69364 13.5708 7.099 13.06 7.60999L12 8.66999L10.94 7.60999C9.9083 6.5783 8.50903 5.9987 7.05 5.9987C5.59096 5.9987 4.19169 6.5783 3.16 7.60999C2.1283 8.64169 1.54871 10.041 1.54871 11.5C1.54871 12.959 2.1283 14.3583 3.16 15.39L4.22 16.45L12 24.23L19.78 16.45L20.84 15.39C21.351 14.8792 21.7563 14.2728 22.0329 13.6053C22.3095 12.9379 22.4518 12.2225 22.4518 11.5C22.4518 10.7775 22.3095 10.0621 22.0329 9.39464C21.7563 8.72718 21.351 8.12075 20.84 7.60999V7.60999Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="22" cy="6" r="6" fill="#FD7E14" />
                <path
                  d="M24.1758 6.13672C24.1758 7.1237 24.0195 7.86068 23.707 8.34766C23.3971 8.83464 22.9219 9.07812 22.2812 9.07812C21.6667 9.07812 21.1992 8.82943 20.8789 8.33203C20.5586 7.83203 20.3984 7.10026 20.3984 6.13672C20.3984 5.14193 20.5534 4.40365 20.8633 3.92188C21.1732 3.4401 21.6458 3.19922 22.2812 3.19922C22.901 3.19922 23.3711 3.45052 23.6914 3.95312C24.0143 4.45573 24.1758 5.18359 24.1758 6.13672ZM21.0547 6.13672C21.0547 6.96745 21.1523 7.57292 21.3477 7.95312C21.543 8.33073 21.8542 8.51953 22.2812 8.51953C22.7135 8.51953 23.026 8.32812 23.2188 7.94531C23.4141 7.5599 23.5117 6.95703 23.5117 6.13672C23.5117 5.31641 23.4141 4.71615 23.2188 4.33594C23.026 3.95312 22.7135 3.76172 22.2812 3.76172C21.8542 3.76172 21.543 3.95052 21.3477 4.32812C21.1523 4.70312 21.0547 5.30599 21.0547 6.13672Z"
                  fill="black"
                />
              </svg>
              <svg
                width="29"
                height="27"
                viewBox="0 0 29 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 25C9.55228 25 10 24.5523 10 24C10 23.4477 9.55228 23 9 23C8.44772 23 8 23.4477 8 24C8 24.5523 8.44772 25 9 25Z"
                  stroke="#212429"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 25C20.5523 25 21 24.5523 21 24C21 23.4477 20.5523 23 20 23C19.4477 23 19 23.4477 19 24C19 24.5523 19.4477 25 20 25Z"
                  stroke="#212429"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 4H5L7.68 17.39C7.77144 17.8504 8.02191 18.264 8.38755 18.5583C8.75318 18.8526 9.2107 19.009 9.68 19H19.4C19.8693 19.009 20.3268 18.8526 20.6925 18.5583C21.0581 18.264 21.3086 17.8504 21.4 17.39L23 9H6"
                  stroke="#212429"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="23" cy="6" r="6" fill="#FD7E14" />
                <path
                  d="M25.1758 6.13672C25.1758 7.1237 25.0195 7.86068 24.707 8.34766C24.3971 8.83464 23.9219 9.07812 23.2812 9.07812C22.6667 9.07812 22.1992 8.82943 21.8789 8.33203C21.5586 7.83203 21.3984 7.10026 21.3984 6.13672C21.3984 5.14193 21.5534 4.40365 21.8633 3.92188C22.1732 3.4401 22.6458 3.19922 23.2812 3.19922C23.901 3.19922 24.3711 3.45052 24.6914 3.95312C25.0143 4.45573 25.1758 5.18359 25.1758 6.13672ZM22.0547 6.13672C22.0547 6.96745 22.1523 7.57292 22.3477 7.95312C22.543 8.33073 22.8542 8.51953 23.2812 8.51953C23.7135 8.51953 24.026 8.32812 24.2188 7.94531C24.4141 7.5599 24.5117 6.95703 24.5117 6.13672C24.5117 5.31641 24.4141 4.71615 24.2188 4.33594C24.026 3.95312 23.7135 3.76172 23.2812 3.76172C22.8542 3.76172 22.543 3.95052 22.3477 4.32812C22.1523 4.70312 22.0547 5.30599 22.0547 6.13672Z"
                  fill="black"
                />
              </svg>
            </div>
            <div class="mr-8 font-semibold font-roboto text-sm text-gray-400">
              <h5>Shopping Cart</h5>
              <p>$0.00</p>
            </div>
          </div>
        </div>
      </div>
      {/* menu */}
      <div class="bg-blue">
        <div class="flex w-10/12 mx-auto">
          <div class="w-1/4 bg-black-100 flex items-center text-white py-3 px-2 ">
            <svg
              class="mr-4 text-white"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 8.33337H2.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 5H2.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 11.6666H2.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 15H2.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            All departments
          </div>
          <div class=" w-8/12 flex items-center justify-between text-white px-12 text-xs">
            <div class="flex items-center ">
              <select class="bg-blue text-white">
                <option value="">Home</option>
              </select>
            </div>
            <div class="flex items-center">
              <select class="bg-blue text-white">
                <option value="">Shop</option>
              </select>
            </div>
            <div class="flex items-center">
              <select class="bg-blue text-white">
                <option value="">Electronic Devices</option>
              </select>
            </div>
            <div class="flex items-center font-medium">
              <select class="bg-blue text-white">
                <option value="">Become A Vendor</option>
              </select>
            </div>
          </div>
          <div class="w-1/12 text-sm uppercase py-4 text-white">
            Flash deals
          </div>
        </div>
      </div>
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
      {/* flash sales title */}

      <div class="w-10/12 mx-auto mb-8">
        <div class="flex justify-between items-baseline ">
          <h1 class="text-3xl text-black-100 font-medium">Shop Flash Deals</h1>
          <div class="text-white font-medium tracking-widest uppercase bg-red py-1 px-8 rounded-sm text-xs">
            Deals End in <span class="text-sm">:48:05:07</span>
          </div>
        </div>
      </div>
      {/* flash sales */}
      <div class="flex mx-3 mt-8">
        <div class=" mr-12 flex items-center">
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
        <div class="w-full">
          <div class="bg-white flex py-12 px-16 -mx-4">
            <div class="w-1/4 px-4">
              <img src={product} alt="product" />
              <h2 class="text-xs uppercase tracking-widest text-gray-title font-semibold">
                Amazon
              </h2>
              <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                Alexa
              </h1>
              <div class=" font-medium text-gray-400">
                Vendor :{' '}
                <span class="text-black-100 font-bold"> Abril Copeland</span>
                <div class="flex justify-between items-center mt-2">
                  <p class="text-red font-bold text-2xl">$152.99</p>
                  <button class="font-semibold text-orange rounded-sm p-3 border border-orange">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div class="w-1/4 px-4">
              <img src={product1} alt="product" />
              <h2 class="text-xs uppercase tracking-widest text-gray-title font-semibold">
                Apple
              </h2>
              <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                Iphone 6s
              </h1>
              <div class=" font-medium text-gray-400">
                Vendor :{' '}
                <span class="text-black-100 font-bold"> Juliet Size</span>
                <div class="flex justify-between items-center mt-2">
                  <p class="text-red font-bold text-2xl">$499.99</p>
                  <button class="font-semibold text-orange rounded-sm p-3 border border-orange">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div class="w-1/4 px-4">
              <img src={product2} alt="product" />
              <h2 class="text-xs uppercase tracking-widest text-gray-title font-semibold">
                Apple
              </h2>
              <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                Ipad Series 3
              </h1>
              <div class=" font-medium text-gray-400">
                Vendor :{' '}
                <span class="text-black-100 font-bold"> Abril Copeland</span>
                <div class="flex justify-between items-center mt-2">
                  <p class="text-red font-bold text-2xl">$152.99</p>
                  <button class="font-semibold text-orange rounded-sm p-3 border border-orange">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div class="w-1/4 px-4">
              <img src={product3} alt="product" />
              <h2 class="text-xs uppercase tracking-widest text-gray-title font-semibold">
                Amazon
              </h2>
              <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                Alexa
              </h1>
              <div class=" font-medium text-gray-400">
                Vendor :{' '}
                <span class="text-black-100 font-bold"> Abril Copeland</span>
                <div class="flex justify-between items-center mt-2">
                  <p class="text-red font-bold text-2xl">$152.99</p>
                  <button class="font-semibold text-orange rounded-sm p-3 border border-orange">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class=" ml-12 flex items-center">
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
      {/* buttons */}
      <div class="w-full mt-4 text-center">
        <span class="bg-blue w-3 h-3  rounded-full mr-2 inline-block"></span>
        <span class="bg-gray-200 w-3 h-3  rounded-full mr-2 inline-block"></span>
        <span class="bg-gray-200 w-3 h-3 rounded-full  inline-block"></span>
      </div>
      <div class="mt-12 mb-16 flex ">
        <img src={Ad} alt="ad" class=" w-10/12 mx-auto " />
      </div>
      <div class="w-10/12 mx-auto mt-8 mb-4">
        <div class="flex justify-between items-baseline ">
          <h1 class="text-3xl text-black-100 font-medium">
            Most Popular Categories
          </h1>
          <div class="text-blue flex text-sm font-semibold">
            See all categories{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="w-5 h-5 "
            >
              <title>chevron-right</title>
              <g fill="none">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="mx-24">
        <div class="bg-white w-full">
          <div class="flex py-12 px-16 -mx-4">
            <div class="w-1/4 px-4">
              <img src={category7} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm  text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-4">
              <img src={category} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-4">
              <img src={category2} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-4">
              <img src={category4} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm text-center font-medium">Category</h2>
            </div>
          </div>
          <div class="flex mb-4 py-12 px-16 -mx-4">
            <div class="w-1/4 px-4">
              <img src={category6} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm  text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-4">
              <img src={category1} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-4">
              <img src={category3} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-4">
              <img src={category5} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm text-center font-medium">Category</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="w-10/12 mx-auto mt-8 mb-4">
        <div class="flex justify-between items-baseline ">
          <h1 class="text-3xl text-black-100 font-medium">Top Electronics</h1>

          <div class="flex text-sm items-center font-medium">
            <div class="mr-12 text-white bg-black-100 p-1 rounded-sm">
              Electronics Accessories
            </div>
            <div class="mr-12 text-xs text-black-200">Electronic details</div>
            <div class="mr-12 text-xs text-black-200">TV & Home Appliances</div>
            <div class="text-blue font-semibold">See all products</div>
          </div>
        </div>
      </div>

      <div class="mx-24">
        <div class="bg-white w-full">
          <div class="flex py-12 px-16 -mx-4 ">
            <div class="w-1/4 px-4">
              <img src={banner} alt="category" />
            </div>
            <div class="w-3/4 px-4 pt-12">
              <div class="flex -mx-4 ">
                <div class="w-1/3 px-4 ">
                  <img src={product} alt="product" />
                  <h2 class="text-xs uppercase tracking-widest text-gray-title font-semibold">
                    Amazon
                  </h2>
                  <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                    Alexa
                  </h1>
                  <div class=" font-medium text-gray-400">
                    Vendor :{' '}
                    <span class="text-black-100 font-bold">
                      {' '}
                      Abril Copeland
                    </span>
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-red font-bold text-2xl">$152.99</p>
                      <button class="font-semibold text-orange rounded-sm p-3 border border-orange">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-1/3 px-4">
                  <img src={product5} alt="product" />
                  <h2 class="text-xs uppercase tracking-widest text-gray-title font-semibold">
                    Amazon
                  </h2>
                  <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                    Alexa
                  </h1>
                  <div class=" font-medium text-gray-400">
                    Vendor :{' '}
                    <span class="text-black-100 font-bold">
                      {' '}
                      Abril Copeland
                    </span>
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-red font-bold text-2xl">$152.99</p>
                      <button class="font-semibold text-orange rounded-sm p-3 border border-orange">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-1/3 px-4 ">
                  <img src={product6} alt="product" />
                  <h2 class="text-xs uppercase tracking-widest text-gray-title font-semibold">
                    Amazon
                  </h2>
                  <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                    Alexa
                  </h1>
                  <div class=" font-medium text-gray-400">
                    Vendor :{' '}
                    <span class="text-black-100 font-bold">
                      {' '}
                      Abril Copeland
                    </span>
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-red font-bold text-2xl">$152.99</p>
                      <button class="font-semibold text-orange rounded-sm p-3 border border-orange">
                        Add To Cart
                      </button>
                    </div>
                    <div class="flex  items-baseline mt-8 ">
                      <div class="bg-ivory p-3 ml-auto mr-2">
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
                      <div class="bg-ivory p-3 mr-0 ">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-10/12 mx-auto mt-8 mb-4">
        <div class="flex justify-between items-baseline ">
          <h1 class="text-3xl text-black-100 font-medium">
            Top Fashion & Clothing
          </h1>

          <div class="flex text-sm items-center font-medium">
            <div class="mr-12 text-white bg-black-100 py-1 px-8 rounded-sm">
              Men Clothing
            </div>
            <div class="mr-12 text-xs text-black-200 ">Women Clothing</div>
            <div class="mr-12 text-xs text-black-200 ">
              Boys & Girls Clothing
            </div>
            <div class="text-blue font-semibold">See all products</div>
          </div>
        </div>
      </div>
      <div class="mx-24">
        <div class="bg-white w-full">
          <div class="flex py-12 px-16 -mx-4 ">
            <div class="w-3/4 px-4 pt-12">
              <div class="flex -mx-4 ">
                <div class="w-1/3 px-4 ">
                  <img src={product} alt="product" />
                  <h2 class="text-xs uppercase tracking-widest text-gray-title font-semibold">
                    Amazon
                  </h2>
                  <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                    Alexa
                  </h1>
                  <div class=" font-medium text-gray-400">
                    Vendor :{' '}
                    <span class="text-black-100 font-bold">
                      {' '}
                      Abril Copeland
                    </span>
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-red font-bold text-2xl">$152.99</p>
                      <button class="font-semibold text-orange rounded-sm p-3 border border-orange">
                        Add To Cart
                      </button>
                    </div>
                    <div class="flex  items-baseline mt-8 ">
                      <div class="bg-ivory p-3 ml-0">
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
                      <div class="bg-ivory p-3 mr-auto ml-2 ">
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
                <div class="w-1/3 px-4 ">
                  <img src={product5} alt="product" />
                  <h2 class="text-xs uppercase tracking-widest text-gray-title font-semibold">
                    Amazon
                  </h2>
                  <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                    Alexa
                  </h1>
                  <div class=" font-medium text-gray-400">
                    Vendor :{' '}
                    <span class="text-black-100 font-bold">
                      {' '}
                      Abril Copeland
                    </span>
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-red font-bold text-2xl">$152.99</p>
                      <button class="font-semibold text-orange rounded-sm p-3 border border-orange">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-1/3 px-4">
                  <img src={product6} alt="product" />
                  <h2 class="text-xs uppercase tracking-widest text-gray-title font-semibold">
                    Amazon
                  </h2>
                  <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                    Alexa
                  </h1>
                  <div class=" font-medium text-gray-400">
                    Vendor :{' '}
                    <span class="text-black-100 font-bold">
                      {' '}
                      Abril Copeland
                    </span>
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-red font-bold text-2xl">$152.99</p>
                      <button class="font-semibold text-orange rounded-sm p-3 border border-orange">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/4 px-4">
              <img src={banner1} alt="category" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white mt-32 p-24 w-full font-roboto">
        <div class="flex">
          <div class="w-1/5">
            <h4 class="font-bold text-sm mb-2 text-black-100">Contact Us</h4>
            <h5 class="font-bold text-xs uppercase mb-2 text-black-100 tracking-widest">
              Hotline: 658 567-5839
            </h5>
            <p class="text-sm text-gray-300 mb-2 mr-8">
              7039 Grandrose St. Lumberton, NC 28358{' '}
            </p>
            <p class="text-blue text-sm">contact@company.com</p>
          </div>
          <div class="w-1/5">
            <h4 class="font-bold text-sm mb-2 text-black-100">About Us</h4>
            <ul class="text-gray-300">
              <li class="text-sm mb-2">About Company</li>
              <li class="text-sm mb-2">Sell</li>
              <li class="text-sm mb-2">Affilliate Program</li>
              <li class="text-sm mb-2">Terms & Conditions</li>
              <li class="text-sm mb-2">Privacy</li>
            </ul>
          </div>
          <div class="w-1/5">
            <h4 class="font-bold text-sm mb-2 text-black-100">Help & Guide</h4>
            <ul class="text-gray-300">
              <li class="text-sm mb-2">Help Center</li>
              <li class="text-sm mb-2">How to Buy</li>
              <li class="text-sm mb-2">Shipping & Delivery</li>
              <li class="text-sm mb-2">Product Policy</li>
            </ul>
          </div>
          <div class="w-2/5">
            <h4 class="font-bold text-sm mb-2 text-black-100 font-montserrat">
              Subscribe Newsletter
            </h4>

            <p class="text-sm mb-2 mr-8 text-gray-300 ">
              Dont miss out on Thousands of super cool Products and Promotions
            </p>
            <div class="flex w-full">
              <input
                type="text"
                placeholder="Enter your email here..."
                class=" px-3 text-xs w-2/3 mr-2 bg-gray-100 text-gray-600 py-3"
              />
              <button class="text-white bg-blue flex items-center px-3 text-xs ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-between text-sm mt-32 text-gray-400">
          <p class="font-montserrat">&copy; 2020 Company</p>
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="mb-3"
            >
              <title>bxl-twitter</title>
              <g fill="currentColor">
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="mb-3"
            >
              <title>bxl-facebook</title>
              <g fill="currentColor">
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>bxl-instagram</title>
              <g fill="currentColor">
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
              </g>
            </svg>
          </div>
          <div class="flex">
            <p class="mr-8">Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
