<template>
  <aside class="flex gap-6 items-center w-full text-nowrap">
    <div
      v-for="item in menuItems"
      :key="item.label"
      class="relative group transition"
    >
      <div
        class="flex gap-1 items-center cursor-pointer text-gray-500 hover:text-gray-900 group duration-700"
      >
        {{ item.label }}
        <span
          v-if="item.subMenu"
          class="text-gray-300 group-hover:text-gray-900 duration-700"
          >v</span
        >
      </div>

      <div
        v-if="item.subMenu"
        class="absolute pt-3 w-full hidden group-hover:block"
      >
        <div class="absolute left-1 bg-white shadow-md cursor-pointer">
          <div
            v-for="subItem in item.subMenu"
            :key="subItem.label"
            class="px-4 py-2 hover:bg-gray-100"
          >
            {{ subItem.label }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-full relative">
      <SearchIcon
        class="absolute left-3 text-gray-400 pointer-events-none size-5 -translate-y-1/2 top-1/2"
      />
      <input
        type="text"
        class="shadow-md rounded-2xl pl-10 pr-3 py-2 w-full bg-gray-100"
        placeholder="Search for products..."
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { SearchIcon } from "lucide-vue-next";
import { ref } from "vue";

interface MenuItem {
  label: string;
  patch?: string;
  subMenu?: MenuItem[];
}

const menuItems = ref<MenuItem[]>([
  {
    label: "Shop",
    subMenu: [
      { label: "Products", patch: "/products" },
      { label: "Brands", patch: "brands" },
    ],
  },
  { label: "On Sale", patch: "/sale" },
  { label: "New Arrivals", patch: "/new" },
  { label: "Brands", patch: "/brands" },
]);
</script>
