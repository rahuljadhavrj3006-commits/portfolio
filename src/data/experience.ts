export interface ExperienceItem {
  id: string
  role: string
  organisation: string
  period: string
  summary: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'senior-saas',
    role: 'Senior Software Engineer',
    organisation: 'Enterprise SaaS product company',
    period: 'Nov 2024 to Aug 2026',
    summary:
      'Built and maintained features of an enterprise SaaS platform across the API, database and user interface.',
    highlights: [
      'Delivered features end to end with .NET 8 APIs and Angular 18 screens.',
      'Worked with Azure services and SQL Server in a team release cycle.',
    ],
  },
  {
    id: 'lead-services',
    role: 'Lead Software Engineer',
    organisation: 'IT services company',
    period: '2023 to 2024',
    summary:
      'Led a small engineering team on client projects while still building features myself.',
    highlights: [
      'Led a team of 5 engineers.',
      'Reviewed code and guided design decisions on .NET and SQL work.',
    ],
  },
  {
    id: 'senior-services',
    role: 'Senior Software Engineer',
    organisation: 'IT services company',
    period: '2021 to 2023',
    summary:
      'Developed backend services and database logic for client applications.',
    highlights: [
      'Built .NET services with SQL Server and some Node.js components.',
      'Wrote and tuned SQL for reports and application queries.',
    ],
  },
  {
    id: 'early-career',
    role: 'Software Developer',
    organisation: 'IT solutions company',
    period: 'Earlier career, 4 years',
    summary: 'Started my career in SQL development and reporting.',
    highlights: [
      'Created SQL reports and stored logic for business users.',
    ],
  },
]