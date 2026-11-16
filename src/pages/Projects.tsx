import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { site } from '../data/site'

function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  useEffect(() => {
    const previous = document.title
    document.title = `Projects | ${site.name}`
    return () => {
      document.title = previous
    }
  }, [])

  function handleTagClick(tag: string) {
    setSelectedTag((current) => (current === tag ? null : tag))
  }

  return (
    <section>
      <h1>Projects</h1>
      <p className="note">
        Selected work. Each card is one object in src/data/projects.ts.
      </p>

      {selectedTag && (
        <div className="filter-bar">
          <p>
            Selected technology: <strong>{selectedTag}</strong>. Filtering
            arrives in session 5.
          </p>
          <button
            type="button"
            className="link-button"
            onClick={() => setSelectedTag(null)}
          >
            Clear
          </button>
        </div>
      )}

      {projects.length === 0 ? (
        <p>No projects yet. Add one to src/data/projects.ts.</p>
      ) : (
        <ul className="card-grid">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard
                project={project}
                selectedTag={selectedTag}
                onTagClick={handleTagClick}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Projects