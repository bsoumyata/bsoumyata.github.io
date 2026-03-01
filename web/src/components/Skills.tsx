export default function Skills() {
  return (
    <section id="skills" className="s-about target-section">
      <div className="row narrow section-intro">
        <div className="col-full text-center">
          <h3 style={{ marginBottom: '10px' }}>Skills</h3>
          <h1>What I Do Best</h1>
          <p className="lead">These are the skills I use every day, learned through real experiences and always growing as I take on new things.</p>
        </div>
      </div>
      <div className="row about-content">
        <div className="col-six tab-full left">
          <h3>Product Management &amp; Strategy</h3>
          <div className="btn btn--pill">Product Lifecycle Management</div>
          <div className="btn btn--pill">Market Research</div>
          <div className="btn btn--pill">User-Centered Design</div>
          <div className="btn btn--pill">Feature Prioritization</div>

          <h3>Programming Languages</h3>
          <div className="btn btn--pill">Java</div>
          <div className="btn btn--pill">Scala</div>
          <div className="btn btn--pill">Python</div>
          <div className="btn btn--pill">SQL</div>
          <div className="btn btn--pill">Bash</div>
          <div className="btn btn--pill">Perl</div>
        </div>
        <div className="col-six tab-full right">
          <h3>Project Management &amp; Leadership</h3>
          <div className="btn btn--pill">Agile Development</div>
          <div className="btn btn--pill">Scrum</div>
          <div className="btn btn--pill">Kanban</div>
          <div className="btn btn--pill">Jira</div>
          <div className="btn btn--pill">Project Planning</div>
          <div className="btn btn--pill">Stakeholder Management</div>
          <div className="btn btn--pill">User Stories</div>

          <h3>Data Analysis</h3>
          <div className="btn btn--pill">Power BI</div>
          <div className="btn btn--pill">Tableau</div>
          <div className="btn btn--pill">Spark/Hadoop</div>
          <div className="btn btn--pill">API Integration &amp; Management</div>
          <div className="btn btn--pill">Snowflake</div>
        </div>
      </div>
    </section>
  )
}
