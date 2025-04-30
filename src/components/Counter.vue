<template>
    <div>
      <h2>Counter</h2>
      <p>Счётчик: {{ count }}</p>
      <input type="number" v-model="count" />
      <button :title="count.toString()" @click="count++">{{ count }}</button>
    </div>
  
    <div>
      <h2>Char counter</h2>
      <div>Количество введённых символов: {{ trimmedLength }}</div>
      <div>Осталось возможных символов: {{ remainingChars }}</div>
      <input
        type="text"
        v-model="inputText"
        @input="handleChange"
        :maxlength="maxTotalLength"
      />
      <button @click="reset">Reset</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from "vue";
  
  const count = ref(0);
  const inputText = ref("");
  const maxTrimmedLength = 30; // лимит "полезных" символов
  const maxTotalLength = 100;  // запасной лимит, чтоб не вводили бесконечные пробелы
  
  const trimmedLength = computed(() => inputText.value.trim().length);
  const remainingChars = computed(() => Math.max(maxTrimmedLength - trimmedLength.value, 0));
  
  const handleChange = () => {
    count.value = trimmedLength.value;
  
    // Обрезаем текст, если полезных символов больше maxTrimmedLength
    if (trimmedLength.value > maxTrimmedLength) {
      const clean = inputText.value.trim().slice(0, maxTrimmedLength);
      inputText.value = clean;
    }
  };
  
  const reset = () => {
    inputText.value = "";
    count.value = 0;
  };
  </script>
  