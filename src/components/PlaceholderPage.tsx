import type {ReactNode} from "react"


interface PlaceholderPageProps {
  title: string
//   description: string
  children?: ReactNode
}

function PlaceholderPage({ title, children }: PlaceholderPageProps) {
  return (
    <section>
      <h1>{title}</h1>
      {/* <p className="headline">{description}</p> */}
      <p className="note">{children}</p>
    </section>
  )
}

export default PlaceholderPage