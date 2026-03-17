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
    <h3>Frontend</h3>
    <ul>
      <li v-for="front in frontend" :key="front.name"><i :class="front.iconClass"></i></li>
    </ul>
  </section>

  <section>
    <h3>Backend</h3>
    <ul>
      <li v-for="back in backend" :key="back.name"><i :class="back.iconClass"></i></li>
    </ul>
  </section>

  <section>
    <h3>Databases</h3>
    <ul>
      <li v-for="database in databases" :key="database.name">
        <i :class="database.iconClass"></i>
      </li>
    </ul>
  </section>

  <section>
    <h3>Tools</h3>
    <ul>
      <li v-for="tool in tools" :key="tool.name"><i :class="tool.iconClass"></i></li>
    </ul>
  </section>
</template>

<style>
ul {
  list-style: none;
}

i{
  font-size: 48px;
}

/* i:hover{
  font-size: 60px;
} */
</style>
