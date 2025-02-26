<template>
  <div>
    <NavBar />
    <button id="tts-button" class="tts-button"></button>
    <img src="@/assets/flyer.png" class="flyer" alt="Fair Flyer" @click="showModal = true" />
    <div v-if="showModal" class="modal" @click.self="showModal = false">
      <img src="@/assets/flyer.png" class="modal-content" alt="Fair Flyer" />
    </div>

    <!-- Initial Confirmation Modal -->
    <div v-if="showConfirmation" class="modal confirmation-modal">
      <div class="confirmation-content">
        <h2>Have you completed the pre registration form?</h2>
        <p>If you have select Yes, if you need to fill it out select No.</p>
        <div class="button-group">
          <button @click="handleYes" class="confirm-btn yes-btn">Yes</button>
          <button @click="handleNo" class="confirm-btn no-btn">No</button>
        </div>
      </div>
    </div>

    <!-- Form Modal -->
    <div v-if="showForm" class="modal" @click.self="showForm = false">
      <div class="form-container">
        <div class="form-header">
          <button @click="showForm = false" class="close-btn">×</button>
        </div>
        <iframe 
          width="640px" 
          height="480px" 
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=dPKcPX5U9UqN3gGmNuC2B5J9yh_VULdNhlcvUdOGSo1URTdDUzVETEJJMkFHTE9DWFA1UEdKUkRSSy4u&embed=true" 
          frameborder="0" 
          marginwidth="0" 
          marginheight="0" 
          style="border: none; max-width:100%; max-height:100vh" 
          allowfullscreen 
          webkitallowfullscreen 
          mozallowfullscreen 
          msallowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'

const showModal = ref(false)
const showConfirmation = ref(true) // Show confirmation dialog by default when app loads
const showForm = ref(false)

// Handle yes button click
const handleYes = () => {
  showConfirmation.value = false
}

// Handle no button click
const handleNo = () => {
  showConfirmation.value = false
  showForm.value = true
}

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

/* Confirmation Modal Styles */
.confirmation-modal {
  background-color: rgba(0, 0, 0, 0.7);
}

.confirmation-content {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
  width: 80%;
}

.confirmation-content h2 {
  margin-top: 0;
  color: #333;
}

.button-group {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.confirm-btn {
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.yes-btn {
  background-color: #00920c;
  color: white;
}

.no-btn {
  background-color: #07396b;
  color: white;
}

.confirm-btn:hover {
  opacity: 0.9;
  transform: scale(1.05);
}

/* Form Modal Styles */
.form-container {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 700px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
}

.form-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background-color: #f5f5f5;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #555;
}

.close-btn:hover {
  color: black;
}
</style>