<template>
  <UnderHeader v-if="!isAuthLoading && !currentUser"/>
  <Header/>
  <Counter />
  <RouterView />
  <Reviews/>
  <DressStyle/>
  <UpToDate/>
  <Footer/>
</template>

<script setup lang="ts">
import DressStyle from "./components/DressStyle.vue";
import UpToDate from "./components/UpToDate.vue";
import { useAuth } from "./composable/useAuth";
import Footer from "./layout/Footer.vue";
import Header from "./layout/Header.vue";
import Reviews from "./layout/Reviews.vue";
import UnderHeader from "./layout/UnderHeader.vue";
const {currentUser, isAuthLoading} = useAuth()
</script>
