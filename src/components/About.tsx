export default function About() {
  return (
    <section id="about" className="s-about target-section">
      <div className="row narrow section-intro">
        <div className="col-full text-center">
          <img
            src="/images/Website_DP.png"
            alt="Profile Picture"
            style={{ width: '250px', height: '250px', objectFit: 'cover' }}
          />
          <h1>A little about me</h1>
          <p className="lead">
            👋 Hey, I’m Soumyata! I’m currently pursuing MS in Technology Management at the
            <a href="https://illinois.edu/">University of Illinois, Urbana-Champaign</a>. I am passionate about
            turning “What if?” ideas into products that make people think, “Wow, that works!”,
            with simplicity and usefulness in mind.<br />
            <br />With 2+ years of experience in the Wealth Management industry, I have led projects
            using Big Data to help businesses make smarter decisions and achieve better outcomes.
            I specialize in turning complex data into clear, actionable solutions that drive results.
            When a task is assigned to me, I make sure it gets done, I’m committed to seeing things through from start to finish.<br />
            <br />Outside of work, you’ll find me exploring new places, swimming, or capturing moments with my camera.
            Always curious, always learning!<br />
          </p>
        </div>
      </div>
    </section>
  )
}
