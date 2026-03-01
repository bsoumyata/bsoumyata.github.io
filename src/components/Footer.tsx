export default function Footer() {
  return (
    <footer>
      <div className="row footer-bottom">
        <div className="col-twelve">
          <div className="copyright">
            <span>© Copyright Soumyata Binani <span id="currentYear"></span></span>
          </div>
          <div className="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var el = document.getElementById('currentYear');
              if (el) { el.innerHTML = new Date().getFullYear(); }
            })();
          `,
        }}
      />
    </footer>
  )
}
