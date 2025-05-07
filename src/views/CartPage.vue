<template>
  <div class="font-bold uppercase text-left p-5">Your cart</div>
  <div class="flex gap-5">
    <!-- product Cards -->
    <div class="w-full border rounded-xl p-3 ">
        <ProductInCard/>
    </div>
    <!-- Order Summary -->
    <div class="space-y-2 border rounded-xl p-3">
      <p class="font-bold text-left">Order Summary</p>
      <div class="flex justify-between">
        <p class="text-gray-400">Subtotal</p>
        <p>$565</p>
      </div>
      <div class="flex justify-between">
        <p class="text-gray-400">Discount (-20%)</p>
        <p class="text-[#f00]">-$115</p>
      </div>
      <div class="flex justify-between">
        <p class="text-gray-400">Delivery Free</p>
        <p>$65</p>
      </div>
      <div>--------------------</div>
      <div class="flex justify-between text-lg">
        <p>Total</p>
        <p class="font-semibold">$565</p>
      </div>
      <div class="flex gap-4">
        <div class="relative">
          <TagIcon
            class="size-5 absolute -translate-y-1/2 top-1/2 left-2 text-gray-300 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Add promo code"
            class="shadow-md rounded-xl pl-8 px-3 py-2"
          />
        </div>
        <div><Button>Apply</Button></div>
      </div>
      <Button class="my-3 w-full">Go to Checkout <ArrowRightIcon /> </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductInCard from "@/components/productCard/ProductInCard.vue";
import Button from "@/components/ui/button/Button.vue";
import { ArrowRightIcon, TagIcon } from "@heroicons/vue/24/outline";
</script>
