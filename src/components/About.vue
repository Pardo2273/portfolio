<script></script>

<template>
  <section class="container">
    <div class="about-child-1">
      <p>
        I enjoy building systems that simplify complex processes and turn data into useful insights.
        Much of my work focuses on backend development, automation tools, and solutions that reduce
        manual tasks in real-world workflows.
      </p>
      <p>
        I have experience working with technologies such as .NET, Python, and SQL databases,
        developing tools for data processing, reporting, and system integration. I’m particularly
        interested in creating practical software that improves efficiency and supports
        decision-making through structured information. Currently, I’m expanding my full-stack
        development skills while building projects with modern frontend frameworks like Vue.
      </p>
    </div>
    <div class="about-child-2">
      <h3>About me</h3>
      <ul>
        <li>Backend</li>
        <li>Automation</li>
        <li>Data tools</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 320px) and (max-width: 767px) {

  .container {
    display: flex;
    flex-direction: column-reverse;
    margin: 0 1%;
    font-size: large;
    text-align: justify;
  }

  .about-child-2 h3 {
    text-align: center;
    font-size: xx-large;
  }

  .about-child-2 ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
  }

  .about-child-2 li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    border-radius: 5px;
  }
}
</style>
