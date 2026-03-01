export default function Home() {
  return (
    <section
      id="home"
      className="s-home page-hero target-section"
      data-parallax="scroll"
      data-image-src="/images/IMG_3073_Original.jpg"
      data-natural-width="3000"
      data-natural-height="2000"
      data-position-y="center"
    >
      <div className="overlay"></div>
      <div className="shadow-overlay"></div>

      <div className="home-content">
        <div className="row home-content__main">
          <h3>About</h3>
          <h1>
            Soumyata Binani<br />
            <span style={{ fontSize: '24px' }}>Product Manager &nbsp;|&nbsp; Innovator &nbsp;|&nbsp; Design Thinker</span><br />
            <br />
          </h1>
          <div className="home-content__scroll">
            <a href="#about" className="scroll-link smoothscroll">
              <span>Scroll Down</span>
            </a>
          </div>
        </div>
      </div>

      <ul className="home-social">
        <li>
          <a href="mailto:sbinani2@illinois.edu">
            <i className="im im-mail" aria-hidden="true" style={{ fontSize: '24px' }}></i>
            <span>Email</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/soumyatabinani/" target="_blank" rel="noreferrer">
            <i className="im im-linkedin" aria-hidden="true" style={{ fontSize: '24px' }}></i>
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
