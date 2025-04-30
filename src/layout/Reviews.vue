<template>
  <div class="flex justify-between items-center pt-10">
    <h2 class="uppercase text-left text-xl font-bold">Our happy customers</h2>
    <div class="flex gap-3 text-right px-20">
      <!-- Кнопки -->
      <button
        @click="scrollLeft"
        class="bg-white/70 backdrop-blur rounded-full p-2 shadow hover:bg-white transition"
      >
        ←
      </button>
      <button
        @click="scrollRight"
        class="bg-white/70 backdrop-blur rounded-full p-2 shadow hover:bg-white transition"
      >
        →
      </button>
    </div>
  </div>
  <div class="relative">
    <!-- List cards -->
    <div
      ref="scrollContainer"
      class="grid overflow-x-auto scrollbar-hide grid-rows-1 grid-flow-col gap-4 mt-6 cursor-grab select-none"
>
      <!-- Card -->
      <div
        v-for="user in usersComments"
        class="min-w-[380px] border rounded-xl p-6"
        :key="user.id"
      >
        <!-- stars -->
        <div class="flex gap-1">
          <StarIcon
            v-for="i in user.starsAmount"
            :key="i"
            class="w-5 h-5 text-yellow-400"
          />
          <StarIconOutline
            class="w-5 h-5 text-yellow-400"
            v-if="user.starsAmount < 5"
            v-for="i in 5 - user.starsAmount"
            :key="i"
          />
        </div>
        <!-- User -->
        <div class="flex gap-2 items-center pt-3">
          <p>{{ user.user }}</p>
          <CheckCircleIcon class="text-green-500 size-5" />
        </div>
        <!-- Comment -->
        <p class="mt-2 text-left">{{ user.comment }}</p>
      </div>
    </div>

    <!-- left gradBlur -->
    <div
      class="absolute -left-12 top-0 h-full w-24 z-20 pointer-events-none bg-gradient-to-r from-white via-white/90 to-transparent"
    ></div>
    <div
      class="absolute -right-12 top-0 h-full w-24 z-20 pointer-events-none bg-gradient-to-l from-white via-white/90 to-transparent"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { StarIcon as StarIconOutline } from "@heroicons/vue/24/outline";
import { CheckCircleIcon, StarIcon } from "@heroicons/vue/24/solid";
import { onBeforeUnmount, onMounted, ref } from "vue";

const usersComments = [
  {
    id: "1",
    user: "Maria M.",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, rem.",
    starsAmount: 5,
  },
  {
    id: "2",
    user: "Julia M.",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, rem.",
    starsAmount: 1,
  },
  {
    id: "3",
    user: "Anna M.",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, rem.",
    starsAmount: 5,
  },
  {
    id: "4",
    user: "Katja M.",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, rem.",
    starsAmount: 2,
  },
  {
    id: "5",
    user: "Nadia M.",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, rem.",
    starsAmount: 2,
  },
  {
    id: "6",
    user: "Leyla M.",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, rem.",
    starsAmount: 2,
  },
  {
    id: "7",
    user: "Sarah M.",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, rem.",
    starsAmount: 2,
  },
];

const scrollContainer = ref<HTMLDivElement | null>(null);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeftStart = ref(0);

const onMouseDown = (e: MouseEvent) => {
  isDragging.value = true;
  startX.value = e.pageX - (scrollContainer.value?.offsetLeft || 0);
  scrollLeftStart.value = scrollContainer.value?.scrollLeft || 0;
  scrollContainer.value?.classList.add("dragging");
};

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging.value || !scrollContainer.value) return;
  const x = e.pageX - (scrollContainer.value.offsetLeft || 0);
  const distance = x - startX.value;
  if (scrollContainer.value) 
    scrollContainer.value.scrollLeft = scrollLeftStart.value - distance;
  
};

const stopDragging = () => {
  isDragging.value = false;
  scrollContainer.value?.classList.remove("dragging");
};

onMounted(() => {
  const el = scrollContainer.value;
  if (el) {
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseup", stopDragging);
    el.addEventListener("mouseleave", stopDragging);
    document.addEventListener("mouseup", stopDragging);
  }
});
onBeforeUnmount(() => {
  const el = scrollContainer.value;
  if (el) {
    el.removeEventListener("mousedown", onMouseDown);
    el.removeEventListener("mousemove", onMouseMove);
    el.removeEventListener("mouseup", stopDragging);
    el.removeEventListener("mouseleave", stopDragging);
    document.removeEventListener("mouseup", stopDragging);
  }
});
const scrollLeft = () => {
  scrollContainer.value?.scrollBy({ left: -300, behavior: "smooth" });
};
const scrollRight = () => {
  scrollContainer.value?.scrollBy({ left: 300, behavior: "smooth" });
};
</script>
<style>
.scrollbar-hide {
  scrollbar-width: none;
}
.dragging {
    cursor: grabbing !important;
    user-select: none;
}
</style>