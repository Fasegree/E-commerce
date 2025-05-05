<template>
  <h2 class="text-xl font-bold">{{ title }}</h2>
  <div
    class="grid xl:grid-cols-4 grid-cols-2 gap-2 justify-center md:gap-5 gap-y-9 px-3 md:px-28 py-12"
  >
    <div v-for="product in products">
      <ProductCard class="" :product="product" />
    </div>
  </div>

</template>
<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import type { IProduct } from "@/assets/types/Products";

defineProps<{ products: IProduct[]; title: string }>();
</script>
