import React from 'react'
import { tShirt,rightImage } from '@/assets'
function Test() {
  return (
    <section class="py-24 2xl:py-44 bg-white ">
  <div class="container px-4 mx-auto">
    <div class="flex items-stretch flex-wrap -mx-3">
      <div class="w-full md:w-1/3 px-3 mb-16 md:mb-0">
        <div class="mx-auto max-w-max">
          <img class="mb-6 xl:mb-10 max-w-md w-full rounded-7xl" src={tShirt} alt=""/>
          <div class="inline-block py-1 px-3 mb-2 text-xs text-blue-500 font-heading font-semibold bg-white border border-blue-500 rounded-3xl">-10%</div>
          <a class="block mb-5 text-4xl font-heading font-medium hover:underline" href="#">Oppo Reno 5</a>
          <p class="flex items-center mb-6 xl:mb-10 text-xl text-blue-500 font-heading font-medium tracking-tighter">
            <span class="mr-2 text-xs">$</span>
            <span>544.90</span>
          </p>
          <a class="inline-block py-2 px-3 w-auto sm:w-auto text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">Buy</a>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-16 md:mb-0">
        <div class="mx-auto max-w-max">
          <img class="mb-6 xl:mb-10 max-w-md w-full rounded-7xl" src={rightImage} alt=""/>
          <div class="inline-block py-1 px-3 mb-2 text-xs text-blue-500 font-heading font-semibold bg-white border border-blue-500 rounded-3xl">-10%</div>
          <a class="block mb-5 text-6xl font-heading font-medium hover:underline" href="#">Headphones Blacksaint 3</a>
          <p class="flex items-center mb-6 xl:mb-10 text-xl text-blue-500 font-heading font-medium tracking-tighter">
            <span class="mr-2 text-xs">$</span>
            <span>42.90</span>
          </p>
          <a class="inline-block py-5 px-10 w-full sm:w-auto text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">Buy</a>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3">
        <div class="mx-auto max-w-max">
          <img class="mb-6 xl:mb-10 max-w-md w-full rounded-7xl" src="uinel-assets/images/ecommerce-newest-products/woman-selfie2.jpg" alt=""/>
          <div class="inline-block py-1 px-3 mb-2 text-xs text-blue-500 font-heading font-semibold bg-white border border-blue-500 rounded-3xl">-10%</div>
          <a class="block mb-5 text-6xl font-heading font-medium hover:underline" href="#">Samsung Galaxy</a>
          <p class="flex items-center mb-6 xl:mb-10 text-xl text-blue-500 font-heading font-medium tracking-tighter">
            <span class="mr-2 text-xs">$</span>
            <span>497.90</span>
          </p>
          <a class="inline-block py-5 px-10 w-full sm:w-auto text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">Buy</a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Test