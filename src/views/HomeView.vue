<script setup>
    import Hero from '../components/Hero.vue'
    import Skills from '../components/Skills.vue'
    import FeaturedProjects from '../components/FeaturedProjects.vue'
    import About from '../components/About.vue'
    import Contact from '../components/Contact.vue'

    import { projects } from '../data/projects.js';

    let featuredProjects = projects.filter(project => project.category);
</script>

<template>
  <Hero />
  <Skills />
  <FeaturedProjects :projects="featuredProjects"/>
  <About />
  <Contact />
</template>
