<script setup>
defineProps({
  projects: Array,
})
</script>

<template>
  <section>
    <div>
      <div v-for="project in projects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <p>Description: {{ project.description }}</p>
        <p>Technologies: {{ project.technologies }}</p>
        <div>
          <a :href="project.github" target="_blank"
            >Github Repository <i class="devicon-github-original colored"></i
          ></a>
          <a :href="project.demo" target="_blank">View Demo </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
i {
  font-size: 1.5em;
}
</style>
