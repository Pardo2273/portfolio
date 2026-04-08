<script></script>

<template>
  <section class="container">
    <div class="cont-div-one">
      <img src="../assets/images/me.jpg" alt="Gabriel Josué Prado López" class="profile-pic" />
      <h2>Hi, I'm Gabriel Josué Prado López</h2>
    </div>
    <div class="cont-div-two">
      <p>
        Software Developer focused on backend systems, automation tools and practical software
        solutions.
      </p>
      <p>
        I build software solutions that automate processes, reduce manual work, and solve real-world
        problems.
      </p>
    </div>
  </section>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  font-family: var(--font-main);
  color: var(--text);
  background: linear-gradient(to right, #16366B 0%, #081A46 55%, #1E293B 100%);
  opacity: 0.96;
}


@media (min-width: 320px) and (max-width: 767px) {
  .container {
    align-items: center;
  }

  .cont-div-one {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
    font-size: large;
  }

  .cont-div-two {
    font-size: large;
    text-align: center;
  }

  .profile-pic {
    width: 150px;
    border-radius: 50%;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {

  .cont-div-one {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1% 0;
    font-size: x-large;
  }

  .profile-pic {
    width: 150px;
    border-radius: 25%;
  }

  .cont-div-two {
    display: flex;
    flex-direction: column column;
    gap: 20px;
    padding: 0 4%;
    font-size: x-large;
    text-align: center;
  }
}

@media (min-width: 1024px) {

  .profile-pic {
    width: 275px;
    border-radius: 50%;
  }

  .cont-div-one {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    font-size: xx-large;
    margin-top: 2%;
  }

  .cont-div-two {
    width: 80%;
    margin: 1% 10%;
    display: flex;
    flex-direction: column column;
    align-items: center;
    font-size: xx-large;
    text-align: center;
  }

  .cont-div-two p::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--text);
    margin-top: 20px;
  }
}
</style>
