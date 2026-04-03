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
@media (min-width: 320px) and (max-width: 767px) {
  h2 {
    text-align: center;
    font-size: xx-large;
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
    list-style: none;
    padding: 0;
  }

  li {
    box-shadow: -4px 6px 11px 3px #23282b;
  }

  i {
    font-size: 48px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  h2 {
    text-align: center;
    font-size: xx-large;
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
    padding: 0;
    list-style: none;
  }

  li {
    padding: 10px;
    box-shadow: inset 0px -6px 5px -5px rgba(0, 0, 0, 0.63);
    border-radius: 5%;
  }

  li i {
    font-size: 64px;
  }
}

@media (min-width: 1024px) {
  h2 {
    text-align: center;
    font-size: 40px;
    margin: 0;
  }

  section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  h3 {
    font-size: 25px;
    font-weight: lighter;
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    margin-top: 30px;
  }

  i {
    font-size: 60px;
  }
}
</style>
