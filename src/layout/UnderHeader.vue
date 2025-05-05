<template>
  <div class="fixed z-50 h-5  w-full max-w-[1440px]">
    <div
      class=" bg-black text-white w-full text-[13px] py-2 shadow-[0px_5px_4px_0px_rgba(17,_12,_46,_0.15)]"
    >
      <span
        >Sign up and get 20% off to your first order.
        <RouterLink to="/login" class="text-[14px] underline hover:text-[#888]"
          >Sign Up Now
        </RouterLink>
      </span>
    </div>
  </div>
  <div class="h-7"></div>

</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
