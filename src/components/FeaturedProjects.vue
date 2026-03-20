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

@media (min-width: 320px) and (max-width: 767px) {
  h3 {
    text-align: center;
    font-size: xx-large;
  }
}

</style>