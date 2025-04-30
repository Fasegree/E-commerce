<template>
    <div v-if="isAuthLoading">... loading</div>
    <div v-else> 
        <div>Login in App</div>
        <div><Button  @click="loginWithGoogle">Login</Button></div>
    </div>
</template>
<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { loginWithGoogle, useAuth } from '@/composable/useAuth';
import router from '@/router';
import { watch } from 'vue';

const {currentUser, isAuthLoading} = useAuth()
// console.log(currentUser);

// if(currentUser.value){
//     router.push('/')
// }
watch(currentUser, (newUser)=> {
    if(newUser){
        router.push('/')
    }
}, {immediate: true})
</script>