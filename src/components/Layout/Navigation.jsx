import './navigation.css'

const Navigation = () => {
  return (
    <nav className="nav-bar" role="navigation" aria-label="Main Navigation">
      <div className="nav-container">
        <div className="nav-logo-social">
          <button className="nav-logo" aria-label="site initials">
            KC
          </button>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="button-linked-in"
          >
            LNKDN
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="button-github"
          >
            GTHB
          </a>
        </div>
        <div className="nav-pages">
          <a href="#projects" className="page-link">PROJECTS</a>
          <a href="#tech" className="page-link">TECH STACK</a>
          <a href="#about" className="page-link">ABOUT</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation