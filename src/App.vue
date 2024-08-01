<template>
  <nav class="navbar">
    <router-link to="/" exact>Login</router-link>
    <router-link to="/register">Registro</router-link>
    <router-link to="/home">Home</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  background: #f8f9fa;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.navbar a {
  margin: 0 15px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 600;
  font-size: 1.2rem;
  transition: color 0.3s, transform 0.3s;
  position: relative;
}

.navbar a::after {
  content: "";
  display: block;
  width: 0;
  height: 3px;
  background: #42b983;
  transition: width 0.3s;
  position: absolute;
  bottom: -5px;
  left: 0;
}

.navbar a:hover {
  color: #42b983;
  transform: scale(1.1);
}

.navbar a:hover::after {
  width: 100%;
}

.navbar a.router-link-exact-active {
  color: #42b983;
}

.navbar a.router-link-exact-active::after {
  width: 100%;
}
</style>
