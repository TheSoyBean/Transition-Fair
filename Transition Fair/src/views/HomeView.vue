<template>
  <div>
    <NavBar />
    <button id="tts-button" class="tts-button"></button>
    <img src="@/assets/flyer.png" class="flyer" alt="Fair Flyer" @click="showModal = true" />
    <div v-if="showModal" class="modal" @click.self="showModal = false">
      <img src="@/assets/flyer.png" class="modal-content" alt="Fair Flyer" />
    </div>
  </div>
  <AppFooter />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'

const showModal = ref(false)

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
.flyer {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 85vh;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
}
</style>