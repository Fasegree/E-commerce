<template>
  <h2 class="text-xl font-bold">{{ title }}</h2>
  <div
    class="grid xl:grid-cols-4 grid-cols-2 gap-2 justify-center md:gap-5 gap-y-9 px-3 md:px-28 py-12"
  >
    <div v-for="product in products">
      <RouterLink :to="`/product/${product.id}`">
        <ProductCard class="" :product="product" />
      </RouterLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IProduct } from "@/assets/types/Products";
import ProductCard from "@/components/productCard/ProductCard.vue";

defineProps<{ products: IProduct[]; title: string }>();
</script>
