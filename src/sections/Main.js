import React from 'react';

import Ad from '../assets/images/sections.png';
import product from '../assets/images/product/Product/Image.png';
import product1 from '../assets/images/product/Product/Image-1.png';
import product2 from '../assets/images/product/Product/Image-2.png';
import product3 from '../assets/images/product/Product/Image-3.png';
import product5 from '../assets/images/product/Product/Image-5.png';
import product6 from '../assets/images/product/Product/Image-6.png';
import banner from '../assets/images/product/Banner.png';
import banner1 from '../assets/images/product/Banner1.png';
import category from '../assets/images/Category/image-1.png';
import category1 from '../assets/images/Category/image-2.png';
import category2 from '../assets/images/Category/image-3.png';
import category3 from '../assets/images/Category/image-4.png';
import category4 from '../assets/images/Category/image-5.png';
import category5 from '../assets/images/Category/image-6.png';
import category6 from '../assets/images/Category/image.png';
import category7 from '../assets/images/Category/image-7.png';

export default function Main() {
  return (
    <>
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
    </>
  );
}
