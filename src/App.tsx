import React from 'react'

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  )
}

export default function App() {
  return (
    <div className="page">
      {/* Scrollable tabs navigation (acts as top bar) */}
      <nav className="tabs" aria-label="Section navigation">
        <div className="tabs-inner">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className="main">
        <h1 className="title">Hi, I’m Ameya 👋</h1>
        <p className="subtitle">
          Former Software Engineer on Azure Functions at Microsoft. Now an M.S. student in Computer Science at Stony Brook University.
          Interests: Azure Functions, SQL change tracking, Kubernetes, Go, C#, and visualization with LLMs.
        </p>

        <Section id="about" title="About">
          <ul className="bullets">
            <li>Built features across Azure Functions core and ecosystem to improve scale, logging, and container deployment.</li>
            <li>Previously contributed an SQL trigger to the Azure Functions SQL Extension.</li>
            <li>Based in Stony Brook, NY. Open to collaborating on interesting OSS projects.</li>
          </ul>
        </Section>

        <Section id="experience" title="Experience">
          <div className="card">
            <h3>Software Engineer — Azure Functions, Microsoft</h3>
            <p className="muted">Jul 2022 — Jul 2024 · Hyderabad, India</p>
            <ul className="bullets">
              <li>Supported “Functions on Container Apps” (managed Kubernetes), driving customer growth and improving deployment workflows.</li>
              <li>Engineered logging for function containers; reduced issue resolution time.</li>
              <li>Introduced target-based scaling for the SQL trigger, significantly lowering scale-up time.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Software Engineering Intern — Azure Functions, Microsoft</h3>
            <p className="muted">Jan 2022 — Jun 2022 · Hyderabad, India</p>
            <ul className="bullets">
              <li>Led development of an SQL trigger for Azure Functions with strong test coverage and adoption.</li>
            </ul>
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="card">
            <h3>Stony Brook University — M.S. in Computer Science</h3>
            <p className="muted">Aug 2024 — May 2026 · GPA 3.89/4 · Stony Brook, NY</p>
          </div>
          <div className="card">
            <h3>Manipal Institute of Technology — B.Tech in CSE</h3>
            <p className="muted">Jul 2018 — Jul 2022 · GPA 9.38/10 · Manipal, India</p>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <ul className="bullets">
            <li><strong>Languages:</strong> C#, Go, Java, Python, C++, C, JavaScript, TypeScript, SQL, CSS</li>
            <li><strong>Data:</strong> MySQL, PostgreSQL, Azure Cosmos DB, MongoDB, Redis</li>
            <li><strong>Frameworks & Tools:</strong> Azure (Functions, Container Apps, DevOps), .NET, Docker, Kubernetes, React, Angular, Git, Kafka, REST, gRPC, LLM APIs</li>
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <div className="card">
            <h3>PersonaViz — Thematic Persona Visualization with LLMs</h3>
            <p>Generates personas from qualitative text using embeddings, few-shot prompting, and interactive dashboards for exploration.</p>
            <p>
              <a className="link" href="http://webserv01.cs.stonybrook.edu:5001/" target="_blank" rel="noreferrer">
                Live demo →
              </a>
            </p>
          </div>
          <div className="card">
            <h3>Azure Functions SQL Extension</h3>
            <p>Added support for a SQL trigger that invokes a function when a tracked table changes.</p>
            <p>
              <a className="link" href="https://github.com/Azure/azure-functions-sql-extension" target="_blank" rel="noreferrer">
                github.com/Azure/azure-functions-sql-extension →
              </a>
            </p>
          </div>
          <div className="card">
            <h3>Azurify — Migration of Java Apps to Cloud</h3>
            <p>Used Azure tooling to streamline modernization of legacy Java services. Won first prize in “Hack for Developers”.</p>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p>
            Email: <a className="link" href="mailto:arele@cs.stonybrook.edu">arele@cs.stonybrook.edu</a>
          </p>
          <p>
            <a className="link" href="https://linkedin.com/in/ameya-rele" target="_blank" rel="noreferrer">LinkedIn</a>
            {' '}·{' '}
            <a className="link" href="https://github.com/ameyarele" target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </Section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Ameya Rele</span>
      </footer>
    </div>
  )
}
