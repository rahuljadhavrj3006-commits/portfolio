import type { ReactNode } from "react";
import { Link } from "react-router";

interface ButtonLinkProps {
  to: string
  variant?: "primary" | "secondary"
  children: ReactNode
}

function ButtonLink({ to, variant = "primary", children }: ButtonLinkProps) {
 return (
    <Link to={to} className={`btn btn-${variant}`}>
      {children}
    </Link>
  )
}

export default ButtonLink