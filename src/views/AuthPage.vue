<template>
  <div  class="h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col items-center justify-center text-[#00f0ff] text-center font-orbitron">
    <h1 class="text-2xl font-semibold">🌌 Добро пожаловать в FutureApp</h1>

    <div v-if="user" class="grid">
      <img :src="user.photoURL" alt="avatar" class="justify-self-center rounded-full w-20 my-4 " />
      <p>Привет, {{ user.displayName }}!</p>
      <div class="grid">
        <button @click="goToDashboard">Перейти в панель</button>
        <button @click="goToCalendar">Перейти в календарь</button>
        <button @click="goToNotes">Перейти к заметкам</button>
      </div>
    </div>

    <div v-else>
      <button @click="loginWithGoogle">🚀 Войти через Google</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import {
  auth,
  provider,
  db
  
} from '../firebase'
import { useRouter } from 'vue-router'
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { set, ref as dbRef } from 'firebase/database'

const router = useRouter()
const user = ref<any | null>(null)

onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    user.value = u
    if (u) {
      set(dbRef(db, 'users/' + u.uid), {
        name: u.displayName,
        email: u.email,
        photo: u.photoURL
      })
    }
  })
})

const loginWithGoogle = async () => {
  await signInWithPopup(auth, provider)
}
const goToNotes = () => {
  router.push('/counter')
}
const goToCalendar = () => {
  router.push('/calendar')
}
const goToDashboard = () => {
  router.push('/dashboard')
}
</script>

<style scoped>
.auth {
  height: 100vh;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #00f0ff;
  font-family: 'Orbitron', sans-serif;
  text-align: center;
}

button {
  background: #01deee;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 8px;
  cursor: pointer;
  color: black;
  font-weight: bold;
  transition: background 0.3s;
}
button:hover {
  background: #0ff;
}
</style>
