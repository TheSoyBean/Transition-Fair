<template>
    <div>
      <NavBar />
      <button id="tts-button" class="tts-button"></button>
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.632008378223!2d-111.98509602374668!3d41.09888631384056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87530389bc220849%3A0x19799fed97fb6562!2sWeber%20State%20University%20Davis!5e0!3m2!1sen!2sus!4v1736962279789!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import { onMounted } from 'vue'
  onMounted(() => {
    if('speechSynthesis' in window){
      var synthesis = window.speechSynthesis;
      document.getElementById('tts-button').addEventListener('click', function(){
          var textElement = document.getElementById('navBar');
          var text = textElement.innerText;
          var utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = 'en-US';
          utterance.pitch = 1;
          utterance.rate = 1;
          utterance.volume = 1;
          window.speechSynthesis.speak(utterance);
      });
      
      window.addEventListener('beforeunload', function(){
      if (synthesis.speaking){
          synthesis.cancel();
      }
      });
  }
  else{
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
    padding-top: 20px; /* Adjust this value as needed */
}
</style>