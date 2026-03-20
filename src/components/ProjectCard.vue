<script setup>
defineProps({
  projects: Array,
})
</script>

<template>
  <div class="container">
    <div v-for="project in projects" :key="project.title" class="card">
      <h4>{{ project.title }}</h4>
      <p>Description: {{ project.description }}</p>
      <p>Technologies: {{ project.technologies }}</p>
      <div class="buttoms">
        <div class="btn-git">
          <i class="devicon-github-original colored"></i>
          <a :href="project.github" target="_blank">Github </a>
        </div>
        <a :href="project.demo" target="_blank">View Demo </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
i {
  font-size: 1.5em;
}

@media (min-width: 320px) and (max-width: 767px) {
  .card {
    box-sizing: border-box;
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 1%;
    padding: 10px;
    margin: 0.5% 0;
  }
  .card h4 {
    font-size: x-large;
    font-weight: lighter;
    font-style: normal;
    text-align: center;
  }

  .card p {
    margin-left: 3%;
    font-size: large;
  }

  .buttoms {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .buttoms a {
    text-decoration: none;
    margin-left: 3%;
    font-size: large;
    text-align: center;
    color: black;
  }

  .btn-git {
    margin: 0 20px;
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  .card {
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 1%;
    padding: 20px;
    margin: 0.5% 0;
  }

  .card h4 {
    font-size: x-large;
    font-weight: lighter;
    font-style: normal;
    text-align: center;
  }

  .card p {
    font-size: large;
  }

  .buttoms {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }

  .buttoms a {
    text-decoration: none;
    color: black;
  }

  .btn-git {
    display: flex;
    align-items: center;
    gap: 5px;
  }

}
</style>
