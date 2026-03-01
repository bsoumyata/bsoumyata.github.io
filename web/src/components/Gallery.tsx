export default function Gallery() {
  return (
    <section id="gallery" className="s-blog target-section">
      <div className="row narrow section-intro">
        <div className="col-full">
          <h3>Gallery</h3>
          <h1>Some of my favorite photographs</h1>
        </div>
      </div>

      <div className="row masonry-wrap">
        <div className="masonry">
          {[
            {src: '/images/website/img1.jpg', w: 600, h: 800, title: 'Nine Arches Bridge, Sri Lanka', caption: "Also known as the 'Bridge in the Sky'"},
            {src: '/images/website/img2.jpg', w: 800, h: 600, title: 'Aurora Borealis', caption: 'Aurora Borealis glowing over the night sky in Champaign'},
            {src: '/images/website/img3.jpg', w: 600, h: 800, title: 'The Bean, Chicago', caption: 'Cloud Gate in Chicago reflecting the city skyline and visitors'},
            {src: '/images/website/img5.jpg', w: 800, h: 600, title: 'The Great Smoky Mountains, TN', caption: 'This was taken on a road trip to the Great Smoky Mountains'},
            {src: '/images/website/img4.jpg', w: 600, h: 800, title: 'Gies College of Business, UIUC', caption: 'View from Gies College of Business, capturing the first snowfall with lingering fall colors'},
            {src: '/images/website/img6.jpg', w: 600, h: 800, title: 'Jewel, Singapore', caption: 'Jewel in Singapore. Such a cool spot!'},
            {src: '/images/website/img8.jpg', w: 800, h: 600, title: 'Nashville, TN', caption: 'A photo taken on my trip to Nashville, hanging out at a local bar!'},
            {src: '/images/website/img7.jpg', w: 600, h: 800, title: 'Shinku La Pass, India', caption: 'Taken at Shinku La Pass. The cold was real at -25°C, but the snow made it worth it!'},
            {src: '/images/website/img9.jpg', w: 800, h: 600, title: 'Kashmir, India', caption: 'Captured this moment while hiking in the breathtaking landscapes of Kashmir'},
            {src: '/images/website/img10.jpg', w: 800, h: 600, title: 'Colombo, Sri Lanka', caption: "A peaceful moment to soak in the city's beauty and the calm of the coastline"},
          ].map((item, idx) => (
            <div className="masonry__brick" key={idx}>
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a href={item.src} className="thumb-link" title={item.title} data-size={`${item.w}x${item.h}`}>
                    <img loading="lazy" src={item.src} width={item.w} height={item.h} srcSet={`${item.src} 1x, ${item.src} 2x`} alt="" />
                    <span className="shadow-overlay"></span>
                  </a>
                </div>
                <div className="item-folio__text">
                  <h3 className="item-folio__title">{item.title}</h3>
                </div>
                <div className="item-folio__caption">
                  <p>{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* photoswipe background */}
      <div aria-hidden="true" className="pswp" role="dialog" tabIndex={-1}>
        <div className="pswp__bg"></div>
        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
          </div>
          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter"></div>
              <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
              <button className="pswp__button pswp__button--share" title="Share"></button>
              <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
              <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip"></div>
            </div>
            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
            <div className="pswp__caption">
              <div className="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
