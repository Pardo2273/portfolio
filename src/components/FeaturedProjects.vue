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
