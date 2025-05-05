<template>
    <Pagination
      v-slot="{ page }"
      :items-per-page="itemsPerPage"
      :total="products.length"
      :sibling-count="1"
      show-edges
      :default-page="1"
    >
     <!-- Выводим продукты -->
     <ListCards :products="getPaginatedProducts(page) " title="134"/>
      
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
        <PaginationFirst />
        <PaginationPrev />
  
        <template v-for="(item, index) in items">
          <PaginationListItem
            v-if="item.type === 'page'"
            :key="item.value"
            :value="item.value"
            as-child
          >
            <Button
              class="w-10 h-10 p-0"
              :variant="item.value === page ? 'default' : 'outline'"
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type + index" />
        </template>
  
        <PaginationNext />
        <PaginationLast />
      </PaginationList>
  
     
    </Pagination>
  </template>
  
  <script setup lang="ts">
  import type { IProduct } from "@/assets/types/Products";
  import Button from "../ui/button/Button.vue";
  import {
    Pagination,
    PaginationList,
    PaginationListItem,
  } from "../ui/pagination";
  import PaginationEllipsis from "../ui/pagination/PaginationEllipsis.vue";
  import PaginationFirst from "../ui/pagination/PaginationFirst.vue";
  import PaginationLast from "../ui/pagination/PaginationLast.vue";
  import PaginationNext from "../ui/pagination/PaginationNext.vue";
  import PaginationPrev from "../ui/pagination/PaginationPrev.vue";
import ListCards from "@/layout/ListCards/ListCards.vue";
  
  const itemsPerPage = 6;
  const props = defineProps<{ products: IProduct[] }>();
  
   function getPaginatedProducts(page: number) {
    const start = (page - 1) * itemsPerPage;
    return props.products.slice(start, start + itemsPerPage);
  }
  </script>
  