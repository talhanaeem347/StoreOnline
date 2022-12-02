<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-2 mx-auto">
      <div class="flex flex-col text-center w-full mb-2">
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
          Pricing
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Our prices are very low affordable for every one
        </p>
      </div>
      <div class="lg:w-2/3 w-full mx-auto overflow-auto">
        <table class="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th
                class=" flex justify-center py-3 title-font tracking-wider text-center font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl"
              >
              <div class="text-start w-28">
                Collection
              </div>
              </th>
              <th
                class="py-3 title-font tracking-wider text-center font-medium text-gray-900 text-sm bg-gray-200"
              >
                Colors
              </th>
              <th
                class="py-3 title-font tracking-wider text-center font-medium text-gray-900 text-sm bg-gray-200"
              >
                Availablity
              </th>
              <th
                class="py-3 title-font tracking-wider text-center font-medium text-gray-900 text-sm bg-gray-200 rounded-tr rounded-br"
              >
                Starting Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="product in products"
              :key="product"
              class="border-b-2 border-gray-200"
            >
              <td class="flex justify-center py-3 font-medium"><div class="text-start w-28">{{ product.catagry }}</div></td>
              <td class="py-3 text-center">{{ product.color }}</td>
              <td class="py-3 text-center">{{ product.availability }}</td>
              <td class="py-3 text-lg text-center text-gray-900">
                Rs: {{ product.startingPrice }} Pkr
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PrisingComponent",
  setup() {
    let products = [
      {
        catagry: "Bridal",
        color: "All ",
        availability: "yes",
        startingPrice: 3999,
        selection: false,
      },
      {
        catagry: "Fancy",
        color: "All ",
        availability: "yes",
        startingPrice: 2999,
        selection: false,
      },
      {
        catagry: "Casual",
        color: "All",
        availability: "No",
        startingPrice: 999,
        selection: false,
      },
      {
        catagry: "High Hel",
        color: "All ",
        availability: "yes",
        startingPrice: 3499,
        selection: false,
      },
      {
        catagry: "Flate",
        color: "All ",
        availability: "yes",
        startingPrice: 999,
        selection: false,
      },
      {
        catagry: "Mediam Heal",
        color: "All ",
        availability: "yes",
        startingPrice: 2599,
        selection: false,
      },
      {
        catagry: "Kot Shoue",
        color: "All ",
        availability: "yes",
        startingPrice: 1299,
        selection: false,
      },
      {
        catagry: "Adda Panja",
        color: "All ",
        availability: "yes",
        startingPrice: 1299,
        selection: false,
      },
      {
        catagry: "Adda Panja",
        color: "All ",
        availability: "yes",
        startingPrice: 1299,
        selection: false,
      },
      {
        catagry: "Khussa",
        color: "All ",
        availability: "yes",
        startingPrice: 599,
        selection: false,
      },
    ];
    return {
      products,
    };
  },
});
</script>

<style></style>
