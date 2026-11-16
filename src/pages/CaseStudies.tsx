import {useEffect} from 'react'
import PlaceholderPage from '../components/PlaceholderPage'
import {site} from '../data/site'

function CaseStudies() {
  useEffect(() => {
    document.title = `Case Studies | ${site.name}`
    return () => {
      document.title = site.name
    }
  }, [])

  return (
    <PlaceholderPage title="Case Studies">
      Case studies written in Markdown arrive in session 13.
    </PlaceholderPage>
  )
}

export default CaseStudies