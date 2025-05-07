<template>
  <header class="flex justify-between items-center px-5 py-5">
    <div class="flex gap-3 items-center w-full">
      <div class="size-5 block md:hidden"><Bars3Icon /></div>
      <Logo />
      <Navigation class="hidden md:flex px-8" />
    </div>
    <div class="flex gap-3">
      <RouterLink to="/cart">
        <ShoppingCartIcon class="size-5" />
      </RouterLink>
      <RouterLink to="/user">
        <UserCircleIcon class="size-5" />
      </RouterLink>
    </div>
  </header>
</template>
<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import {
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/vue/24/outline";
import { Bars3Icon } from "@heroicons/vue/24/solid";
import Navigation from "./Home/Navigation.vue";
import { RouterLink } from "vue-router";
</script>
