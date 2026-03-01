export default function Header() {
  return (
    <header className="s-header">
      <nav className="header-nav-wrap">
        <ul className="header-nav" style={{ fontSize: '14px' }}>
          <li className="current"><a className="smoothscroll" href="#home" title="home">Home</a></li>
          <li><a className="smoothscroll" href="#about" title="about">About</a></li>
          <li><a className="smoothscroll" href="#experience" title="experience">Experiences</a></li>
          <li><a className="smoothscroll" href="#skills" title="skills">Skills</a></li>
          <li><a className="smoothscroll" href="#projects" title="projects">Projects</a></li>
          <li><a className="smoothscroll" href="#gallery" title="gallery">Gallery</a></li>
          <li><a className="smoothscroll" href="#contact" title="contact">Contact</a></li>
        </ul>
      </nav>
      <a className="header-menu-toggle" href="#0"><span>Menu</span></a>
    </header>
  )
}
