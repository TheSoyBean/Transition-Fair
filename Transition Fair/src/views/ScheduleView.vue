<template>
  <div>
    <NavBar />
    <TtsButton id="tts-button" class="tts-button"/>
    <div class="schedule-container" id="schedule-content">
      <h1>Transition Fair Breakout Sessions</h1>
      
      <div class="schedule-item">
        <div class="time">5:00 PM</div>
        <div class="session">Vocational Rehabilitation</div>
      </div>
      
      <div class="schedule-item">
        <div class="time">5:30 PM</div>
        <div class="session">Utah Parent Center - Transition University</div>
      </div>
      
      <div class="schedule-item">
        <div class="time">6:00 PM</div>
        <div class="session">College Disability Services (WSU)</div>
      </div>
      
      <div class="schedule-item">
        <div class="time">6:30 PM</div>
        <div class="session">Vocational Rehabilitation</div>
      </div>
      
      <div class="schedule-item">
        <div class="time">7:00 PM</div>
        <div class="session">Division of Services for People with Disabilities (DSPD)</div>
      </div>
      
      <div class="schedule-item">
        <div class="time">7:30 PM</div>
        <div class="session">Vista Education Campus Post-High Transition Programs</div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import TtsButton from '@/components/Ttsbutton.vue';
</script>

<style scoped>
.schedule-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  color: #07396b;
  text-align: center;
  margin-bottom: 40px;
}

.schedule-item {
  display: flex;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.schedule-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.time {
  flex: 0 0 100px;
  font-weight: bold;
  color: #07396b;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

.session {
  flex-grow: 1;
  font-size: 1.1rem;
  padding-left: 20px;
  border-left: 2px solid #07396b;
}

@media (max-width: 600px) {
  .schedule-item {
    flex-direction: column;
  }
  
  .time {
    margin-bottom: 10px;
  }
  
  .session {
    padding-left: 0;
    padding-top: 10px;
    border-left: none;
    border-top: 2px solid #07396b;
  }
}
</style>