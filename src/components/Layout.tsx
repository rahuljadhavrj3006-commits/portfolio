import {Outlet} from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
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
  );
}

export default Layout;