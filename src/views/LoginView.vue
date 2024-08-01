<template>
  <div class="loginClass">
    <h2>Login</h2>
    <label for="email">Email</label>
    <input
      v-model="email"
      type="email"
      id="email"
      placeholder="Ingrese su correo..."
    />
    <br />
    <label for="password">Contraseña</label>
    <input
      v-model="password"
      type="password"
      id="password"
      placeholder="Ingrese su contraseña..."
    />
    <br />
    <button @click="login({ email, password })">Iniciar sesión</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style scoped>
.loginClass {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #ececec, #f5f5f5);
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  box-sizing: border-box;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

label {
  margin-top: 10px;
  margin-bottom: 5px;
  color: #666;
  font-size: 1rem;
}

input {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

input:focus {
  border-color: #4facfe;
  box-shadow: 0 0 8px rgba(0, 122, 255, 0.2);
  outline: none;
}

button {
  padding: 10px 20px;
  background-color: #4facfe;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #00a2ff;
}

button:focus {
  outline: none;
}

button:active {
  background-color: #008fd3;
}
</style>
