<!-- ESTE ES EL COMPONENTE RAIZ, ES EL CONTENEDOR DE LA TODA LA INTERFAZ -->
<script setup>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <RouterView /> <!-- Este componente se encarga de mostrar la vista correspondiente según la ruta -->
  <Footer />
</template>

<style scoped></style>
