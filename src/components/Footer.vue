<script></script>

<template>
  <section class="container">
    <p>&copy Gabriel Josué Prado López - Built with Vue</p>
    <div class="social">
      <a
        href="https://www.linkedin.com/in/gabriel-josué-prado-lópez-949592245"
        target="_blank"
        rel="noopener noreferrer"
        >
        <i class="devicon-linkedin-plain colored"></i>
      </a>
      <span class="barra"></span>
      <a href="https://github.com/Pardo2273" target="_blank" rel="noopener noreferrer"
        >
        <i class="devicon-github-original colored"></i>
      </a>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 320px) and (max-width: 767px) {
  .container {
    border-top: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .social a{
    font-size: large;
    color: black;
    text-decoration: none;
  }

  i{
    font-size: 2rem;
  }

  .barra{
    display: inline-block;
    width: 1px;
    height: 30px;
    background-color: black;
    margin: 0 10px;
  }
}
</style>
