<script setup></script>

<template>
  <section class="container">
    <div class="btn-container">
      <button class="btn-dowload">Download Resume</button>
    </div>
    <section class="summary">
      <h2>Professional Summary</h2>
      <p>
        Software developer focused on building useful software that solves real operational
        problems. My work includes developing automation tools, data-processing utilities, and
        internal applications that help teams work more efficiently.
      </p>
    </section>

    <section class="experience">
      <h2>Experience</h2>

      <h3>IT Consultant & Technical Advisor</h3>
      <span>Central American Institute of Public Administration</span>
      <p>Sep 2025 – Feb 2026</p>
      <ul>
        <li>
          Led the implementation of digital systems to automate academic and administrative
          processes.
        </li>
        <li>
          Designed Power BI dashboards to support institutional performance monitoring and
          decision-making.
        </li>
      </ul>

      <h3>Data Systems Developer</h3>
      <span>Academic Project / Internship</span>
      <p>Jun 2025 – Aug 2025</p>
      <ul>
        <li>Built a data-driven decision support system integrating multiple data sources.</li>
        <li>Developed a REST API with Flask and implemented a PostgreSQL database.</li>
        <li>
          Applied machine learning models and time-series forecasting using Python, Scikit-learn,
          and Prophet.
        </li>
      </ul>

      <h3>Process Automation Developer</h3>
      <span>Internal Software Development</span>
      <p>Jan 2025 – Jun 2025</p>
      <ul>
        <li>
          Developed desktop applications to automate internal workflows and reduce manual
          operational tasks.
        </li>
        <li>
          Built tools for data processing and visualization using Python, Tkinter, and Matplotlib.
        </li>
        <li>Improved operational efficiency by digitizing previously manual processes.</li>
      </ul>
    </section>

    <section class="education">
      <h2>Education</h2>

      <h3>Licentiate Degree in Systems Engineering</h3>
      <span>Universidad Fidélitas</span>
      <p>Graduated 2026</p>

      <h3>Bachelor’s Degree in Systems Engineering</h3>
      <span>Universidad Fidélitas</span>
      <p>Graduated 2024</p>

      <h3>Professional Membership</h3>
      <span>Professional Member - CPIC</span>
      <p>Affiliated 2024</p>

      <h3>Oracle Next Education Program Certificate</h3>
      <span>Oracle & Alura</span>
      <p>Completed 2023</p>
    </section>

    <section class="skills">
      <h2>Technical Skills</h2>
      <h3>Programming Languages</h3>
      <ul>
        <li>Python</li>
        <li>C#</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>Dart</li>
        <li>PHP</li>
      </ul>

      <h3>Frameworks and Technologies</h3>
      <ul>
        <li>ASP .Net Framework</li>
        <li>.Net Core</li>
        <li>Flask</li>
        <li>Spring Boot</li>
        <li>React</li>
        <li>Flutter</li>
        <li>Angular</li>
        <li>Vue</li>
      </ul>

      <h3>Databases</h3>
      <ul>
        <li>PostgreSQL</li>
        <li>SQL Server</li>
        <li>MySQL</li>
        <li>MariaDB</li>
        <li>Mongo DB</li>
        <li>Firebase</li>
        <li>Oracle Database</li>
      </ul>
    </section>

    <section class="dev-areas">
      <h2>Development Areas</h2>
      <ul>
        <li>Backend Development</li>
        <li>Automation Tools</li>
        <li>Data Systems</li>
        <li>Internal Software Tools</li>
        <li>API Development</li>
      </ul>
    </section>

    <section class="languages">
      <h2>Languages</h2>
      <ul>
        <li>Spanish (Native)</li>
        <li>English (Fluent)</li>
      </ul>
    </section>

    <div class="btn-container">
      <button class="btn-dowload">Download Resume</button>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background: var(--bg);
  font-family: var(--font-main);
  color: var(--text);
}

li::marker {
  color: var(--accent);
}

@media (min-width: 320px) and (max-width: 767px) {
  .btn-container {
    display: flex;
    justify-content: right;
    padding: 2%;
  }

  .btn-dowload {
    width: 10rem;
    background-color: var(--accent);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .summary h2 {
    font-size: xx-large;
  }

  .summary p {
    margin: 2%;
    text-align: justify;
  }

  .experience {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .experience h2 {
    font-size: x-large;
    margin: 0.5rem;
  }

  .experience h3 {
    font-size: large;
    margin: 0.5rem;
  }

  .experience span {
    font-size: medium;
    font-style: italic;
  }

  .experience p {
    font-size: medium;
    margin: 0.5rem;
  }

  .experience ul {
    margin: 0.5rem;
    list-style: square;
  }

  .experience ul li {
    text-align: justify;
  }

  .education {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .education h2 {
    font-size: xx-large;
    margin: 0.5rem;
  }

  .education h3 {
    font-weight: lighter;
    font-size: large;
    margin: 0.5rem;
  }

  .education span {
    font-size: medium;
    font-style: italic;
  }

  .education p {
    font-size: medium;
    margin: 0.5rem;
  }

  .skills {
    display: flex;
    flex-direction: column;
  }

  .skills h2 {
    text-align: center;
    font-size: xx-large;
    margin: 0.5rem;
  }

  .skills h3 {
    text-align: center;
    font-size: large;
    margin: 0.5rem;
  }

  .skills ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 0.5rem;
    list-style: square;
  }

  .skills ul li {
    margin: 0 2px;
  }

  .dev-areas {
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  .dev-areas h2 {
    text-align: center;
    font-size: xx-large;
    margin-top: 1rem;
  }

  .dev-areas ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 0.5rem;
    list-style: square;
  }

  .dev-areas ul li {
    margin: 0 2px;
  }

  .languages {
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  .languages h2 {
    text-align: center;
    font-size: xx-large;
    margin-top: 1rem;
  }

  .languages ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 0.5rem;
    list-style: none;
    margin-bottom: 2rem;
  }

  .languages ul li:first-child {
    border-right: 1px solid var(--accent);
    padding-right: 15px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .btn-container {
    display: flex;
    justify-content: left;
    padding: 30px;
  }

  .btn-dowload {
    width: 15rem;
    height: 3rem;
    background-color: var(--accent);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .summary h2 {
    margin: 0;
    font-size: xx-large;
  }

  .summary p {
    margin: 1% 2%;
    text-align: center;
    font-size: 20px;
  }

  .experience,
  .education,
  .skills,
  .dev-areas,
  .languages {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    padding: 1% 10%;
  }

  .experience h2 {
    text-align: center;
    font-size: xx-large;
    margin: 0.5rem;
  }

  .experience h3 {
    font-size: 22px;
    margin: 0.5rem 0;
  }

  .experience span {
    font-size: 20px;
    font-style: italic;
  }

  .experience p {
    font-size: 18px;
    margin: 0.5rem 0;
    font-style: italic;
  }

  .experience ul {
    margin: 0.5rem 0;
    list-style: square;
    font-size: 20px;
  }

  .experience ul li {
    text-align: justify;
  }

  .education h2,
  .skills h2,
  .dev-areas h2,
  .languages h2 {
    font-size: xx-large;
    margin: 0.5rem 0;
  }

  .education h3 {
    font-weight: lighter;
    font-size: 22px;
    margin: 0.5rem 0;
  }

  .education span {
    font-size: 20px;
    font-style: italic;
  }

  .education p {
    font-size: 18px;
    margin: 0.8rem 0;
    font-style: italic;
  }

  .skills h3 {
    font-size: 22px;
    font-weight: lighter;
    margin: 0.5rem 0;
  }

  .skills ul,
  .dev-areas ul,
  .languages ul {
    margin: 0.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;
    list-style: square;
  }
}

@media (min-width: 1024px) {
  .btn-container {
    display: flex;
    justify-content: left;
    padding: 30px;
  }

  .btn-dowload {
    width: 10rem;
    height: 3.5rem;
    background-color: var(--accent);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .summary h2,
  .experience h2,
  .education h2,
  .skills h2,
  .dev-areas h2,
  .languages h2 {
    margin: 1% 2%;
    font-size: 40px;
  }

  .summary p {
    margin: 1% 2%;
    text-align: center;
    font-size: x-large;
  }

  .experience h3 {
    margin: 1% 2%;
    font-size: 28px;
    font-weight: 500;
  }

  .experience span,
  .education span {
    margin: 1% 2%;
    font-size: 22px;
    font-style: italic;
    font-weight: lighter;
  }

  .experience p,
  .education p {
    margin: 1% 2%;
    font-size: 16px;
    font-weight: 500;
    font-style: italic;
  }

  .experience ul,
  .dev-areas ul,
  .skills ul,
  .languages ul {
    margin: 1% 2%;
    list-style: circle;
    font-size: 20px;
  }

  .experience ul li,
  .dev-areas ul li,
  .skills ul li,
  .languages ul li {
    margin-bottom: 8px;
  }

  .education h3,
  .skills h3 {
    margin: 1% 2%;
    font-size: 28px;
    font-weight: 500;
  }

  .education p::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--text);
    margin: 1% 0;
  }
}
</style>
