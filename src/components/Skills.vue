<script>
import { frontend, backend, databases, tools } from '../data/skills.js'

export default {
  data() {
    return {
      frontend,
      backend,
      databases,
      tools,
    }
  },
}
</script>

<template>
  <h2>Skills</h2>

  <section>
    <div>
      <h3>Frontend</h3>
      <ul>
        <li v-for="front in frontend" :key="front.name"><i :class="front.iconClass"></i></li>
      </ul>
    </div>

    <div>
      <h3>Backend</h3>
      <ul>
        <li v-for="back in backend" :key="back.name"><i :class="back.iconClass"></i></li>
      </ul>
    </div>

    <div>
      <h3>Databases</h3>
      <ul>
        <li v-for="database in databases" :key="database.name">
          <i :class="database.iconClass"></i>
        </li>
      </ul>
    </div>

    <div>
      <h3>Tools</h3>
      <ul>
        <li v-for="tool in tools" :key="tool.name"><i :class="tool.iconClass"></i></li>
      </ul>
    </div>
  </section>
</template>

<style scoped>

h2 {
  margin: 0;
  padding: 1% 0;
  font-family: var(--font-main);
  text-align: center;
  font-size: xx-large;
  background: var(--bg);
  color: var(--text);
  text-shadow: var(--shadow);
  color: var(--text);
  text-shadow: 2px 2px 0 var(--accent);
  filter: brightness(160%);
  }

section{
  background: var(--bg);
  font-family: var(--font-main);
  color: var(--text); 
  filter: brightness(160%); 
}

ul{
  padding: 0;
  list-style: none;
}

li {
    padding: 10px;
    box-shadow: inset 0px -6px 59px -5px var(--accent);
    border-radius: 5%;
  }

.devicon-github-original.colored, .devicon-postgresql-plain.colored{
  color: var(--text);
}

@media (min-width: 320px) and (max-width: 767px) {

  h2{
    filter: brightness(120%);

  }
  section{
    filter: brightness(120%);
  }
  h3 {
    text-align: center;
    font-size: x-large;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 10%;
  }

  i {
    font-size: 48px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {

  h2{
    filter: brightness(125%);
  }

  section{
    filter: brightness(125%);
  }

  h3 {
    font-size: x-large;
    font-weight: lighter;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  ul {
    display: flex;
    gap: 20px;
  }

  li i {
    font-size: 64px;
  }
}

@media (min-width: 1024px) {
  h2 {
    font-size: 45px;
    margin: 0;
  }

  section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    padding: 2%;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 30px;
    box-shadow: 0px 2px 14px 6px var(--accent);;
  }

  h3 {
    font-size: 30px;
    font-weight: lighter;
    margin: 0;
  }

  ul {
    margin: 0;
  }

  li {
    margin-top: 30px;
    padding: 0;
    box-shadow: none;
  }

  i {
    font-size: 60px;
  }
}
</style>
