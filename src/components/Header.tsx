import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { navItems } from '../data/nav'
import { site } from '../data/site'
import { useTheme } from '../hooks/useTheme'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
//  console.log('Header render')
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          {site.name}
        </Link>
        <button
          type="button"
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>
        <nav id="main-nav" className={menuOpen ? 'nav open' : 'nav'}>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="theme-toggle"
                aria-pressed={theme === 'dark'}
                onClick={toggleTheme}
              >
                Dark mode
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header