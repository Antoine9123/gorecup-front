<template>
    <div class="page-container">
      <div class="login-container">
        <h1><span class="green">GO<span class="blue">RECUP</span>'</span></h1>
        <form @submit.prevent="handleLogin" class="form-group">
          <label for="username">Username</label>
          <input type="text" v-model="username" id="username" required />
          
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" required />
          
          <button type="submit">Login</button>
          <router-link class="signup" to="/signup">To get started, please sign up here</router-link>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Cookies from 'js-cookie';

  export default {
    
    name: 'LoginPage',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async handleLogin() {
      try {
        const response = await axios.post('https://gorecup-back-114fb5f55ba8.herokuapp.com/auth/login/', {
          username: this.username,
          password: this.password
        });

        const accessToken = response.data.tokens.access;
        const refreshToken = response.data.tokens.refresh;

        Cookies.set('access_token', accessToken, { expires: 1 }); 
        Cookies.set('refresh_token', refreshToken, { expires: 7 }); 

        console.log('Login successful!', response.data);
        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);

        
        this.$router.push('/'); 

      } catch (error) {
        console.error('Error during login:', error);
        // Handle error (e.g., show error message to the user)
      }
    }
  }
};
  </script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

/* Global styles */
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #FCFFF7;
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 20px;
  border-radius: 10px;
  gap: 5vh;
  text-align: center; 
}



.form-group {
  display: flex;
  flex-direction: column;
  align-items: center; 

  gap: 13px;
  width: 20vw;
  padding: 20px;
  border-radius: 5px;
}

label {
  color: black;
  font-size: 2rem; 
  font-family: 'Lilita One', cursive;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #FCFFF7;
  width: 100%; 
}

button {
  font-family: 'Lilita One', cursive;
  padding: 10px 20px;
  background-color: #ca3b3b;
  font-size: 1.5rem; 
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 20px;
  
  color: white;
  border: none;
  cursor: pointer;
  outline: none; 
  transition: opacity 0.5s ease;
}

button:hover {
  opacity: 0.8; 
}



.green {
  color: #63a46c;
  font-size: 10rem; 
  text-decoration: none;
  font-family: 'Lilita One', cursive;
}


.blue {
  color: #2364aa;

}

.signup{
    font-family: 'Lilita One', cursive;
    color: #2364aa
}
</style>