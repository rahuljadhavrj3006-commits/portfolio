import {site} from "../data/site";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p> © {year} {site.name}</p>
        <ul className="footer-links">
            {site.socials.map((social) => (
                <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noreferrer">
                        {social.label}
                    </a>
                </li>
            ))}
        </ul>  
      </div>
    </footer>
  );
}

export default Footer;