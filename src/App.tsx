import { version } from 'react'
import { site } from './data/site'

function App() {
  return (
    <main className="page">
      <h1>{site.name}</h1>
      <p className="headline">{site.headline}</p>

      <ul className="stack">
        {site.coreStack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className="note">
        Portfolio under construction. Built with React {version} and Vite.
      </p>
    </main>
  )
}

export default App