import { useEffect, useRef, useState } from 'react'
import Section from '../components/Section'
import { aboutParagraphs } from '../data/about'
import { experience } from '../data/experience'
import { site } from '../data/site'
import { skillGroups } from '../data/skills'

function About() {
  const [showHighlights, setShowHighlights] = useState(false)
  const experienceRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const previous = document.title
    document.title = `About | ${site.name}`
    return () => {
      document.title = previous
    }
  }, [])

  function jumpToExperience() {
    experienceRef.current?.scrollIntoView()
    experienceRef.current?.focus({ preventScroll: true })
  }

  return (
    <>
      <h1>About</h1>

      {aboutParagraphs.map((text, index) => (
        <p key={index} className="about-text">
          {text}
        </p>
      ))}

      <button
        type="button"
        className="btn btn-secondary"
        onClick={jumpToExperience}
      >
        Jump to experience
      </button>

      <Section title="Skills">
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <section
              key={group.id}
              className="skill-group"
              aria-labelledby={`skills-${group.id}`}
            >
              <h3 id={`skills-${group.id}`}>{group.title}</h3>
              <ul className="tag-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>

      <Section
        title="Experience"
        ref={experienceRef}
        actions={
          <button
            type="button"
            className="link-button"
            onClick={() => setShowHighlights((show) => !show)}
          >
            {showHighlights ? 'Hide highlights' : 'Show highlights'}
          </button>
        }
      >
        <ol className="timeline">
          {experience.map((item) => (
            <li key={item.id} className="timeline-item">
              <p className="timeline-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="timeline-org">{item.organisation}</p>
              <p>{item.summary}</p>
              {showHighlights && (
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}

export default About