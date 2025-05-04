<template>
  <Pagination
    v-slot="{ page }"
    :items-per-page="itemsPerPage"
    :total="products.length"
    :sibling-count="1"
    show-edges
    :default-page="1"
  >
    <slot :page="page" />

    <div class="flex justify-center mt-6">
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
    </div>
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

defineProps<{
  products: IProduct[];
  title: string;
  itemsPerPage: number;
}>();
</script>
