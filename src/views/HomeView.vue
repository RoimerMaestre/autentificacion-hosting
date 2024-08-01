<template>
  <div class="loginClass">
    <h2 class="title">BIENVENIDO AL HOME CABALLERO</h2>
  </div>
</template>

<script>

</script>

<style scoped>
.loginClass {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #4facfe, #00f2fe);
  font-family: 'Roboto', sans-serif;
}

.title {
  font-size: 3rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>

  