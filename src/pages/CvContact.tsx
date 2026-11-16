import { useEffect } from 'react'
import { site } from '../data/site'

function CvContact() {
  useEffect(() => {
    const previous = document.title
    document.title = `CV and Contact | ${site.name}`
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <section>
      <h1>CV and contact</h1>
      <p>Download my CV or reach me through any of these links.</p>

      <ul className="link-list">
        <li>
          <a href={site.cvUrl} download>
            Download CV (PDF)
          </a>
        </li>
        <li>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </li>
        {site.socials.map((social) => (
          <li key={social.label}>
            <a href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CvContact