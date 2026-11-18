import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'
import { getInitialTheme, saveTheme } from '../lib/theme'
import type { Theme } from '../lib/theme'

function Layout() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    saveTheme(theme)
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main" className="container main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout