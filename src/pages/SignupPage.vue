<template>
  <div class="logo">
    <h1>
      <span class="green">GO<span class="blue">RECUP</span>'</span>
    </h1>
  </div>
  <div class="signup-container">
    <form @submit.prevent="handleSubmit" class="signup-form">
      <h2 class="signup-title">REGISTRATION</h2>
     
        <label for="username">Username</label>
        <input type="text" v-model="username" id="username" required />
     
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" required />
      
        <label for="confirm-password">Confirm Password</label>
        <input type="password" v-model="confirmPassword" id="confirm-password" required />
      
      <button type="submit" class="signup-button">Create My Account</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
  name: "SignupForm",
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async submitSignupRequest() {
      try {
        await axios.post('https://gorecup-back-114fb5f55ba8.herokuapp.com/auth/signup/', {
          username: this.username,
          password: this.password,
        });
        const response = await axios.post('https://gorecup-back-114fb5f55ba8.herokuapp.com/auth/login/', {
          username: this.username,
          password: this.password
        });

        console.log('Signup successful!');

        const accessToken = response.data.tokens.access;
        const refreshToken = response.data.tokens.refresh;

        Cookies.set('access_token', accessToken, { expires: 1 }); 
        Cookies.set('refresh_token', refreshToken, { expires: 7 }); 

        console.log("Cookies are set ! User is logged !")
        
        this.$router.push('/');
        
      } catch (error) {
        console.error('Error during signup:', error);
        
      }
    },
    handleSubmit() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (this.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    this.submitSignupRequest();
  },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lilita+One&display=swap");


.signup-container {
  display: flex;
  
  align-items: center;
  margin-top: 20px;
}



.signup-form {
  display: flex;
  flex-direction: column;
  margin-left: 10vw;
  align-items: left;
  text-align: left;
  width: 300px;
  
  padding: 20px;
  gap: 20px;
  font-family: "Lilita One", cursive;

}

h2 {
    text-align: left;
  font-size: 3rem;
  margin-bottom: 20px;
  color: #2364aa;
  font-family: "Lilita One", cursive;
}


.logo {
  display: flex;
  margin-left: 5vw;
}

label {
  font-weight: bold;
  color: black;
  font-size: 1.5rem;

}

input {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #FCFFF7;
  width: 100%; 
}

button {
  font-family: "Lilita One", cursive;
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
h1 {
  align-content: left;
}
.green {
  color: #63a46c;
  font-size: 5rem;
  text-decoration: none;
  font-family: "Lilita One", cursive;
}

.blue {
  color: #2364aa;
}
</style>
