const projects = [
  {
    number: "01",
    type: "Web experience",
    title: "Filly Bar Chocolate",
    description: "A rich, tactile storefront that turns a small-batch chocolate brand into a memorable digital experience.",
    image: "/p1.svg",
    tags: ["React", "Three.js"],
    href: "https://github.com/Felix273/fillybar-chocolate",
  },
  {
    number: "02",
    type: "Product design",
    title: "FelTravels",
    description: "A calm travel companion for planning stays, building itineraries, and moving through the world with less friction.",
    image: "/p2.svg",
    tags: ["Next.js", "TypeScript"],
    href: "https://feltravels-bh3kds9cp-fel-inc-africa.vercel.app/",
  },
  {
    number: "03",
    type: "Portfolio system",
    title: "Personal portfolio",
    description: "A living archive of experiments, client work, and the small details that make useful software feel considered.",
    image: "/p3.svg",
    tags: ["Framer Motion", "React"],
    href: "https://felixngitariportfolio.netlify.app/",
  },
  {
    number: "04",
    type: "Mobile product",
    title: "Sushi app",
    description: "A focused ordering flow designed around appetite, speed, and a little bit of delight.",
    image: "/p4.svg",
    tags: ["React Native", "UX"],
    href: "https://github.com/Felix273/Sushiapp",
  },
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <nav className="site-nav">
        <a className="brand" href="#top" aria-label="Felix home">
          <span className="brand-mark">F</span>
          <span>FELIX<br /><em>NGITARI</em></span>
        </a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:hello@felixngitari.dev">Let&apos;s talk <Arrow /></a>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-meta meta-row">
          <span><i className="status-dot" /> Nairobi / Kenya</span>
          <span>Independent digital maker</span>
          <span>© 2025—26</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Development &amp; advisory studio</p>
          <h1>Building <span>clear</span><br />digital futures.</h1>
          <div className="hero-bottom">
            <p>Full-stack developer and creative partner for products that need to feel as good as they work.</p>
            <a className="circle-link" href="#work" aria-label="Scroll to selected work"><Arrow /></a>
          </div>
        </div>
      </section>

      <section className="signal-field" aria-label="Studio introduction">
        <div className="signal-lines" aria-hidden="true" />
        <div className="shell signal-content">
          <div className="signal-label"><span>01</span><span>Approach</span></div>
          <p className="signal-statement">Complex ideas become <span>simple interfaces</span> when the details are given room to speak.</p>
          <div className="signal-foot meta-row"><span>Strategy / Design / Build</span><span>Human scale, future-facing</span></div>
        </div>
      </section>

      <section id="work" className="work shell">
        <div className="section-head">
          <div><p className="eyebrow">Selected work</p><h2>A few things<br /><span>made with care.</span></h2></div>
          <p className="section-note">From first sketch to final interaction, every project is an opportunity to make the useful feel unforgettable.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.number}>
              <div className="project-image"><img src={project.image} alt={`${project.title} project preview`} /><span className="project-index">{project.number}</span><span className="project-arrow"><Arrow /></span></div>
              <div className="project-info"><div><p className="eyebrow">{project.type}</p><h3>{project.title}</h3></div><p className="project-description">{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="about shell">
        <div className="section-rule" />
        <div className="about-grid">
          <div><p className="eyebrow">02 / The studio</p><p className="about-kicker">Thoughtful code.<br /><span>Distinctive outcomes.</span></p></div>
          <div className="about-body"><p>I&apos;m Felix, a developer who likes working where technology, storytelling, and good taste overlap. I help ambitious people turn rough ideas into digital products with a point of view.</p><p>My process is collaborative, direct, and deliberately small. No layers between the idea and the person building it.</p><a className="text-link" href="mailto:hello@felixngitari.dev">Start a conversation <Arrow /></a></div>
        </div>
      </section>

      <section id="contact" className="contact shell">
        <div className="contact-top meta-row"><span>03 / Open for good work</span><span>2025—26</span></div>
        <h2>Have a good<br /><span>idea?</span></h2>
        <a className="blue-button" href="mailto:hello@felixngitari.dev">Tell me about it <Arrow /></a>
      </section>

      <footer className="footer shell"><span>© Felix Ngitari</span><span>Designed &amp; developed in Kenya</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
