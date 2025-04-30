<template>
    
    <header class="flex justify-between items-center px-5 py-5">
        <div class="flex gap-3 items-center">
            <div class="size-5 "><Bars3Icon /> 
             </div>
           <Logo/>
        </div>
        <div class="flex gap-3 w-20" >
            <MagnifyingGlassIcon class="w-full" />
            <ShoppingCartIcon />
            <UserCircleIcon/>
        </div>
    </header>
</template>
<script setup lang="ts">
import Logo from '@/components/Logo.vue';
import { MagnifyingGlassIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/vue/24/outline';
import { Bars3Icon,    } from '@heroicons/vue/24/solid';

</script>