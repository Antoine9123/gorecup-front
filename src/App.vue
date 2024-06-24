<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  height: 100vh;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  

}

body{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  background-color: #FCFFF7;
}

::selection {
  background-color: #2364aa; /* Couleur de fond de la sélection */
  color: #fcfff7; /* Couleur du texte sélectionné */
}
</style>
