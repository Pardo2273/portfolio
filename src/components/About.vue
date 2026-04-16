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

.container{
  background: linear-gradient(to bottom, #121e3a 0%, #1e315f 46%, #182c4d 100%);
  filter: brightness(110%);
  font-family: var(--font-main);
  color: var(--text);
  border-top: 1px solid var(--surface);
}

.about-child-2 ul{
    padding: 0;
    list-style: none;
  }

@media (min-width: 320px) and (max-width: 767px) {

  .container {
    display: flex;
    flex-direction: column-reverse;
    padding: 0 1%;
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
  }

  .about-child-2 li {
    padding: 10px;
    border-bottom: 1px solid var(--text);
    border-radius: 5px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .container{
    display: flex;
    flex-direction: column-reverse;
  }

  .about-child-1{
    margin: 0 4%;
    text-align: justify;
    font-size: large;
  }

  .about-child-2 h3 {
    text-align: center;
    font-size: xx-large;
  }

  .about-child-2 ul{
    display: flex;
    justify-content: space-around;
    font-size: large;
  }

  .about-child-2 li {
    padding: 10px;
    border-bottom: 1px solid var(--text);
    border-radius: 5px;
  }
}

@media (min-width: 1024px) {
  .container{
    display: flex;
    flex-direction: column-reverse;
  }

  .about-child-1{
    margin: 0 2%;
    text-align: justify;
    font-size: large;
  }

  .about-child-1 p {
    font-size: x-large;
  }

  .about-child-2 h3 {
    text-align: center;
    font-size: 40px;
  }

  .about-child-2 ul{
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    font-size: xx-large;
    line-height: 1.6;
  }

  .about-child-2 li {
    padding: 2px;
    border-bottom: 1px solid hsl(0, 2%, 78%);
    
  }
}
</style>
