import {useRef,useState} from "react";
import { aboutParagraphs } from "../data/about";
import { skillGroups } from "../data/skills";
import { experience } from "../data/experience";

function About() {
    const [showHighlights, setShowHighlights] = useState(false);
    const experienceRef = useRef<HTMLHeadingElement>(null);

    function jumpToExperience() {
        experienceRef.current?.scrollIntoView();
        experienceRef.current?.focus({ preventScroll: true  });
    }

    return (
        <section>
            <h1>About Me</h1>
            {aboutParagraphs.map((text, index) => (
                <p key={index} className="about-text">
                    {text}
                </p>
            ))}

            <button type="button" onClick={jumpToExperience} className="btn btn-secondary">
                Jump to experience
            </button>

            <h2>Skills</h2>
            <div className ="skill-group">
                {skillGroups.map((group) => (
                <section key={group.id} className="skill-group" aria-labelledby={group.id}>
                    <h3 id= {`skill-group-${group.id}`}>{group.title}</h3>
                    <ul className ="tag-list">
                        {group.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </section>
            ))}
            </div>
            <div className="section-head">
        <h2 ref={experienceRef} tabIndex={-1}>
          Experience
        </h2>
        <button
          type="button"
          className="link-button"
          onClick={() => setShowHighlights((show) => !show)}
        >
          {showHighlights ? 'Hide highlights' : 'Show highlights'}
        </button>
      </div>

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
        </section>
    );
}

export default About;