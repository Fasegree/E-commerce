<template>
  <UnderHeader v-if="!isAuthLoading && !currentUser" />
  <Header />
  <RouterView />
  <Footer />
  <Toaster/>
</template>

<script setup lang="ts">
import Toaster from "./components/ui/toast/Toaster.vue";
import { useAuth } from "./composable/useAuth";
import Footer from "./layout/Footer.vue";
import Header from "./layout/Header.vue";
import UnderHeader from "./layout/UnderHeader.vue";
const { currentUser, isAuthLoading } = useAuth();
</script>
