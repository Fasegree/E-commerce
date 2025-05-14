<template>
  <div class="flex gap-3">
    <!-- images -->
    <ProductsImages :current-prod="currentProd" />
    <!-- /images -->
    <!-- descriptoin -->
    <div class="text-left">
      <p class="text-xl font-bold">{{ currentProd.title }}</p>
      <div class="flex pt-2 items-center">
        <StarIcon
          v-for="i in currentProd.rating"
          :key="i"
          class="w-5 h-5 text-yellow-400"
        />
        <p class="pl-2">{{ currentProd.rating }}/5</p>
      </div>
      <!-- price -->
      <div class="flex gap-1 md:gap-3 pt-2 items-center">
        <div class="font-bold text-xl md:text-2xl">
          ${{ Math.round(currentProd.newPrice ?? currentProd.price) }}
        </div>
        <div
          class="font-bold text-xl md:text-2xl opacity-40 line-through"
          v-if="currentProd.newPrice"
        >
          ${{ Math.round(currentProd.price) }}
        </div>
        <div
          class="py-[6px] px-3 rounded-full bg-red-100 text-red-700"
          v-if="currentProd.newPrice"
        >
          {{
            Math.round(100 - (currentProd.newPrice * 100) / currentProd.price) *
            -1
          }}%
        </div>
      </div>
      <!-- /price -->
      <p class="pt-6">{{ currentProd.description }}</p>
      <!-- color -->
      <div class="pt-6">---------------------------------------</div>
      <div class="pt-6">Select color</div>
      <div class="flex gap-1 pt-4">
        <Button
          v-for="(color, i) in currentProd.colors"
          :key="i"
          class="size-10 rounded-full flex items-center justify-center relative shadow-black"
          :style="{ backgroundColor: color }"
          @click="() => toggleSelection('color', color)"
        >
          <CheckBadgeIcon
            v-if="sendProduct.color.includes(color)"
            class="absolute -top-1 -right-1 text-white bg-blue-600 rounded-full size-10"
          />
        </Button>
      </div>
      <!-- /color -->
      <div class="pt-6">---------------------------------------</div>
      <div class="pt-6">Choose size</div>
      <div class="flex gap-1 pt-4">
        <Button
          v-for="(size, i) in currentProd.size"
          :key="i"
          @click="() => toggleSelection('size', size)"
          class="relative"
        >
          {{ size }}
          <CheckBadgeIcon
            v-if="sendProduct.size.includes(size)"
            class="absolute -top-1 -right-1 text-white bg-blue-600 rounded-full size-4"
          />
        </Button>
      </div>
      <div class="pt-6">---------------------------------------</div>
      <div class="flex gap-3 justify-start items-center pt-6">
        <ButtonsMinusPlus v-model:countProduct="inCart" />
        <div>
          <Button
            :disabled="
              inCart < 1 ||
              inCart > 100 ||
              sendProduct.size.length < 1 ||
              sendProduct.color.length < 1
            "
            @click="sendData"
            >Add to Cart</Button
          >
        </div>
      </div>
    </div>
    <!-- /descriptoin -->
  </div>
</template>

<script setup lang="ts">
import { products } from "@/assets/productsData/productsData";
import type { IProduct, IProductInCart } from "@/assets/types/Products";
import { useRoute } from "vue-router";
import { CheckBadgeIcon, StarIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import { toast } from "../ui/toast";
import ProductsImages from "./ProductsImages.vue";
import Button from "../ui/button/Button.vue";
import ButtonsMinusPlus from "./ButtonsMinusPlus.vue";
import { useCartStore } from "@/stores/cart";

const props = defineProps<{ product: IProduct }>();

const route = useRoute();
const productId = route.params.id as string;

const cartStore = useCartStore();
let productFetch;
if (!props.product) productFetch = products.find((el) => el.id === productId);

const currentProd = props.product ?? productFetch;

const inCart = ref<number>(1);

const sendProduct = ref<IProductInCart>({
  ...currentProd,
  color: [currentProd.colors[0]],
  size: [currentProd.size[0]],
  inCart: inCart.value,
});
const toggleSelection = (key: "color" | "size", value: string) => {
  sendProduct.value = { ...sendProduct.value, [key]: [value] };
  // const index = sendProduct.value[key].indexOf(value);
  // if (index === -1) {
  //   console.log("sendProduct: ");
  //   sendProduct.value[key].push(value);
  //   console.log(sendProduct.value);

  // } else {
  //   console.log("delete");
  //   sendProduct.value[key].splice(index, 1);
  //   console.log(sendProduct.value);
  //   console.log(sendProduct.value[key]);
  // }
};

const sendData = () => {
  if (
    sendProduct.value.color.length === 0 ||
    sendProduct.value.size.length === 0
  )
    return;
  sendProduct.value = { ...sendProduct.value, inCart: inCart.value };
  cartStore.addToCart({
    ...sendProduct.value,
  });
  toast({
    title: `${sendProduct.value.title} * ${sendProduct.value.inCart} added to Cart`,
  });
  console.log("sendProduct: ", sendProduct.value);
  console.log("cartStore: ", cartStore.items);

  return sendProduct;
};
</script>
