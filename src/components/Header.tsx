import {useState} from "react";
import {Link,NavLink} from "react-router";
import {navItems} from "../data/nav";
import {site} from "../data/site";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          {site.name}
        </Link>

        <button 
        type="button" 
        className="menu-button"
        aria-expanded={menuOpen}  
        aria-controls="main-nav" 
        onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? "Close" : "Menu"}
        </button>

        <nav id="main-nav" className={menuOpen ? 'nav open' : 'nav'}
            aria-label="Main"
        >
            <ul>
                {navItems.map((item) => (
                    <li key={item.to}>
                        <NavLink
                            to={item.to}
                            end ={item.to === '/'}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header