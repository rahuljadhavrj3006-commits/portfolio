import {useId } from 'react'
import type {ReactNode,Ref} from 'react'

interface SectionProps {
  title: string
  actions?: ReactNode
  ref?: Ref<HTMLHeadingElement>
  children: ReactNode
}

function Section({ title, actions, ref, children }: SectionProps) {
  const headingId = useId()
    return (
    <section aria-labelledby={headingId}>
      <div className="section-head">
        <h2 id={headingId} ref={ref} tabIndex={-1}>
          {title}
        </h2>
        {actions}
      </div>
      {children}
    </section>
  )
}

export default Section