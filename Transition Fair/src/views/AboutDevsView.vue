<template>
  <div>
    <NavBar />
    <h2>About the App Developers</h2>
    <p>The DSD Transition Fair App was created by Rachel Buttefield, Weston Schwartz, and Sawyer Heaton from the DSD Catalyst Center.</p>
    
    <div class="dev-profile">
      <img src="@/assets/Rachel.jpg" alt="Rachel Butterfield" class="profile-pic">
      <div class="dev-info">
        <h3>Rachel Butterfield</h3>
        <p>Rachel has always wanted to be a programmer since she was young. She is a high schooler who is currently trying to get programming experience for the future so she can work on bigger and better projects. The programming languages she has learned include; Python, C++, HTML, CSS, and some Vue.</p>
      </div>
    </div>
    
    <div class="dev-profile">
      <img src="@/assets/Weston.jpg" alt="Weston Schwartz" class="profile-pic">
      <div class="dev-info">
        <h3>Weston Schwartz</h3>
        <p>Weston is an ambitious high school senior who plans on going to the University of Utah to further his studies and go into Game Development. He currently has certifications in HTML/CSS, Javascript, and Python. He also knows C++ and some C#.</p>
      </div>
    </div>
    
    <div class="dev-profile">
      <img src="@/assets/Sawyer.jpg" alt="Sawyer Heaton" class="profile-pic">
      <div class="dev-info">
        <h3>Sawyer Heaton</h3>
        <p>Sawyer is always learning, whether it be programming, history, science or art, no knowledge is safe from his curiosity. He has skills in several programming languages and cybersecurity.</p>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
h2 {
  text-align: center;
  font-size: 2rem;
  margin-top: 1rem;
  color: #333;
}

p {
  text-align: center;
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #666;
}


.dev-profile {
  display: flex;
  align-items: center;
  margin: 2rem 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 2rem;
}

.dev-info {
  flex: 1;
}

.dev-info h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .dev-profile {
    flex-direction: column;
    text-align: center;
  }
  
  .profile-pic {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>