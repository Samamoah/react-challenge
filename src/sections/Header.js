import React from 'react';

export default function Header() {
  return (
    <>
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
    </>
  );
}
