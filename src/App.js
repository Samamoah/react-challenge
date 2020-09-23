import React from 'react';

import shoes from './assets/images/bg-3.png';
import bg from './assets/images/bg.png';
import bg1 from './assets/images/bg-1.png';
import bg2 from './assets/images/bg-2.png';
import product from './assets/images/product/Product/Image.png';
import product1 from './assets/images/product/Product/Image-1.png';
import product2 from './assets/images/product/Product/Image-2.png';
import product3 from './assets/images/product/Product/Image-3.png';
import banner from './assets/images/product/Banner.png';
import category from './assets/images/Category/image-1.png';
import category1 from './assets/images/Category/image-2.png';
import category2 from './assets/images/Category/image-3.png';
import category3 from './assets/images/Category/image-4.png';
import category4 from './assets/images/Category/image-5.png';
import category5 from './assets/images/Category/image-6.png';

function App() {
  return (
    <div class="bg-gray-100 antialiased text-gray-400">
      {/* header */}
      <div class="bg-white font-bold tracking-wide uppercase">
        <div class=" flex w-10/12 mx-auto justify-between items-center text-sm  ">
          <h2 class="flex  ">
            Shopping Hotline{' '}
            <span class="text-blue ml-1">: +233 55 377 2583</span>
          </h2>
          <div class="flex py-3">
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
      <div class="bg-ivory">
        <div class="w-10/12 flex mx-auto py-8">
          <div class="w-1/4"></div>
          <div class="w-1/2 ">
            <div class="flex w-full">
              <select class="bg-gray-200 py-2 px-2 text-black-200 font-medium border-blue border-t-2 border-b-2 border-l-2">
                <option value="">All Category</option>
                <option value="">All Category</option>
              </select>
              <input
                type="text"
                placeholder="Search for products"
                class=" px-3 text-xs w-2/3 bg-gray-input border-blue border-t-2 border-b-2 text-gray-text"
              />
              <button class="text-white bg-blue flex items-center  ">
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
            <div class="mr-8 font-bold text-gray-400">
              <h5 class="text-sm ">Shopping Cart</h5>
              <p class="text-sm ">$0.00</p>
            </div>
          </div>
        </div>
      </div>
      {/* menu */}
      <div class="bg-blue">
        <div class="flex w-10/12 mx-auto">
          <div class="w-1/4 bg-gray-500 flex items-center text-white py-4 px-2 ">
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
                      <div class="w-9/12 mx-auto text-black-light mt-16">
                        <h2 class="uppercase font-bold text-sm mb-4 tracking-wider">
                          Daily Offer Available
                        </h2>
                        <h2 class="uppercase font-bold text-2xl mb-4">
                          Ultra Boost 20
                        </h2>
                        <p class="mb-8 text-gray-400 font-medium">
                          Endless energy return and instant comfort with each
                          wide to keep you going further.
                        </p>
                        <button class="bg-blue text-white py-4 px-8">
                          Shop Now
                        </button>
                      </div>
                    </div>
                    <div class="w-1/2">
                      <img src={shoes} alt="shoes" />
                    </div>
                  </div>
                  <div class="w-full mt-8 text-center">
                    <span class="bg-blue w-4 h-4 mx-auto rounded-full mr-3 inline-block"></span>
                    <span class="bg-gray-200 w-4 h-4 mx-auto rounded-full mr-3 inline-block"></span>
                    <span class="bg-gray-200 w-4 h-4 mx-auto rounded-full  inline-block"></span>
                  </div>
                </div>

                <div class="w-1/12 flex items-center">
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
          <h1 class="text-2xl text-black-100 font-medium">Shop Flash Deals</h1>
          <div class="text-white uppercase bg-red py-1 px-8 rounded-sm text-xs">
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
              <h2 class="text-xs uppercase tracking-wider text-gray-title font-medium">
                Amazon
              </h2>
              <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                Alexa
              </h1>
              <div class="text-gray-400">
                Vendor :{' '}
                <span class="text-black-100 font-bold"> Abril Copeland</span>
                <div class="flex justify-between items-center mt-2">
                  <p class="text-red font-bold text-2xl">$152.99</p>
                  <button class="font-medium text-orange rounded-sm p-3 border border-orange">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div class="w-1/4 px-4">
              <img src={product1} alt="product" />
              <h2 class="text-xs uppercase tracking-wider text-gray-title font-medium">
                Amazon
              </h2>
              <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                Alexa
              </h1>
              <div class="text-gray-400">
                Vendor :{' '}
                <span class="text-black-100 font-bold"> Abril Copeland</span>
                <div class="flex justify-between items-center mt-2">
                  <p class="text-red font-bold text-2xl">$152.99</p>
                  <button class="font-medium text-orange rounded-sm p-3 border border-orange">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div class="w-1/4 px-4">
              <img src={product2} alt="product" />
              <h2 class="text-xs uppercase tracking-wider text-gray-title font-medium">
                Amazon
              </h2>
              <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                Alexa
              </h1>
              <div class="text-gray-400">
                Vendor :{' '}
                <span class="text-black-100 font-bold"> Abril Copeland</span>
                <div class="flex justify-between items-center mt-2">
                  <p class="text-red font-bold text-2xl">$152.99</p>
                  <button class="font-medium text-orange rounded-sm p-3 border border-orange">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div class="w-1/4 px-4">
              <img src={product3} alt="product" />
              <h2 class="text-xs uppercase tracking-wider text-gray-title font-medium">
                Amazon
              </h2>
              <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                Alexa
              </h1>
              <div class="text-gray-400">
                Vendor :{' '}
                <span class="text-black-100 font-bold"> Abril Copeland</span>
                <div class="flex justify-between items-center mt-2">
                  <p class="text-red font-bold text-2xl">$152.99</p>
                  <button class="font-medium text-orange rounded-sm p-3 border border-orange">
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
        <span class="bg-blue w-4 h-4 mx-auto rounded-full mr-3 inline-block"></span>
        <span class="bg-gray-200 w-4 h-4 mx-auto rounded-full mr-3 inline-block"></span>
        <span class="bg-gray-200 w-4 h-4 mx-auto rounded-full  inline-block"></span>
      </div>
      <div class="w-10/12 mx-auto mt-8 mb-4">
        <div class="flex justify-between items-baseline ">
          <h1 class="text-2xl text-black-100 font-medium">
            Most Popular Categories
          </h1>
          <div class="text-blue flex text-sm">
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
              <img src={category} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm  text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-4">
              <img src={category1} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-4">
              <img src={category2} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-4">
              <img src={category3} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm text-center font-medium">Category</h2>
            </div>
          </div>
          <div class="flex mb-4 py-12 px-16 -mx-4">
            <div class="w-1/4 px-4">
              <img src={category} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm  text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-4">
              <img src={category1} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-4">
              <img src={category2} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm text-center font-medium">Category</h2>
            </div>
            <div class="w-1/4 px-4">
              <img src={category3} alt="category" class="mx-auto mb-2" />
              <h2 class="text-sm text-center font-medium">Category</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="w-10/12 mx-auto mt-8 mb-4">
        <div class="flex justify-between items-baseline ">
          <h1 class="text-2xl text-black-100 font-medium">Top Electronics</h1>

          <div class="flex text-sm items-center font-medium">
            <div class="mr-12 text-white bg-black-100 p-1 rounded-sm">
              Electronics Accessories
            </div>
            <div class="mr-12 text-xs text-black-200">Electronic details</div>
            <div class="mr-12 text-xs text-black-200">TV & Home Appliances</div>
            <div class="text-blue ">See all products</div>
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
                  <h2 class="text-xs uppercase tracking-wider text-gray-title font-medium">
                    Amazon
                  </h2>
                  <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                    Alexa
                  </h1>
                  <div class="text-gray-400">
                    Vendor :{' '}
                    <span class="text-black-100 font-bold">
                      {' '}
                      Abril Copeland
                    </span>
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-red font-bold text-2xl">$152.99</p>
                      <button class="font-medium text-orange rounded-sm p-3 border border-orange">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-1/3 px-4">
                  <img src={product} alt="product" />
                  <h2 class="text-xs uppercase tracking-wider text-gray-title font-medium">
                    Amazon
                  </h2>
                  <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                    Alexa
                  </h1>
                  <div class="text-gray-400">
                    Vendor :{' '}
                    <span class="text-black-100 font-bold">
                      {' '}
                      Abril Copeland
                    </span>
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-red font-bold text-2xl">$152.99</p>
                      <button class="font-medium text-orange rounded-sm p-3 border border-orange">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-1/3 px-4 ">
                  <img src={product} alt="product" />
                  <h2 class="text-xs uppercase tracking-wider text-gray-title font-medium">
                    Amazon
                  </h2>
                  <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                    Alexa
                  </h1>
                  <div class="text-gray-400">
                    Vendor :{' '}
                    <span class="text-black-100 font-bold">
                      {' '}
                      Abril Copeland
                    </span>
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-red font-bold text-2xl">$152.99</p>
                      <button class="font-medium text-orange rounded-sm p-3 border border-orange">
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
                              stroke="#4A5568"
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-10/12 mx-auto mt-8 mb-4">
        <div class="flex justify-between items-baseline ">
          <h1 class="text-2xl text-black-100 font-medium">
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
            <div class="text-blue ">See all products</div>
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
                  <h2 class="text-xs uppercase tracking-wider text-gray-title font-medium">
                    Amazon
                  </h2>
                  <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                    Alexa
                  </h1>
                  <div class="text-gray-400">
                    Vendor :{' '}
                    <span class="text-black-100 font-bold">
                      {' '}
                      Abril Copeland
                    </span>
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-red font-bold text-2xl">$152.99</p>
                      <button class="font-medium text-orange rounded-sm p-3 border border-orange">
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
                              stroke="#4A5568"
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
                <div class="w-1/3 px-4 ">
                  <img src={product} alt="product" />
                  <h2 class="text-xs uppercase tracking-wider text-gray-title font-medium">
                    Amazon
                  </h2>
                  <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                    Alexa
                  </h1>
                  <div class="text-gray-400">
                    Vendor :{' '}
                    <span class="text-black-100 font-bold">
                      {' '}
                      Abril Copeland
                    </span>
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-red font-bold text-2xl">$152.99</p>
                      <button class="font-medium text-orange rounded-sm p-3 border border-orange">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-1/3 px-4">
                  <img src={product} alt="product" />
                  <h2 class="text-xs uppercase tracking-wider text-gray-title font-medium">
                    Amazon
                  </h2>
                  <h1 class="text-2xl uppercase font-bold mb-1 text-black-100">
                    Alexa
                  </h1>
                  <div class="text-gray-400">
                    Vendor :{' '}
                    <span class="text-black-100 font-bold">
                      {' '}
                      Abril Copeland
                    </span>
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-red font-bold text-2xl">$152.99</p>
                      <button class="font-medium text-orange rounded-sm p-3 border border-orange">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/4 px-4">
              <img src={banner} alt="category" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white mt-32 p-24 w-full">
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
            <h4 class="font-bold text-sm mb-2 text-black-100">
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
          <p>&copy; 2020 Company</p>
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
