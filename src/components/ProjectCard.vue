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
          <a :href="project.github" target="_blank">Github</a>
        </div>
        <a class="btn-demo" :href="project.demo" target="_blank">View Demo </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: var(--bg);
  font-family: var(--font-main);
  color: var(--text);
  filter: brightness(150%);
}

.card {
  filter: brightness(110%);
  box-shadow: inset 2px -2px 2px 1px var(--accent);
}

.buttoms a {
  text-decoration: none;
  color: var(--text);
}

.btn-git,
.btn-demo {
  padding: 1%;
  border: 1px solid var(--accent);
  box-shadow: 1px 2px 3px 1px var(--accent);
  text-align: center;
}

.devicon-github-original.colored {
  color: var(--text);
}

@media (min-width: 320px) and (max-width: 767px) {
  .container {
    padding: 1% 5%;
  }

  .card {
    box-sizing: border-box;
    width: 100%;
    border-radius: 1%;
    padding: 5% 0;
    margin-bottom: 3%;
    box-shadow: inset 2px -2px 6px 3px var(--accent);
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
    margin-left: 3%;
    font-size: large;
    text-align: center;
  }

  .btn-git {
    margin: 0 20px;
    justify-content: center;
  }

  i {
    font-size: 1.5em;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 2% 0;
  }
  .card {
    box-sizing: border-box;
    border: 2px solid var(--accent);
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

  .btn-git {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  i {
    font-size: 1.5em;
  }
}

@media (min-width: 1024px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 5%;
    width: 90%;
    padding: 1% 5%;
  }

  .card {
    box-sizing: border-box;
    border: 1px solid var(--accent);
    border-radius: 1%;
    padding: 20px;
    margin: 0.5% 0;
    width: 30%;
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
    font-size: large;
  }

  .btn-git {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  i {
    font-size: 2em;
  }
}
</style>
