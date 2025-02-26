<template>
  <div>
    <NavBar />
    <table id="schedule-table">
      <thead>
        <tr>
          <th scope="col">Time</th>
          <th scope="col">Event 1</th>
          <th scope="col">Event 2</th>
          <th scope="col">Event 3</th>
          <th scope="col">Event 4</th>
          <th scope="col">Event 5</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">5:00</td>
          <td colspan="2"><button @click="changeButton($event, 0)">Weber State</button></td>
          <td><button @click="changeButton($event, 0)">USU</button></td>
          <td><button @click="changeButton($event, 0)">DSD</button></td>
          <td><button @click="changeButton($event, 0)">Education and Employment</button></td>
          <td><button @click="changeButton($event, 0)">Vocational Rehabilitation</button></td>
        </tr>
        <tr>
          <td scope="row">5:30</td>
          <td><button @click="changeButton($event, 1)">USU</button></td>
          <td><button @click="changeButton($event, 1)">DSD</button></td>
          <td><button @click="changeButton($event, 1)">Education and Employment</button></td>
          <td><button @click="changeButton($event, 1)">Vocational Rehabilitation</button></td>
        </tr>
        <tr>
          <td scope="row">6:00</td>
          <td colspan="2"><button @click="changeButton($event, 2)">Weber State</button></td>
          <td><button @click="changeButton($event, 2)">USU</button></td>
          <td><button @click="changeButton($event, 2)">DSD</button></td>
          <td><button @click="changeButton($event, 2)">Education and Employment</button></td>
          <td><button @click="changeButton($event, 2)">Vocational Rehabilitation</button></td>
        </tr>
        <tr>
          <td scope="row">6:30</td>
          <td><button @click="changeButton($event, 3)">USU</button></td>
          <td><button @click="changeButton($event, 3)">DSD</button></td>
          <td><button @click="changeButton($event, 3)">Education and Employment</button></td>
          <td><button @click="changeButton($event, 3)">Vocational Rehabilitation</button></td>
        </tr>
        <tr>
          <td scope="row">7:00</td>
          <td colspan="2"><button @click="changeButton($event, 4)">Weber State</button></td>
          <td><button @click="changeButton($event, 4)">USU</button></td>
          <td><button @click="changeButton($event, 4)">DSD</button></td>
          <td><button @click="changeButton($event, 4)">Education and Employment</button></td>
          <td><button @click="changeButton($event, 4)">Vocational Rehabilitation</button></td>
        </tr>
        <tr>
          <td scope="row">7:30</td>
          <td><button @click="changeButton($event, 5)">USU</button></td>
          <td><button @click="changeButton($event, 5)">DSD</button></td>
          <td><button @click="changeButton($event, 5)">Education and Employment</button></td>
          <td><button @click="changeButton($event, 5)">Vocational Rehabilitation</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import { reactive } from 'vue';

const selectedButtons = reactive({});

const changeButton = (event, rowIndex) => {
  // Deselect previous button in the same row
  if (selectedButtons[rowIndex]) {
    selectedButtons[rowIndex].style.backgroundColor = "";
  }

  // Select the clicked button
  event.target.style.backgroundColor = "#B2BEB5";
  selectedButtons[rowIndex] = event.target;
};
</script>

<style scoped>
#schedule-table {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 20px; /* Adjust this value as needed */
}
.td, .th {
  border-spacing: 10px;
}
</style>