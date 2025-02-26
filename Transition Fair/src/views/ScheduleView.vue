<template>
  <div>
    <NavBar />
    <table id="schedule-table">
      <tbody>
        <tr>
          <th scope="row">5:00</th>
          <td><button @click="changeButton($event)">Vocational Rehabilitation</button></td>
        </tr>
        <tr>
          <th scope="row">5:30</th>
          <td><button @click="changeButton($event)">Utah Parent Center - Transition University</button></td>
        </tr>
        <tr>
          <th scope="row">6:00</th>
          <td><button @click="changeButton($event)">Vista Education Campus</button></td>
        </tr>
        <tr>
          <th scope="row">6:30</th>
          <td><button @click="changeButton($event)">Vocational Rehabilitation</button></td>
        </tr>
        <tr>
          <th scope="row">7:00</th>
          <td><button @click="changeButton($event)">Division of Services for People with Disabilities (DSPD)</button></td>
        </tr>
        <tr>
          <th scope="row">7:30</th>
          <td><button @click="changeButton($event)">Utah Parent Center</button></td>
        </tr>
      </tbody>
    </table>
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
            var textElement = document.getElementById('navBar').innerText + ' ' + document.getElementById('schedule-table').innerText;
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
});
</script>

<style scoped>
#schedule-table {
  margin: 20px auto;
  width: 80%;
  border-collapse: collapse;
}
.td, .th {
  border-spacing: 10px;
}

button.selected {
  background-color: #B2BEB5;
}
</style>