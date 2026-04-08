<script setup>
import ProjectCard from '../components/ProjectCard.vue'

defineProps({
  projects: Array,
})
</script>

<template>
  <section>
    <h3>Featured Projects</h3>

    <ProjectCard :projects="projects" />
  </section>
</template>

<style scoped>

h3{
  margin: 0;
  padding: 1%;
  background: var(--bg);
  font-family: var(--font-main);
  color: var(--text);
  border-top: 2px solid var(--text);
  filter: brightness(150%);
}

@media (min-width: 320px) and (max-width: 1023px) {
  h3 {
    padding: 1.5% 0;
    text-align: center;
    font-size: xx-large;
  }
}

@media (min-width: 1024px) {
    h3 {
      text-align: center;
      font-size: 40px;
    }
  }
</style>
