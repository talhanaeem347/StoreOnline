<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <h1 class="text-center font-semibold text-xl">Our History</h1>
    <div class="container px-5 py-2 mx-auto">
      <div class="-my-8 divide-y-2 divide-gray-100">
        <div class="py-8 flex flex-wrap md:flex-nowrap  justify-between">
          <div class="w-1/5 md:mb-0 mb-2 flex-shrink-0 flex flex-col">
            <img src="https://dummyimage.com/200x200" class="rounded" alt="image">
          </div>
          <div class=" w-2/3">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
              Absolutly start a new Bussness
            </h2>
            <p class="leading-relaxed text-justify">
              A young man from Lahore,
              <span class="italic font-medium">Mr Naeem Qurashi</span>, satrt up a
              karkhana as a shoe Maker in Lahore's famous
              <span class="italic">Gumti bazaar</span>. His hard work and honesty gained
              him popularity amongst his team and CEOs of other Karkhana
              <span> Mr. Qurashi </span> started his own business in 1982 under the name
              of <span class="italic font-medium"> K.N.Shoue </span>with Rs. 500 only. His
              sincere commitment to his work started paying off and the vision gradually
              turned into a success story.
            </p>
          </div>
        </div>
        <div class="py-8 flex flex-wrap md:flex-nowrap justify-between">
          <div class="w-1/5 md:mb-0 mb-2 flex-shrink-0 flex flex-col">
            <img src="https://dummyimage.com/200x200" class="rounded " alt="image">
          </div>
          <div class=" w-2/3">  
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
              Incrementel Step Taken By Us
            </h2>
            <p class="leading-relaxed">
              Now K.N.Shoue start onlne delivry as <span class="font-medium italic">
                {{$store.state.siteName}}</span
              >
              and now has become one of the most recognized names in Pakistani footwear industry
              and has no intention of slowing down. <span class="italic">{{$store.state.siteName}}</span> has around 200+ brand
              outlets to diliver in more than 100 cities in Pakistan. A large part of
              <span class="italic ">{{$store.state.siteName}}</span>'s successful journey as a reputable brand has been its ability to
              stay on top of the trends in a mercurial market. The brand has become quick
              at anticipating changes in fashion and catering to them with unparalleled
              swiftness.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name:"HistoryComponent"
})
</script>
