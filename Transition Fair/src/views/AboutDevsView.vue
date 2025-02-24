<template>
  <div>
    <NavBar />
    <h2>&nbsp;&nbsp;About the App Developers</h2>
    <p>&nbsp;&nbsp;The DSD Transition Fair App was created by Rachel Buttefield, Weston Schwartz, and Sawyer Heaton from the DSD Catalyst Center.</p>
    <br>
    <img src="@/assets/Rachel.png" alt="Rachel Butterfield" id="peoplePics">
    <p id="peopleNames">Rachel Butterfield</p>
    <br>
    <img src="@/assets/Weston.png" alt="Weston Schwartz" id="peoplePics">
    <p id="peopleNames">Weston Schwartz</p>
    <br>
    <img src="@/assets/Sawyer.png" alt="Sawyer Heaton" id="peoplePics">
    <p id="peopleNames">Sawyer Heaton</p>
  </div>
</template>
  
<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
#peoplePics {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}
#peopleNames {
  text-align: center;
}
</style>