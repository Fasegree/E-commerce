<template>
  <div v-if="data.length">
    <div v-for="(el, i) in data" :key="i">
      {{ el }}
    </div>
  </div>
  <div class="flex gap-3">
    <input @keyup.enter="handlerAdd" ref="inputRef" v-model="inputText" type="text" class="border" />
    <!-- <button
      @click="handlerAdd"
      class="bg-slate-600 text-cyan-50 px-3 py-1 rounded-md hover:bg-slate-400"
    >
      plus
    </button> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import * as Tone from "tone";

const data = reactive<string[]>([]);
const inputText = ref<string>("");
const inputRef = ref<HTMLInputElement | null>(null)

const handlerAdd = async () => {
  if(inputText.value){
    data.push(inputText.value);
    inputText.value = "";
  
    await playMidi();
  }
};

const generateMelody = (length = 6) => {
  const scale = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4']
  const melody = []

  for (let i = 0; i < length; i++) {
    const note = scale[Math.floor(Math.random() * scale.length)]
    melody.push({
      note,
      duration: '8n',
      time: `0:${i}`,
    })
  }

  return melody
}

const playMidi = async () => {
  let currentPart: Tone.Part | null = null
  Tone.Transport.stop();
  Tone.Transport.cancel();
  if (currentPart) {
    (currentPart as Tone.Part).dispose(); 
  }

  await Tone.start();
  const synth = new Tone.Synth().toDestination();

  const melody = generateMelody(2 + Math.floor(Math.random() * 4))

  const part = new Tone.Part((time, value) => {
    synth.triggerAttackRelease(value.note, value.duration, time)
  }, melody).start(0)
  part.loop = false;
  currentPart = part
  Tone.Transport.start();
};

onMounted(() => {
  if(inputRef.value)
  inputRef.value.focus()
})
</script>
