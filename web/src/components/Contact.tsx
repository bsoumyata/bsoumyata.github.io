export default function Contact() {
  return (
    <section id="contact" className="s-contact target-section">
      <div className="overlay"></div>

      <div className="row narrow section-intro">
        <div className="col-full">
          <h3>Contact</h3>
          <h1>Drop a hello</h1>
          <p style={{ marginTop: '10px', fontSize: '18px', color: 'rgba(255,255,255,0.85)', fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.18)' }}>
            Feel free to reach out through any of these platforms
          </p>
        </div>
      </div>

      <div className="row contact__main" style={{ justifyContent: 'center' }}>
        <div className="col-full tab-full contact__info" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', alignItems: 'stretch', marginTop: '32px', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(255,255,255,0.13)', borderRadius: '14px', padding: '28px 36px', boxShadow: '0 2px 10px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '160px', maxWidth: '220px', flex: 1 }}>
              <a href="mailto:sbinani2@illinois.edu" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.95)' }}>
                <i className="im im-mail" aria-hidden="true" style={{ fontSize: '44px', marginBottom: '12px' }}></i>
                <span style={{ display: 'block', fontSize: '19px', fontWeight: 600, letterSpacing: '0.5px' }}>Email</span>
              </a>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.13)', borderRadius: '14px', padding: '28px 36px', boxShadow: '0 2px 10px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '160px', maxWidth: '220px', flex: 1 }}>
              <a href="https://www.linkedin.com/in/soumyatabinani/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.95)' }}>
                <i className="im im-linkedin" aria-hidden="true" style={{ fontSize: '44px', marginBottom: '12px' }}></i>
                <span style={{ display: 'block', fontSize: '19px', fontWeight: 600, letterSpacing: '0.5px' }}>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
