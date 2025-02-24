<template>
  <div>
    <NavBar />
    <button id="tts-button" class="tts-button"></button>
    <div class="map">
      <img src = "@/assets/map.png"></img>
    </div>
  </div>
  <AppFooter />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import { onMounted } from 'vue'
onMounted(() => {
  if ('speechSynthesis' in window) {
    var synthesis = window.speechSynthesis;
    document.getElementById('tts-button').addEventListener('click', function () {
      var textElement = document.getElementById('navBar');
      var text = textElement.innerText;
      var utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.pitch = 1;
      utterance.rate = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    });

    window.addEventListener('beforeunload', function () {
      if (synthesis.speaking) {
        synthesis.cancel();
      }
    });
  }
  else {
    console.error('TTS not supported');
  }
})
</script>

<style scoped>
.map {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 20px;
  /* Adjust this value as needed */
}
</style>