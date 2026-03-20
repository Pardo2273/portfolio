<script setup></script>

<template>
  <section class="container">
    <h3>Get In Touch</h3>
    <p>If you'd like to connect or discuss opportunities, feel free to reach out.</p>
    <ul>
      <li><a href="mailto:gabriel.prado2273@gmail.com" class="mail">gabriel.prado2273@gmail.com</a></li>
      <li>
        <a
          href="https://www.linkedin.com/in/gabriel-josué-prado-lópez-949592245"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="devicon-linkedin-plain-wordmark colored"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/Pardo2273" target="_blank" rel="noopener noreferrer">
          <i class="devicon-github-original-wordmark colored"></i>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>

@media (min-width: 320px) and (max-width: 767px) {
  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .container h3 {
    margin: 0;
    text-align: center;
    font-size: xx-large;
  }

  .container p {
    font-size: large;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  .container ul {
    padding: 0;
    list-style: none;
    font-size: large;
    margin: 0;
  }

  .container li {
    text-align: center;
    color: black;
  }

  .container li:first-child {
    margin-top: 10px;
  }

  .container a {
    text-decoration: none;
    color: black;
  }

  .mail{
    border-bottom: 1px dotted black;
  }

  .colored {
    font-size: 5rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .container{
    display: flex;
    flex-direction: column;
  }

  .container h3 {
    margin: 0;
    text-align: center;
    font-size: xx-large;
  }
  .container p {
    font-size: large;
    text-align: center;
    padding: 0;
  }

  .container ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: large;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .container li a{
    text-decoration: none;
  }

  .mail {
    color: black;
  }

  .devicon-linkedin-plain-wordmark {
    font-size: 7rem;
  }

  .devicon-github-original-wordmark {
    font-size: 4rem;
  }
}
</style>
