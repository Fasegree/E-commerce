<template>
  <div class="font-bold uppercase text-left p-5">Your cart</div>
  <div v-if="productInCart.items.length" class="flex gap-5">
    <!-- product Cards -->
    <TransitionGroup name="fade" tag="div" class="relative w-full flex flex-col gap-3 border rounded-xl p-3">
      <ProductInCard
        v-for="(product, i) in productInCart.items"
        :product="product"
        :key="i"
        @remove-product="productInCart.removeFromCart(product)"
      />
    </TransitionGroup>
    <!-- Order Summary -->
    <div class="space-y-2 border rounded-xl p-3">
      <p class="font-bold text-left">Order Summary</p>
      <div class="flex justify-between">
        <p class="text-gray-400">Subtotal</p>
        <p>${{ getSubTotal.toFixed(2) }}</p>
      </div>
      <div class="flex justify-between">
        <p class="text-gray-400">Discount (-20%)</p>
        <p class="text-[#f00]">-${{ getDiscount.toFixed(2) }}</p>
      </div>
      <div class="flex justify-between">
        <p class="text-gray-400">Delivery Free</p>
        <p>${{ getDeliveryFree.toFixed(2) }}</p>
      </div>
      <div>--------------------</div>
      <div class="flex justify-between text-lg">
        <p>Total</p>
        <p class="font-semibold">
          {{ (getSubTotal - getDiscount + getDeliveryFree).toFixed(2) }}
        </p>
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
  <div v-else>
    <div>Your Cart empty</div>
    <RouterLink to="/products">
      <Button>Go to the shop</Button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import ProductInCard from "@/components/productCard/ProductInCard.vue";
import Button from "@/components/ui/button/Button.vue";
import { useCartStore } from "@/stores/cart";
import { ArrowRightIcon, TagIcon } from "@heroicons/vue/24/outline";
import { computed, onMounted } from "vue";

const productInCart = useCartStore();
onMounted(() => {
  console.log("productInCart", productInCart.items);
});
const getSubTotal = computed(() => {
  let subTotal = 0;
  subTotal = productInCart.items.reduce((acc, item) => {
    return (item.price ?? item.newPrice) * item.inCart + acc;
  }, 0);
  // productInCart.items.forEach((item) => {
  //   subTotal += item.price;
  // });
  return subTotal;
});

const getDiscount = computed(() => {
  let discount = getSubTotal.value - getSubTotal.value * 0.8;
  // productInCart.items.forEach((item) => {
  //   discount += item.price * (item.discount / 100);
  // });
  return discount;
});
const getDeliveryFree = computed(() => {
  let deliveryFree = 15;
  // productInCart.items.forEach((item) => {
  //   deliveryFree += item.deliveryFree;
  // });
  return deliveryFree;
});
</script>
