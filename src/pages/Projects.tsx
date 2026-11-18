import { useEffect, useId, useReducer } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { filterReducer, initialFilter } from '../lib/filterReducer'

function Projects() {
  const [filter, dispatch] = useReducer(filterReducer, initialFilter)
  const searchId = useId()

  useEffect(() => {
    const previous = document.title
    document.title = `Projects | ${site.name}`
    return () => {
      document.title = previous
    }
  }, [])

  const query = filter.query.trim().toLowerCase()
  const visibleProjects = projects.filter((project) => {
    const matchesTag = filter.tag === null || project.stack.includes(filter.tag)
    const matchesQuery =
      query === '' ||
      `${project.title} ${project.summary}`.toLowerCase().includes(query)
    return matchesTag && matchesQuery
  })
  const isFiltering = filter.tag !== null || query !== ''

  return (
    <section>
      <h1>Projects</h1>
      <p className="note">
        Selected work. Each card is one object in src/data/projects.ts.
      </p>

      <div className="search-row">
        <label htmlFor={searchId}>Search projects</label>
        <input
          id={searchId}
          type="search"
          className="search-input"
          value={filter.query}
          placeholder="Try api or sql"
          onChange={(event) =>
            dispatch({ type: 'setQuery', query: event.target.value })
          }
        />
      </div>

      <div className="filter-bar">
        <p role="status">
          Showing {visibleProjects.length} of {projects.length} projects
          {filter.tag && (
            <>
              {' '}
              with <strong>{filter.tag}</strong>
            </>
          )}
        </p>
        {isFiltering && (
          <button
            type="button"
            className="link-button"
            onClick={() => dispatch({ type: 'clear' })}
          >
            Clear filters
          </button>
        )}
      </div>

      {visibleProjects.length === 0 ? (
        <p>No projects match. Try another word or clear the filters.</p>
      ) : (
        <ul className="card-grid">
          {visibleProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard
                project={project}
                selectedTag={filter.tag}
                onTagClick={(tag) => dispatch({ type: 'toggleTag', tag })}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Projects