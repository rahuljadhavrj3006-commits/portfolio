export interface SkillGroup {
  id: string
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend',
    skills: ['C#', '.NET', 'ASP.NET Core', 'REST APIs', 'Node.js'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['Angular', 'React', 'TypeScript', 'HTML and CSS'],
  },
  {
    id: 'data',
    title: 'Data',
    skills: ['SQL Server', 'T-SQL', 'Query tuning', 'Reporting'],
  },
  {
    id: 'cloud',
    title: 'Cloud and tools',
    skills: ['Azure', 'Git and GitHub', 'GitHub Actions', 'Vercel'],
  },
]