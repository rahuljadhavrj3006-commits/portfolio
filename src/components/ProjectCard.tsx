import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project
  selectedTag: string | null
  onTagClick: (tag: string) => void
}

function ProjectCard({ project, selectedTag, onTagClick }: ProjectCardProps) {
    // console.log('Card', project.id)
  return (
       <article className="card">
        <div className="card-head">
          <h2>{project.title}</h2>
          {project.status === 'in-progress' && (
            <span className="badge">In progress</span>
          )}
        </div>

        <p>{project.summary}</p>

        <ul className="tag-list tag-list-buttons" aria-label="Technologies">
            {project.stack.map((tech) => (
                <li key={tech}>
                    <button
                        type="button"
                        className={selectedTag === tech ? 'tag-button tag-selected' : 'tag-button'}
                        onClick={() => onTagClick(tech)}
                        aria-pressed={selectedTag === tech}
                    >
                        {tech}
                    </button>
                </li>
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
                    aria-label={`${project.title} API `}
                >
                    API 
                </a>
            )}
        </p>
      </article>
  )
}

export default ProjectCard