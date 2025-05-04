<template>
  <div class="md:flex">
    <div class="p-4 md:w-1/2">
      <h2 class="font-bold uppercase text-4xl text-left">Find clothes</h2>
      <h2 class="font-bold uppercase text-4xl text-left">that matches</h2>
      <h2 class="font-bold uppercase text-4xl text-left">your style</h2>
      <div class="text-left text-gray-600 text-sm pt-5">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </div>
      <Button class="w-full rounded-3xl mt-6 mb-4">Shop Now</Button>
      <div class="grid grid-cols-2 items-center">
        <div v-for="item in stat" :key="item.text">
          <div class="font-bold text-2xl">{{ item.amount }}</div>
          <div class="text-xs text-gray-400">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <div class="relative md:w-1/2">
      <img
        class="absolute left-6 top-36 size-12"
        src="../assets/img/star.jpg"
        alt="star"
      />
      <img
        class="absolute right-6 top-12 size-20"
        src="../assets/img/star.jpg"
        alt="star"
      />
      <img class="w-full" src="../assets/img/girlBoy.jpg" alt="girl&boy" />
    </div>
  </div>

  <div class="bg-black text-white flex gap-3 uppercase justify-center py-5">
    <p v-for="brand in brands" :key="brand">{{ brand }}</p>
  </div>

  <Paginnation :products="products" title="Haoolo" :items-per-page="itemsPerPage">
    <template #default="{ page }">
      <ListCards :products="getPaginatedProducts(page)" title="Hallo" />
    </template>
  </Paginnation>

  <Reviews />
  <DressStyle />
  <UpToDate />
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import DressStyle from "@/components/DressStyle.vue";
import UpToDate from "@/components/UpToDate.vue";
import ListCards from "@/layout/ListCards/ListCards.vue";
import { products } from "@/assets/productsData/productsData";
import Reviews from "@/layout/Reviews.vue";
import Paginnation from "@/components/pagination/Paginnation.vue";

const itemsPerPage = 8;

function getPaginatedProducts(page: number) {
  const start = (page - 1) * itemsPerPage;
  return products.slice(start, start + itemsPerPage);
}

const stat = [
  { amount: "200+", text: "International Brands" },
  { amount: "2,000+", text: "High-Quality Products" },
  { amount: "30,000+", text: "Happy Customers" },
];

const brands = ["Versace", "Zara", "Gucci", "Prada", "Calvin Klein"];
</script>
