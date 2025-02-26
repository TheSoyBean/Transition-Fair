<template>
  <div>
    <NavBar />
    <h2>&nbsp;&nbsp;About the App Developers</h2>
    <p>&nbsp;&nbsp;The DSD Transition Fair App was created by Rachel Buttefield, Weston Schwartz, and Sawyer Heaton from the DSD Catalyst Center.</p>
    <br>
    <img src="@/assets/Rachel.jpg" alt="Rachel Butterfield" id="peoplePics">
    <div id="peopleDetails">
      <h3>Rachel Butterfield</h3>
      <p>Rachel has always wanted to be a programmer since she was young. She </p>
    </div>
    <br>
    <img src="@/assets/Weston.jpg" alt="Weston Schwartz" id="peoplePics">
    <div id="peopleDetails">
      <h3>Weston Schwartz</h3>
      <p></p>
    </div>
    <br>
    <img src="@/assets/Sawyer.jpg" alt="Sawyer Heaton" id="peoplePics">
    <div id="peopleDetails">
      <h3>Sawyer Heaton</h3>
      <p></p>
    </div>
  </div>
</template>
  
<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
#peopleDetails {
  text-align: center;
}
#peoplePics {
  width: 20%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>