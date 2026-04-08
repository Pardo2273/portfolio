<script setup></script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/" class="home-icon"
          >Home<img class="home-icon-img" src="../assets/icons/home.png" alt="home"
        /></RouterLink>
      </li>
      <li>
        <RouterLink to="/projects" class="project-icon"
          >Projects<img class="project-icon-img" src="../assets/icons/projects.png" alt="projects"
        /></RouterLink>
      </li>
      <li>
        <RouterLink to="/resume" class="resume-icon"
          >Resume<img class="resume-icon-img" src="../assets/icons/resume.png" alt="resume"
        /></RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.home-icon-img,
.project-icon-img,
.resume-icon-img {
  display: none;
}

nav {
  background: var(--bg);
  background: linear-gradient(135deg, #16366b 0%, #081a46 60%, #124991d8 100%);
  font-family: var(--font-main);
  border-bottom: 2px solid var(--accent);
  
}

ul{
  padding: 0;
}

a {
  color: var(--text);
  text-decoration: none;
}

/* Mobile styles */
@media (min-width: 320px) and (max-width: 767px) {
  nav {
    padding: 10px;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
  }

  .home-icon,
  .project-icon,
  .resume-icon {
    font-size: 0;
  }

  .home-icon-img,
  .project-icon-img,
  .resume-icon-img {
    display: block;
    width: 50px;
    padding: 8%;
    background-color: white;
    border-radius: 25%;
  }
}

/* Tablet styles */
@media (min-width: 768px) and (max-width: 1023px) {
  nav {
    padding: 20px;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  a {
    border: 1px solid white;
    border-radius: 5%;
    padding: 10px;
  }

  a:focus{
    font-weight: 600;
    color: var(--accent);
    background-color: transparent;
    border: 1px dashed white;
    

  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  nav {
    padding: 1% 8%;
  }

  ul {
    display: flex;
    gap: 5%;
    justify-content: right;
    list-style: none;
  }

  a:focus{
    border-bottom: var(--accent) solid 2px;
    padding-bottom: 12%;
  }

  a {
    font-size: x-large;
  }
}
</style>
