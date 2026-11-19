import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'

function Layout() {
  // console.log('Layout render')
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" className="container main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout