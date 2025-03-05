<template>
    <div id="navBar" class="navBar">
      <img src="@/assets/logo.png" class="logo" alt="Logo">
      <router-link to="/">Home</router-link>
      <router-link to="/summary">Summary</router-link>
      <router-link to="/schedule">Schedule</router-link>
      <router-link to="/map">Map</router-link>
      <router-link to="/survey">Exit Survey</router-link>
    </div>
  </template>
  
  <style scoped>
  .navBar {
    background-color: #07396b;
    overflow: hidden;
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px 20px;
  }
  
  .navBar a {
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  .navBar a:hover {
    background-color: #ddd;
    color: black;
  }
  
  .logo {
    height: 40px;
    margin-right: 20px;
  }


  @media (max-width: 728px){
  .logo{
    display: none;
  }

  .navBar a{
    font-size: 15px;
    flex: 1 1 auto;
  }
}

  </style>