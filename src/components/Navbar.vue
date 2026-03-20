<script setup>

</script>

<template>
    <nav>
        <ul>
            <li><RouterLink to="/" class="home-icon">Home<img class="home-icon-img" src="../assets/icons/home.png" alt="home"></RouterLink></li>
            <li><RouterLink to="/projects" class="project-icon">Projects<img class="project-icon-img" src="../assets/icons/projects.png" alt="projects"></RouterLink></li>
            <li><RouterLink to="/resume" class="resume-icon">Resume<img class="resume-icon-img" src="../assets/icons/resume.png" alt="resume"></RouterLink></li>
        </ul>
    </nav>
</template>

<style scoped>
.home-icon-img, .project-icon-img, .resume-icon-img{
    display: none;
}
/* Mobile styles */
@media (min-width: 320px) and (max-width: 767px) {
    nav{
        padding: 10px;
    }

    ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
    }

    a{
        text-decoration: none;
        color: black;
    }

    .home-icon, .project-icon, .resume-icon{
        font-size: 0;
    }

    .home-icon-img, .project-icon-img, .resume-icon-img{
        display: block;
        width: 40px;
    }

}

/* Tablet styles */
@media (min-width: 768px) and (max-width: 1023px){

    nav{
        padding: 20px;
    }

    ul{
        list-style: none;
        display: flex;
        justify-content: space-around;
    }

    a{
        text-decoration: none;
        color: black;
        border: 1px solid black;
        border-radius: 5%;
        padding: 10px;
    }

}
</style>