<template>
    <div class="flex">
          <Button
            class="rounded-r-none"
            :disabled="countProduct === 1"
            @click="countProductMinus"
            >-</Button
          >
          <input
            v-model.number="countProduct"
            min="1"
            max="100"
            type="number"
            class="border rounded-none w-10 text-center"
            style="-moz-appearance: textfield; appearance: textfield"
          />
          <Button
            class="rounded-l-none"
            :disabled="countProduct === 100"
            @click="countProductPlus"
            >+</Button
          >
        </div>
</template>

<script setup lang="ts">
import Button from '../ui/button/Button.vue';


const countProduct = defineModel<number>("countProduct") ;

const updateCount = (delta: number) => {
    if(countProduct.value)
    countProduct.value = Math.min(100, Math.max(1, countProduct.value + delta))
else 0
}
const countProductPlus = () => updateCount(1);
const countProductMinus = () => updateCount(-1);
</script>