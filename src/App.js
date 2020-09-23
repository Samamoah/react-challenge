import React from 'react';

import shoes from './assets/images/bg-3.png';
import bg from './assets/images/bg.png';
import bg1 from './assets/images/bg-1.png';
import bg2 from './assets/images/bg-2.png';
import product from './assets/images/product/Product/Image.png';
import product1 from './assets/images/product/Product/Image-1.png';
import product2 from './assets/images/product/Product/Image-2.png';
import product3 from './assets/images/product/Product/Image-3.png';
import category from './assets/images/Category/image-1.png';
import category1 from './assets/images/Category/image-2.png';
import category2 from './assets/images/Category/image-3.png';
import category3 from './assets/images/Category/image-4.png';
import category4 from './assets/images/Category/image-5.png';
import category5 from './assets/images/Category/image-6.png';

function App() {
  return (
    <div class="bg-gray-100  text-gray-700">
      {/* header */}
      <div class="bg-white">
        <div class=" flex w-10/12 mx-auto justify-between items-center text-sm font-medium uppercase">
          <h2 class="flex">
            Shopping Hotline{' '}
            <span class="text-blue-200 ml-1">: +233 55 377 2583</span>
          </h2>
          <div class="flex py-2">
            <h2 class="flex items-center  mr-2">
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
            <h2 class="flex items-center mr-2">
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
              Recently Viewed
            </h2>
            <h2 class="flex items-center mr-2">
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
              Affiliate program
            </h2>
            <h2 class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                class="mr-1 w-6 h-6"
              >
                <title>bx-help-circle</title>
                <g fill="currentColor">
                  <path
                    d="M16 8a5.252 5.252 0 0 0-5.245 5.245h2.666c0-1.422 1.158-2.578 2.579-2.578s2.579 1.156 2.579 2.578c0 .798-.642 1.376-1.622 2.168-.34.276-.661.539-.921.799-1.33 1.33-1.37 2.741-1.37 2.899V20h2.667l-.001-.844c.001-.021.044-.515.588-1.057.2-.2.452-.4.713-.611 1.039-.841 2.61-2.112 2.61-4.243A5.25 5.25 0 0 0 16 8zm-1.333 13.333h2.666V24h-2.666v-2.667zM16 2.667C8.648 2.667 2.667 8.648 2.667 16S8.648 29.333 16 29.333 29.333 23.352 29.333 16 23.352 2.667 16 2.667zm0 24C10.119 26.667 5.333 21.88 5.333 16S10.12 5.333 16 5.333 26.667 10.12 26.667 16 21.88 26.667 16 26.667z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              Login or Register
            </h2>
          </div>
        </div>
      </div>
      {/* search */}
      <div class="bg-orange-100">
        <div class="w-10/12 flex mx-auto py-8">
          <div class="w-1/4"></div>
          <div class="w-1/2 ">
            <div class="flex w-full">
              <select class="bg-gray-200 py-2 px-2 font-medium">
                <option value="">All Category</option>
                <option value="">All Category</option>
              </select>
              <input
                type="text"
                placeholder="Search for products"
                class=" px-3 text-xs w-2/3 bg-gray-100 border border-gray-300"
              />
              <button class="text-white bg-blue-300 flex items-center  ">
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
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                class="w-6 h-6 mr-4"
              >
                <title>heart-2</title>
                <g
                  stroke-linecap="square"
                  stroke-linejoin="miter"
                  stroke-width="2"
                  fill="#111111"
                  stroke="#111111"
                >
                  <path
                    fill="none"
                    stroke="#111111"
                    stroke-miterlimit="10"
                    d="M42.485,7.515 c-4.686-4.686-12.284-4.686-16.97,0c-0.577,0.577-1.08,1.2-1.515,1.854c-0.435-0.654-0.938-1.277-1.515-1.854 c-4.686-4.686-12.284-4.686-16.97,0c-4.686,4.686-4.686,12.284,0,16.971L24,42.971l18.485-18.485 C47.172,19.799,47.172,12.201,42.485,7.515z"
                  ></path>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>search</title>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  fill="none"
                  stroke="#111111"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="M21 21l-4.35-4.35"></path>
                </g>
              </svg>
            </div>
            <div class="mr-8">
              <h5 class="text-sm font-medium">Shopping Cart</h5>
              <p class="text-sm font-medium">$0.00</p>
            </div>
          </div>
        </div>
      </div>
      {/* menu */}
      <div class="bg-blue-400">
        <div class="flex w-10/12 mx-auto">
          <div class="w-1/4 bg-black flex items-center text-white py-4 px-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="mr-4 text-white"
            >
              <title>menu</title>
              <g fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            All departments
          </div>
          <div class=" w-8/12 flex items-center justify-between text-white px-12 text-sm">
            <div class="flex items-center">
              Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="ml-2"
              >
                <title>chevron-down</title>
                <g fill="none" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="flex items-center">
              Shop
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="ml-2"
              >
                <title>chevron-down</title>
                <g fill="none" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="flex items-center">
              Electronics Devices
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="ml-2"
              >
                <title>chevron-down</title>
                <g fill="none" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="flex items-center">
              Become A Vendor
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="ml-2"
              >
                <title>chevron-down</title>
                <g fill="none" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </g>
              </svg>
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
              <ul class="bg-white border border-gray-200">
                <li class="flex items-center py-2 px-3 text-gray-500 text-sm border border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="mr-2"
                  >
                    <title>ic_tv_24px</title>
                    <g fill="currentColor">
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path>
                    </g>
                  </svg>
                  TV & Home Appliance
                </li>
                <li class="flex items-center py-2 px-3 text-gray-500 text-sm border border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="mr-2"
                  >
                    <title>ic_tv_24px</title>
                    <g fill="currentColor">
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path>
                    </g>
                  </svg>
                  TV & Home Appliance
                </li>
                <li class="flex items-center py-2 px-3 text-gray-500 text-sm border border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="mr-2"
                  >
                    <title>ic_tv_24px</title>
                    <g fill="currentColor">
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path>
                    </g>
                  </svg>
                  TV & Home Appliance
                </li>
                <li class="flex items-center py-2 px-3 text-gray-500 text-sm border border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="mr-2"
                  >
                    <title>ic_tv_24px</title>
                    <g fill="currentColor">
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path>
                    </g>
                  </svg>
                  TV & Home Appliance
                </li>
                <li class="flex items-center py-2 px-3 text-gray-500 text-sm border border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="mr-2"
                  >
                    <title>ic_tv_24px</title>
                    <g fill="currentColor">
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path>
                    </g>
                  </svg>
                  TV & Home Appliance
                </li>
                <li class="flex items-center py-2 px-3 text-gray-500 text-sm border border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="mr-2"
                  >
                    <title>ic_tv_24px</title>
                    <g fill="currentColor">
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path>
                    </g>
                  </svg>
                  TV & Home Appliance
                </li>
                <li class="flex items-center py-2 px-3 text-gray-500 text-sm border border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="mr-2"
                  >
                    <title>ic_tv_24px</title>
                    <g fill="currentColor">
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path>
                    </g>
                  </svg>
                  TV & Home Appliance
                </li>
                <li class="flex items-center py-2 px-3 text-gray-500 text-sm border border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="mr-2"
                  >
                    <title>ic_tv_24px</title>
                    <g fill="currentColor">
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path>
                    </g>
                  </svg>
                  TV & Home Appliance
                </li>
              </ul>
            </div>
          </div>
          <div class="w-3/4 pl-2 pt-2">
            <div class="w-full bg-white px-4  py-4">
              <div class="flex">
                <div class="w-1/12 flex items-center">
                  <div class="bg-orange-200 p-3 mx-auto">
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
                          stroke="#4A5568"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div class="w-10/12">
                  <div class="flex   items-center">
                    <div class="w-1/2">
                      <div class="w-9/12 mx-auto text-black mt-16">
                        <h2 class="uppercase font-medium text-sm mb-4">
                          Daily Offer Available
                        </h2>
                        <h2 class="uppercase font-bold text-2xl mb-4">
                          Ultra Boost 20
                        </h2>
                        <p class="mb-8">
                          Endless energy return and instant comfort with each
                          wide to keep you going further.
                        </p>
                        <button class="bg-blue-300 text-white py-4 px-8">
                          Shop Now
                        </button>
                      </div>
                    </div>
                    <div class="w-1/2">
                      <img src={shoes} alt="shoes" />
                    </div>
                  </div>
                  <div class="w-full mt-8 text-center">
                    <span class="bg-blue-200 w-4 h-4 mx-auto rounded-full mr-3 inline-block"></span>
                    <span class="bg-gray-200 w-4 h-4 mx-auto rounded-full mr-3 inline-block"></span>
                    <span class="bg-gray-200 w-4 h-4 mx-auto rounded-full  inline-block"></span>
                  </div>
                </div>

                <div class="w-1/12 flex items-center">
                  <div class="bg-orange-200 p-3 mx-auto">
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
                          stroke="#4A5568"
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
            <div class="flex mt-2">
              <img src={bg} alt="shoes" class="mr-2" />
              <img src={bg1} alt="shoes" class="mr-2" />
              <img src={bg2} alt="shoes" />
            </div>
          </div>
        </div>
      </div>
      {/* flash sales title */}
      <div class="w-10/12 mx-auto mb-8">
        <div class="flex justify-between items-baseline ">
          <h1 class="text-2xl font-medium">Shop Flash Deals</h1>
          <div class="text-white uppercase bg-red-600 py-1 px-8 rounded-sm text-xs">
            Deals End in <span class="text-sm">:48:05:07</span>
          </div>
        </div>
      </div>
      {/* flash sales */}
      <div class="flex mx-3 mt-8">
        <div class=" mr-12 flex items-center">
          <div class="bg-orange-200 p-3 mx-auto">
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
                  stroke="#4A5568"
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
              <h2 class="text-xs uppercase font-medium">Amazon</h2>
              <h1 class="text-2xl uppercase font-bold mb-1">Alexa</h1>
              <div>
                Vendor : <span class="font-medium"> Abril Copeland</span>
                <div class="flex justify-between items-center mt-2">
                  <p class="text-red-600 font-bold text-2xl">$152.99</p>
                  <button class="font-medium text-orange-600 rounded-sm p-3 border border-orange-600">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div class="w-1/4 px-4">
              <img src={product1} alt="product" />
              <h2 class="text-xs uppercase font-medium">Amazon</h2>
              <h1 class="text-2xl uppercase font-bold mb-1">Alexa</h1>
              <div>
                Vendor : <span class="font-medium"> Abril Copeland</span>
                <div class="flex justify-between items-center mt-2">
                  <p class="text-red-600 font-bold text-2xl">$152.99</p>
                  <button class="font-medium text-orange-600 rounded-sm p-3 border border-orange-600">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div class="w-1/4 px-4">
              <img src={product2} alt="product" />
              <h2 class="text-xs uppercase font-medium">Amazon</h2>
              <h1 class="text-2xl uppercase font-bold mb-1">Alexa</h1>
              <div>
                Vendor : <span class="font-medium"> Abril Copeland</span>
                <div class="flex justify-between items-center mt-2">
                  <p class="text-red-600 font-bold text-2xl">$152.99</p>
                  <button class="font-medium text-orange-600 rounded-sm p-3 border border-orange-600">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div class="w-1/4 px-4">
              <img src={product3} alt="product" />
              <h2 class="text-xs uppercase font-medium">Amazon</h2>
              <h1 class="text-2xl uppercase font-bold mb-1">Alexa</h1>
              <div>
                Vendor : <span class="font-medium"> Abril Copeland</span>
                <div class="flex justify-between items-center mt-2">
                  <p class="text-red-600 font-bold text-2xl">$152.99</p>
                  <button class="font-medium text-orange-600 rounded-sm p-3 border border-orange-600">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class=" ml-12 flex items-center">
          <div class="bg-orange-200 p-3 mx-auto">
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
                  stroke="#4A5568"
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
        <span class="bg-blue-200 w-4 h-4 mx-auto rounded-full mr-3 inline-block"></span>
        <span class="bg-gray-200 w-4 h-4 mx-auto rounded-full mr-3 inline-block"></span>
        <span class="bg-gray-200 w-4 h-4 mx-auto rounded-full  inline-block"></span>
      </div>
      <div class="w-10/12 mx-auto mt-8 mb-4">
        <div class="flex justify-between items-baseline ">
          <h1 class="text-2xl font-medium">Most Popular Categories</h1>
          <div class="text-blue-600 flex text-sm">
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
          <div class="flex py-12 px-16 -mx-8">
            <div class="w-1/4 px-8">
              <img src={category} alt="category" />
              <h2 class="text-xs text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-8">
              <img src={category1} alt="category" />
              <h2 class="text-xs text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-8">
              <img src={category2} alt="category" />
              <h2 class="text-xs text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-8">
              <img src={category3} alt="category" />
              <h2 class="text-xs text-center font-medium">Category</h2>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '200px' }}></div>
      </div>
    </div>
  );
}

export default App;
