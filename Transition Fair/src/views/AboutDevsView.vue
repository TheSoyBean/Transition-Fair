<template>
  <div>
    <NavBar />
    <h2>&nbsp;&nbsp;About the App Developers</h2>
    <p>&nbsp;&nbsp;The DSD Transition Fair App was created by Rachel Buttefield, Weston Schwartz, and Sawyer Heaton from the DSD Catalyst Center.</p>
    <br>
    <img src="@/assets/Rachel.jpg" alt="Rachel Butterfield" id="peoplePics">
    <p id="peopleNames">Rachel Butterfield</p>
    <br>
    <img src="@/assets/Weston.jpg" alt="Weston Schwartz" id="peoplePics">
    <p id="peopleNames">Weston Schwartz</p>
    <br>
    <img src="@/assets/Sawyer.jpg" alt="Sawyer Heaton" id="peoplePics">
    <p id="peopleNames">Sawyer Heaton</p>
  </div>
</template>
  
<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
#peopleNames {
  text-align: center;
}
#peoplePics {
  width: 20%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>