export interface SocialLink {
  label: string
  href: string
}
export interface SiteInfo {
   name: string
  headline: string
  intro: string
  coreStack: string[]
  cvUrl: string
  email: string
  socials: SocialLink[]
}

export const site: SiteInfo = {
  name: 'Rahul Jadhav',
  headline: 'Senior Full Stack Engineer: .NET, SQL, Angular and React',
  intro:
    'I design and build enterprise web applications, from SQL and APIs to the user interface. This site collects my projects and case studies.',
  coreStack: ['.NET', 'SQL Server', 'Angular', 'React', 'TypeScript'],
  cvUrl: '/Rahul-Jadhav-CV.pdf',
  email: 'rahulbj.rj@gmail.com',
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/rahuljadhavrj3006-commits',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rahul-b-jadhav',
    },
  ],
}