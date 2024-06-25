<template>
    <div>
      <MapComponent />
    </div>
  </template>
  
  <script>
  import MapComponent from "../components/MapComponent.vue";
  
  export default {
    name: 'MainPage',
    components: {
      MapComponent,
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  