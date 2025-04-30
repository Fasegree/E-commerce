<template>
  <div
    class="p-5 bg-black rounded-2xl m-4 grid md:grid-cols-2 text-3xl font-bold"
  >
    <p class="uppercase text-white">Stay uptodate abour our latest offers</p>
    <div class="flex flex-col gap-4">
      <div class="relative w-full items-center text-white">
        <Input id="search" type="text" placeholder="Search..." class="pl-10" />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <EnvelopeIcon class="size-6 text-muted-foreground" />
        </span>
      </div>
      <Button class="w-full" variant="secondary"
        >Subscribe to Newsletter</Button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import Input from "./ui/input/Input.vue";
import Button from "./ui/button/Button.vue";
</script>
