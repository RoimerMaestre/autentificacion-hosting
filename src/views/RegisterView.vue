<template>
  <div class="registerClass">
    <h2>Registro</h2>
    <label for="email">Email</label>
    <input v-model="email" type="email" id="email" placeholder="Ingrese su correo..." />
    <br />
    <label for="password">Contraseña</label>
    <input v-model="password" type="password" id="password" placeholder="Ingrese su contraseña..." />
    <br />
    <button @click="register">Registrarse</button>
  </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from "../config/firebaseConfig.js";

export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        console.log("Credenciales", userCredential);
        const user = userCredential.user;
        console.log("Usuario registrado", user);
      } catch (error) {
        console.log("Error en el registro", error);
      }
    },
  },
};
</script>

<style scoped>
.registerClass {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  box-sizing: border-box;
}

h2 {
  font-size: 2.5rem;
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
  border-color: #ff7a7a;
  box-shadow: 0 0 8px rgba(255, 122, 122, 0.2);
  outline: none;
}

button {
  padding: 10px 20px;
  background-color: #ff7a7a;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff4c4c;
}

button:focus {
  outline: none;
}

button:active {
  background-color: #e63939;
}
</style>
