<template>
  <div class="flex gap-3 border rounded-lg p-3 relative">
    <TrashIcon
      class="size-5 hover:text-[#f00] absolute right-3 cursor-pointer"
      @click="$emit('remove-product', product)"
    />
    <div class="max-w-20">
      <img :src="product.imgUrl[0]" alt="img" class="rounded-md" />
    </div>
    <!-- Cart Description -->
    <div class="text-left flex flex-col justify-between">
      <div class="space-y-1">
        <p>{{ product.title }}</p>
        <p>Size: <span :style="`background-color: ${product.color};`">{{product.size[0]}}</span></p>
        <p>Color: <span>{{ product.color[0] }}</span></p>
      </div>
      <p class="font-semibold">${{ product.newPrice ?? product.price }}</p>
    </div>
    <div class="w-full self-end">
      <div class="flex justify-end">
        <ButtonsMinusPlus v-model:count-product="product.inCart" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/24/solid";
import ButtonsMinusPlus from "./ButtonsMinusPlus.vue";
import type { IProductInCart } from "@/assets/types/Products";

defineProps<{product: IProductInCart}>()
</script>
