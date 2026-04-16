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

.container{
  background: linear-gradient(to bottom, #182c4d 0%, #122544 50%, #16366b 100%);
  font-family: var(--font-main);
  color: var(--text);
}

.container li a{
    text-decoration: none;
    color: var(--text);
  }

  .colored{
    color: var(--text);
  }

@media (min-width: 320px) and (max-width: 767px) {
  .container {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
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
  }

  .container li:first-child {
    margin-top: 10px;
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

  .devicon-linkedin-plain-wordmark {
    font-size: 7rem;
  }

  .devicon-github-original-wordmark {
    font-size: 4rem;
  }
}

@media (min-width: 1024px) {
  .container{
    display: flex;
    flex-direction: column;
    padding: 1%;
  }

  .container h3 {
    margin: 0;
    text-align: center;
    font-size: 40px;
  }
  .container p {
    font-size: x-large;
    text-align: center;
    padding: 0;
  }

  .container ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: x-large;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container li {
    margin: 0 20px 0 0;
  }

  .devicon-linkedin-plain-wordmark {
    font-size: 7rem;
  }

  .devicon-github-original-wordmark {
    font-size: 4rem;
  }
}

</style>
