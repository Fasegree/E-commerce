<template>
  <Home />
  <div class="pt-5">
    <!-- <ListCards :products="products" title="New Arrival" /> -->
  </div>
  <div>---------------------------------------</div>
  <Paginnation :products="products"/>
  <div>-------------------------------------</div>
</template>

<script setup lang="ts">
import { products } from "@/assets/productsData/productsData";
import Paginnation from "@/components/pagination/Paginnation.vue";
import Home from "@/layout/Home.vue";
</script>
