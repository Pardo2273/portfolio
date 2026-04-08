<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'

defineProps({
  projects: Array,
})
</script>

<template>
  <section>
    <h3>Projects</h3>
    <ProjectCard :projects="projects" />
  </section>
</template>

<style scoped>
h3 {
  margin: 0;
  padding: 1% 0;
  font-family: var(--font-main);
  text-align: center;
  font-size: 40px;
  color: var(--text);
  background: var(--bg);
  filter: brightness(150%);
}
</style>
