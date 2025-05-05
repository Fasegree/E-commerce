<template>
  <!-- <img :src="product.imgUrl[0]" :alt="product.title"> -->
  <div
    class="w-[172px] h-[198px] md:w-[295px] md:h-[298px] sm:w-[198px] rounded-xl bg-gray-200"
  ></div>
  <div class="pt-4 text-left text-xl font-bold">{{ product.title }}</div>
  <div class="flex pt-2 items-center">
    <StarIcon
      v-for="i in product.rating"
      :key="i"
      class="w-5 h-5 text-yellow-400"
    />
    <p class="pl-2">{{ product.rating }}/5</p>
  </div>
  <div class="flex gap-1 md:gap-3 pt-2 items-center">
    <div class="font-bold text-xl md:text-2xl">
      ${{ Math.round(product.newPrice ?? product.price) }}
    </div>
    <div
      class="font-bold text-xl md:text-2xl opacity-40 line-through"
      v-if="product.newPrice"
    >
      ${{ Math.round(product.price) }}
    </div>
    <div
      class="py-[6px] px-3 rounded-full bg-red-100 text-red-700"
      v-if="product.newPrice"
    >
      {{ Math.round(100 - (product.newPrice * 100) / product.price) * -1 }}%
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IProduct } from "@/assets/types/Products";
import { StarIcon } from "@heroicons/vue/24/solid";

defineProps<{ product: IProduct }>();
</script>
