<template>
    <button @click="speakText"></button>
  </template>
  
  <script setup>
  function speakText() {
    if ('speechSynthesis' in window) {
      const fullText = document.documentElement.innerText
      const utterance = new SpeechSynthesisUtterance(fullText)
      window.speechSynthesis.speak(utterance)
    }
  }
  </script>