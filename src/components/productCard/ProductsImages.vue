<template>
  <div class="flex gap-3">
    <div
      class="grid gap-3 overflow-hidden overflow-y-auto max-h-[510px] scroll-smooth scrollbar-none"
    >
      <img
        v-for="src in currentProd.imgUrl"
        @mouseover="() => onhover(src)"
        class="w-32 rounded-2xl"
        :src="src"
        alt="img"
      />
    </div>
    <div class="flex gap-6">
    <!-- Маленькое изображение -->
    <div
      ref="container"
      class="relative w-96  overflow-hidden border rounded-lg"
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave"
    >
      <img
        :src="currentImgUrl"
        ref="smallImage"
        class="w-full h-full object-cover"
        alt="Product"
      />
      <!-- Прямоугольник (лупа) -->
      <div
        v-if="showLens"
        class="absolute w-24 h-24 border-2 border-blue-400 bg-white/30 pointer-events-none"
        :style="{ top: `${lensPos.y}px`, left: `${lensPos.x}px` }"
      ></div>
    </div>

    <!-- Увеличенное изображение -->
    <div
      v-if="showLens"
      class="w-96  border rounded-lg overflow-hidden"
    >
      <div
        class=" w-full h-full bg-no-repeat"
        :style="zoomedImageStyle"
      ></div>
    </div>
  </div>

    <!-- <img class="w-96 rounded-2xl object-cover" :src="currentImgUrl" alt="img" /> -->
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from "@/assets/types/Products";
import { ref } from "vue";

const props = defineProps<{ currentProd: IProduct }>();
const currentProd = props.currentProd;

const currentImgUrl = ref<string>(props.currentProd.imgUrl[0]);
const onhover = (src: string) => {
  currentImgUrl.value = src;
  console.log(src);
};


const container = ref<HTMLElement | null>(null);
const smallImage = ref<HTMLImageElement | null>(null);

const showLens = ref(false);
const lensPos = ref({ x: 0, y: 0 });

const zoomedImageStyle = ref({});

const lensSize = 96; // px

const onMouseMove = (e: MouseEvent) => {
  if (!container.value || !smallImage.value) return;

  const rect = container.value.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const lensX = Math.max(0, Math.min(x - lensSize / 2, rect.width - lensSize));
  const lensY = Math.max(0, Math.min(y - lensSize / 2, rect.height - lensSize));

  lensPos.value = { x: lensX, y: lensY };
  showLens.value = true;

  // вычисляем масштаб
  const zoomFactor = 3;
  const bgX = -(lensX * zoomFactor);
  const bgY = -(lensY * zoomFactor);

  zoomedImageStyle.value = {
    backgroundImage: `url(${currentImgUrl.value})`,
    backgroundSize: `${rect.width * zoomFactor}px ${rect.height * zoomFactor}px`,
    backgroundPosition: `${bgX}px ${bgY}px`,
  };
};

const onMouseLeave = () => {
  showLens.value = false;
};
</script>
