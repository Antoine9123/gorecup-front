<template>
    <nav class="navbar">
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/login" class="nav-link">Login</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  };
  </script>