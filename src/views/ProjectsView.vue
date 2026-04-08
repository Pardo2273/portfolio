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
  text-align: center;
  font-size: 40px;
}
</style>
