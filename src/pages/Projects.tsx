import {projects} from '../data/projects'

function Projects() {
  return (
    <section>
      <h1>Projects</h1>
       <p className="note">
        Selected work. Each card is one object in src/data/projects.ts
       </p>
       {projects.length === 0 ? (
        <p>No projects to show yet. Add some to src/data/projects.ts.</p>
       ) :(
        <ul className="card-grid">
          {projects.map((project) => (
            <li key={project.id} className="card">
              <div className="card-head">
                <h2>{project.title}</h2>
                {project.status === 'in-progress' && (
                  <span className="badge">In progress</span>
                )}
              </div>

              <p>{project.summary}</p>

              <ul className="tag-list" aria-label="Technologies">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <p className="card-links">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} source code`}
                >
                  Source code
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live demo`}
                  >
                    Live demo
                  </a>
                )}
                {project.apiUrl && (
                  <a
                    href={project.apiUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} API`}
                  >
                    API
                  </a>
                )}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Projects