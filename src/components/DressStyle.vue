<template>
  <div class="bg-gray-300 rounded-3xl m-24 p-16">
    <h2 class="uppercase text-2xl font-bold">Browse by dress style</h2>
    <div class="space-y-4 mt-7">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="grid md:grid-cols-3 gap-4"
      >
        <template v-if="index % 2 === 0">
          <!-- Нечётные: 1/3 + 2/3 -->
          <div
            class="relative bg-blue-300 h-48 col-span-1 flex items-center justify-center rounded-xl hover:-translate-x-1 hover:-translate-y-1 transition duration-100 hover:bg-red-500 cursor-pointer"
          >
          <div class="absolute left-9 top-6">
              {{ item.linkA?.title }}
          </div>
          </div>
          <div
            class="relative bg-green-300 h-48 md:col-span-2 flex items-center justify-center rounded-xl hover:-translate-x-1 hover:-translate-y-1 transition duration-100 hover:bg-red-500 cursor-pointer"
          >
          <div class="absolute left-9 top-6">
              {{ item.linkB.title }}
          </div>
          </div>
        </template>
        <template v-else>
          <!-- Чётные: 2/3 + 1/3 -->
          <div
            class="relative bg-green-300 h-48 md:col-span-2 flex items-center justify-center rounded-xl hover:-translate-x-1 hover:-translate-y-1 transition duration-100 hover:bg-red-500 cursor-pointer"
          >
          <div class="absolute left-9 top-6">
              {{ item.linkA.title }}
          </div>
          </div>
          <div
            class="relative bg-blue-300 h-48 col-span-1 flex items-center justify-center rounded-xl hover:-translate-x-1 hover:-translate-y-1 transition duration-100 hover:bg-red-500 cursor-pointer hover:opacity-50"
          >
          <div  class="absolute left-9 top-6 opacity-100">
              {{ item.linkB.title }}
          </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const items = [
  { linkA: {title:"Casual", src:"#"}, linkB: {title:"Formal", src:"#"} },
  { linkA: {title:"Party", src:"#"}, linkB: {title:"Gym", src:"#"} },
];
</script>
