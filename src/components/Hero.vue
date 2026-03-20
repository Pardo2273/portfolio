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
.profile-pic {
  width: 100px;
  border-radius: 50%;
}
@media (min-width: 320px) and (max-width: 767px) {
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cont-div-one{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: large;
  }

  .cont-div-two{
    font-size: large;
    text-align: center;
  }

  .profile-pic {
    width: 150px;
  }
}

@media (min-width: 768px) and (max-width: 1023px){

  .container{
    display: flex;
    flex-direction: column;
  }

  .cont-div-one{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: x-large;
  }

  .profile-pic{
    width: 150px;
    border-radius: 25%;
  }

  .cont-div-two{
    display: flex;
    flex-direction: column column;
    gap: 20px;
    font-size: x-large;
    text-align: center;
  }



  
}


</style>
