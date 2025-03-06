<template>
  <footer class="footer">
    <router-link id="app-developers" to="/about-dev">About the App Developers</router-link>
    <a id = "partner-info" href = "https://www.davis.k12.ut.us/o/dsd/page/all-agencies-organizations"> Click here for Provider Information</a>
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
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
}

.app-developers{
  text-align: center;
  margin-left: 0;
}

.partner-info{
  text-align: left;
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