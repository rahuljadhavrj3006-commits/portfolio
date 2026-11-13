import ButtonLink from "../components/ButtonLink";
import {site} from "../data/site";

function Home() {
    return (
        <section className="hero">
      <p className="eyebrow">Hello, I am</p>
      <h1>{site.name}</h1>
      <p className="headline">{site.headline}</p>
      <p className="intro">{site.intro}</p>

      <ul className="stack" aria-label="Core stack">
        {site.coreStack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="actions">
        <ButtonLink to="/projects">View projects</ButtonLink>
        <a className="btn btn-secondary" href={site.cvUrl} download>
          Download CV
        </a>
      </div>
    </section>
    )
}

export default Home;