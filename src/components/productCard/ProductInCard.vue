<template>
  <div class="flex gap-3 border rounded-lg p-3 relative">
    <TrashIcon
      class="size-5 hover:text-[#f00] absolute right-3 cursor-pointer"
    />
    <div class="max-w-20">
      <img src="../../assets/img/girlBoy.jpg" alt="img" class="rounded-md" />
    </div>
    <!-- Cart Description -->
    <div class="text-left flex flex-col justify-between">
      <div class="space-y-1">
        <p>Gradient Graphic T-Shirt</p>
        <p>Size: <span>Large</span></p>
        <p>Color: <span>White</span></p>
      </div>
      <p class="font-semibold">$145</p>
    </div>
    <div class="w-full self-end">
      <div class="flex justify-end">
        <ButtonsMinusPlus v-model:count-product="countProduct" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/24/solid";
import ButtonsMinusPlus from "./ButtonsMinusPlus.vue";
import { ref } from "vue";
const countProduct = ref<number>(1);
</script>
