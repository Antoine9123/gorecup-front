<template>
    <div class="signup-container">
      <h2 class="signup-title">Registration</h2>
      <form @submit.prevent="handleSubmit" class="signup-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" v-model="confirmPassword" id="confirm-password" required />
        </div>
        <button type="submit" class="signup-button">Create My Account</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignupForm',
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      handleSubmit() {
        
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        
      }
    }
  };
  </script>
  
  <style scoped>
  .signup-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .signup-title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #2364aa;
  }
  
  .signup-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
    width: 100%;
  }
  
  label {
    font-weight: bold;
    color: #2364aa;
  }
  
  input {
    padding: 8px;
    width: calc(100% - 16px);
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .signup-button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #2364aa;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .signup-button:hover {
    background-color: #1d4f8b;
  }
  </style>
  