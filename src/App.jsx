import './App.css';

const projects = [
  {
    number: '01',
    category: 'SMART AGRICULTURE · SIH',
    title: 'AgriSarthi',
    description:
      'A crop-health assistance concept exploring crop-image analysis, weather risks, pest monitoring, and multilingual farmer advisories.',
    tags: ['Agritech', 'Python', 'Problem Solving'],
    status: 'SIH project',
  },
  {
    number: '02',
    category: 'AGRICULTURAL TECHNOLOGY · SIH',
    title: 'OnionSort',
    description:
      'An agricultural technology prototype focused on making onion grading more practical through a technology-driven approach.',
    tags: ['Agritech', 'Prototyping', 'Innovation'],
    status: 'SIH project',
  },
  {
    number: '03',
    category: 'EDTECH · FULL-STACK DEVELOPMENT',
    title: 'Python Quest',
    description:
      'A gamified Python-learning platform with quizzes, player accounts, experience points, and leaderboard functionality.',
    tags: ['Java', 'Spring Boot', 'REST API'],
    status: 'In development',
  },
  {
    number: '04',
    category: 'BACKEND DEVELOPMENT',
    title: 'Product Management REST API',
    description:
      'A Java backend project practising product management, REST endpoints, and database operations using Spring Boot and MySQL.',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    status: 'Academic project',
  },
  {
    number: '05',
    category: 'WEB DEVELOPMENT',
    title: 'Personal Developer Portfolio',
    description:
      'A responsive website presenting my projects, technical learning journey, achievements, and professional profiles.',
    tags: ['React', 'JavaScript', 'CSS'],
    status: 'In development',
  },
];

const socials = [
  {
    name: 'GitHub',
    short: 'GH',
    url: 'https://github.com/TanistaCodeLab',
  },
  {
    name: 'LinkedIn',
    short: 'in',
    url: 'https://www.linkedin.com/in/tanista-gajdhar-43b48b387/',
  },
  {
    name: 'LeetCode',
    short: 'LC',
    url: 'https://leetcode.com/u/Tanista_Gajdhar/',
  },
];

function App() {
  return (
    <div className="portfolio">
      <header className="site-header">
        <a className="wordmark" href="#home">TANISTA GAJDHAR<span>.</span></a>

        <nav className="nav-links" aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-socials">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              title={social.name}
            >
              {social.short}
            </a>
          ))}
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              INFORMATION TECHNOLOGY UNDERGRADUATE
            </p>

            <h1>
              Engineering simplicity <span>out of everyday complexity.</span>
            </h1>

            <p className="hero-description">
              I am an Information Technology engineering student at M. H.
              Saboo Siddik College of Engineering, focused on software
              development, problem-solving, and building practical solutions
              through code.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore Projects <span>→</span>
              </a>
              <a className="button button-secondary" href="#about">
                About Me
              </a>
            </div>

            <p className="hero-note">CURIOUS MIND. PRACTICAL THINKING. CONTINUOUS GROWTH.</p>
          </div>

          <div className="hero-visual" aria-label="Decorative code illustration">
            <div className="visual-grid" />
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="code-window">
              <div className="window-bar">
                <div className="window-dots"><i /><i /><i /></div>
                <span>future.java</span>
              </div>
              <div className="code-content">
                <p><span className="line-number">01</span> <span className="syntax-purple">class</span> Future {'{'}</p>
                <p><span className="line-number">02</span> &nbsp; curiosity = <span className="syntax-green">true</span>;</p>
                <p><span className="line-number">03</span> &nbsp; keepLearning();</p>
                <p><span className="line-number">04</span></p>
                <p><span className="line-number">05</span> <span className="syntax-purple">while</span> (growing) {'{'}</p>
                <p><span className="line-number">06</span> &nbsp; solveProblems();</p>
                <p><span className="line-number">07</span> &nbsp; buildSolutions();</p>
                <p><span className="line-number">08</span> {'}'}</p>
                <p><span className="line-number">09</span> {'}'}</p>
              </div>
            </div>

            <div className="visual-orb orb-large" />
            <div className="visual-orb orb-small" />
            <div className="floating-note note-top">Ideas into action ✦</div>
            <div className="floating-note note-bottom">BUILD. LEARN. REPEAT.</div>
            <div className="visual-monogram">TG<span>.</span></div>
          </div>
        </section>

        <section className="technology-strip" id="skills">
          <div className="technology-heading">TECHNOLOGIES<br />I WORK WITH</div>
          <div className="technology-item"><span className="technology-symbol">J.</span><span>Java</span></div>
          <div className="technology-item"><span className="technology-symbol">Py</span><span>Python</span></div>
          <div className="technology-item"><span className="technology-symbol">⌘</span><span>DSA</span></div>
          <div className="technology-item"><span className="technology-symbol">⚛</span><span>React</span></div>
          <div className="technology-item"><span className="technology-symbol">S.</span><span>Spring Boot</span></div>
          <div className="technology-item"><span className="technology-symbol">▤</span><span>MySQL</span></div>
          <div className="technology-item"><span className="technology-symbol">Git</span><span>Git</span></div>
        </section>

        <section className="about-section section" id="about">
          <div className="about-heading">
            <p className="section-eyebrow"><span /> ABOUT ME</p>
            <h2>Turning ideas into <span>thoughtful solutions.</span></h2>
            <p className="about-note">
              A student of technology, driven by curiosity and the desire to
              understand how things work.
            </p>
          </div>

          <div className="about-copy">
            <p>
              I'm pursuing a B.E. in Information Technology at M. H. Saboo
              Siddik College of Engineering. I'm building my foundation in
              Java, Python, data structures, and software development by
              learning through implementation.
            </p>
            <p>
              Through academic work and collaborative projects, I'm exploring
              how technology can address real problems — one idea, one
              experiment, and one improvement at a time.
            </p>
            <a className="text-link" href="#projects">Explore my projects <span>↗</span></a>
          </div>
        </section>

        <section className="projects-section section" id="projects">
          <div className="projects-heading">
            <div>
              <p className="section-eyebrow"><span /> SELECTED WORK</p>
              <h2>Ideas in <span>progress.</span></h2>
            </div>
            <p className="projects-intro">
              A growing collection of projects, experiments, and practical
              learning — each one a step forward.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-topline">
                  <span className="project-number">{project.number}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <p className="section-eyebrow"><span /> LET'S CONNECT</p>
          <h2>Good things begin with <span>a conversation.</span></h2>
          <p className="contact-description">
            Open to learning, collaborating, and connecting with people who
            enjoy building meaningful things.
          </p>

          <a className="button button-primary email-button" href="mailto:tanistagajdhar750@gmail.com">
            <span aria-hidden="true">✉</span> tanistagajdhar750@gmail.com
          </a>

          <div className="contact-socials">
            {socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
                {social.name} <span>↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#home">TANISTA GAJDHAR<span>.</span></a>
        <p>Learning, building, and getting better — one step at a time.</p>
        <span>© {new Date().getFullYear()} Tanista Gajdhar</span>
      </footer>
    </div>
  );
}

export default App;
