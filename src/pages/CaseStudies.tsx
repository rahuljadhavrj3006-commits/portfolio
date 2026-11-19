import PlaceholderPage from '../components/PlaceholderPage'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function CaseStudies() {

  useDocumentTitle(`Case Studies`)
  
  return (
    <PlaceholderPage title="Case Studies">
      Case studies written in Markdown arrive in session 13.
    </PlaceholderPage>
  )
}

export default CaseStudies