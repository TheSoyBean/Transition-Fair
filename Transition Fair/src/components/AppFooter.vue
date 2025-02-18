<template>
    <footer class="footer">
      <router-link to="/about-dev">About the App Developers</router-link>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    bottom: 0;
    width: 100%;
    position: fixed;
    background-color: #07396b;
    padding: 10px;
    margin-top: 10px;
    text-align: center;
  }
  
  .footer a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }
  </style>