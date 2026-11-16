export type ProjectStatus = 'live' | 'in-progress' | 'on-hold'

export interface Project {
  id: string
  title: string
  summary: string
  stack: string[]
  repoUrl: string
  demoUrl?: string
  apiUrl?: string
  status: ProjectStatus
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'This portfolio',
    summary:
      'A responsive portfolio built with React, TypeScript and Vite. Content comes from typed data files, and every push deploys to Vercel.',
    stack: ['React', 'TypeScript', 'Vite', 'React Router', 'Vercel'],
    repoUrl: 'https://github.com/rahuljadhavrj3006-commits/portfolio',
    demoUrl: 'https://portfolio-tan-eight-32.vercel.app',
    status: 'live',
  },
  {
    id: 'inventory-rest-api',
    title: 'Inventory REST API',
    summary:
      'A clean-architecture REST API with SQL Server, JWT authentication and automated tests.',
    stack: ['.NET', 'EF Core', 'SQL Server', 'JWT', 'xUnit'],
    repoUrl: 'https://github.com/rahuljadhavrj3006-commits',
    status: 'in-progress',
  },
  {
    id: 'sql-performance-lab',
    title: 'SQL performance lab',
    summary:
      'Five slow queries, each tuned with indexes and rewrites, with before and after numbers.',
    stack: ['SQL Server', 'Execution plans', 'Indexing'],
    repoUrl: 'https://github.com/rahuljadhavrj3006-commits',
    status: 'in-progress',
  },
]