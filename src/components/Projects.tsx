export default function Projects() {
  return (
    <section id="projects" className="s-works target-section">
      <div className="row narrow section-intro">
        <div className="col-full">
          <h3>Projects</h3>
          <h1>What I’ve Been Up To</h1>
          <p className="lead">Explore the range of projects, blogs and case studies I have worked on independently. Click through to dive deeper into each piece.</p>
        </div>
      </div>

      <div className="row blog-content">
        <div className="col-full">
          <div className="blog-list block-1-2 block-tab-full">
            <article className="col-block">
              <div className="blog-date">May 2025</div>
              <h2 className="h01">
                <a href="https://github.com/bsoumyata/booking.com-redesign">Booking.com Transperancy Redesign</a>
              </h2>
              <ul>
                <li>Redesigned the Booking.com interface to improve transparency around hidden fees and unclear policies.</li>
                <li>Design Challenge: "How might we empower users to make confident decisions through clearer cost communication?"</li>
                <li>The outcome was a toggle-based price breakdown, prototyped in Figma, enabling users to see total costs upfront and book with confidence.</li>
              </ul>
              <div className="blog-cat">UI/UX Design, User Interviews, Prototyping, Journey Mapping</div>
            </article>

            <article className="col-block">
              <div className="blog-date">April 2025</div>
              <h2 className="h01">
                <a href="https://preview--fresh-ai-connect.lovable.app/">Reliabl – Verified B2B Marketplace</a>
              </h2>
              <ul>
                <li>Relaibl is an AI-powered marketplace that lets small retailers vet and connect with trustworthy suppliers.</li>
                <li>The platform uses AI to generate credibility scores for both suppliers and retailers, helping both sides make informed decisions and reduce risk.</li>
                <li>Led product vision, user flow definition, and AI-driven scoring logic, while collaborating on rapid UX design and pitch materials.</li>
              </ul>
              <div className="blog-cat">Product Thinking, Feature Prioritization, Storytelling, User Empathy, Lovable</div>
            </article>

            <article className="col-block">
              <div className="blog-date">Feb 2025</div>
              <h2 className="h01">
                <a href="https://mercury-cover-6e9.notion.site/Case-Study-Auto-Sleep-Mode-for-Streaming-Platforms-1a44d62c6c6a803ba53ef1954e19b996">Auto-Sleep Mode for Streaming Platforms</a>
              </h2>
              <ul>
                <li>This case study explores the Auto-Sleep Mode feature designed to enhance user experience by detecting sleep through smartwatches and automatically pausing content on streaming platforms. It tackles challenges like false positives, integration, latency, and privacy.</li>
                <li>It demonstrates a real-world product development approach, focusing on problem-solving, technical execution, and business impact.</li>
              </ul>
              <div className="blog-cat">Product Management, Success Metrics, Competitive Analysis, Figma</div>
            </article>

            <article className="col-block">
              <div className="blog-date">Oct 2023</div>
              <h2 className="h01">
                <a href="https://engineering.blackrock.com/cranking-the-voltage-on-spark-achieve-peak-performance-with-optimization-24da87c44ae3">Cranking the Voltage on Spark</a>
              </h2>
              <ul>
                <li>In this blog, we share insights on optimizing Apache Spark to enhance performance, specifically in the context of risk analytics for millions of portfolios, focusing on fine-tuning drivers, executors, and memory to boost performance.</li>
                <li>It covers practical Spark optimization techniques like data partitioning, reducing shuffling, and caching frequently accessed data to boost efficiency and scalability.</li>
              </ul>
              <div className="blog-cat">Big Data Processing, Distributed Computing, Performance Tuning, Cloud</div>
            </article>

            <article className="col-block">
              <div className="blog-date">Jun 2020</div>
              <h2 className="h01">Face Mask Detector using OpenCV</h2>
              <ul>
                <li>Trained a ML model during Covid-19 outbreak to detect correct face mask usage. Designed and trained the model using Python and TensorFlow, achieving 95% accuracy.</li>
                <li>Scraped data from the web and existing Kaggle dataset to develop a model which categorizes inputs into three output values: with_mask, without_mask, mask_worn_incorrect, ensuring accurate detection for real-world applications.</li>
              </ul>
              <div className="blog-cat">Python, Tensorflow, OpenCV, BeautifulSoup</div>
            </article>

            <article className="col-block">
              <div className="blog-date">April 2019</div>
              <h2 className="h01">
                <a href="https://github.com/bsoumyata/ISLify">ISLify: Speech-to-ISL/ASL Gesture Conversion</a>
              </h2>
              <ul>
                <li>Developed a real-time speech-to-sign language converter, translating spoken language into Indian Sign Language (ISL) and American Sign Language (ASL) gestures using an intuitive graphical interface.</li>
                <li>Implemented robust fallback mechanisms to display alphabet images for unrecognized words, ensuring comprehensive communication support.</li>
              </ul>
              <div className="blog-cat">Python, Tkinter, speech-recognition</div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
