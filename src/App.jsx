import { useEffect } from "react";
import "./index.css";

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
          sec.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <span className="logo">TM</span>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* ABOUT / HERO */}
<section id="about" className="hero reveal">
  <h1 className="hero-title">Tejaswini Modugu</h1>

  <h2 className="hero-subtitle">
    AI/ML Engineer & Full-Stack Developer
  </h2>

  <p className="hero-text">
    I design and build intelligent AI systems and scalable full-stack web
    applications, with a strong focus on clean architecture, performance,
    and real-world impact.
  </p>

  {/* QUICK SUMMARY STRIP */}
  <div className="hero-summary">
    <span>🎓 9.3 CGPA</span>
    <span>💻 550+ DSA Problems</span>
    <span>🧠 AI/ML Projects</span>
    <span>🌐 Full-Stack (MERN)</span>
  </div>

  {/* IMPORTANT LINKS */}
  <div className="important-links">
    <a href="mailto:teju6637@gmail.com" className="link-pill mail">Email</a>
    <a
      href="https://www.linkedin.com/in/modugu-tejaswini-reddy-0b1733284/"
      target="_blank"
      className="link-pill linkedin"
    >
      LinkedIn
    </a>
    <a
      href="https://github.com/Tejaswini37"
      target="_blank"
      className="link-pill github"
    >
      GitHub
    </a>
    <a
      href="https://leetcode.com/u/Tejaswini37/"
      target="_blank"
      className="link-pill leetcode"
    >
      LeetCode
    </a>
  </div>

  <div className="hero-buttons">
    <a href="#projects" className="btn primary">View Projects</a>
    <a href="/Tejaswini_Modugu.pdf" target="_blank" rel="noopener noreferrer" className="btn secondary">Resume</a>
  </div>
</section>


      {/* SKILLS & COURSEWORK */}
<section id="skills" className="section reveal">
  <h2 className="section-title">Technical Skills & Coursework</h2>

  <div className="card">
    <h3>Programming Languages</h3>
    <div className="chips">
      <span className="chip">Java</span>
      <span className="chip">Python</span>
      <span className="chip">C++</span>
      <span className="chip">JavaScript</span>
      <span className="chip">SQL</span>
    </div>
  </div>

  <div className="card">
    <h3>Web Technologies</h3>
    <div className="chips">
      <span className="chip">HTML</span>
      <span className="chip">CSS</span>
      <span className="chip">React.js</span>
      <span className="chip">Node.js</span>
      <span className="chip">Express.js</span>
      <span className="chip">Flask</span>
      <span className="chip">REST APIs</span>
    </div>
  </div>

  <div className="card">
    <h3>Databases</h3>
    <div className="chips">
      <span className="chip">MySQL</span>
      <span className="chip">MongoDB</span>
    </div>
  </div>

  <div className="card">
    <h3>Machine Learning</h3>
    <div className="chips">
      <span className="chip">CNN</span>
      <span className="chip">LSTM</span>
      <span className="chip">Word2Vec</span>
      <span className="chip">NLP</span>
      <span className="chip">NumPy</span>
      <span className="chip">pandas</span>
    </div>
  </div>

  <div className="card">
    <h3>Tools & Platforms</h3>
    <div className="chips">
      <span className="chip">Git</span>
      <span className="chip">GitHub</span>
      <span className="chip">VS Code</span>
      <span className="chip">Postman</span>
      <span className="chip">PyCharm</span>
      <span className="chip">Eclipse</span>
    </div>
  </div>

  <div className="card">
    <h3>Core Concepts</h3>
    <div className="chips">
      <span className="chip">OOP</span>
      <span className="chip">Data Structures</span>
      <span className="chip">Algorithms</span>
      <span className="chip">Problem Solving</span>
    </div>
  </div>

  <div className="card">
    <h3>Relevant Coursework</h3>
    <ul className="achievement-list">
      <li>Data Structures & Algorithms</li>
      <li>Operating Systems</li>
      <li>Database Management Systems (DBMS)</li>
      <li>Computer Networks</li>
      <li>Machine Learning</li>
      <li>Deep Learning</li>
      <li>Natural Language Processing (NLP)</li>
      <li>Web Development</li>
    </ul>
  </div>
</section>

     {/* PROJECTS */}
<section id="projects" className="section reveal">
  <h2 className="section-title">Projects</h2>

  {/* KATHA VAACHAK */}
  <div className="card hover-card">
    <h3>Katha Vaachak: AI-Powered Storytelling Platform</h3>
    <p className="muted">Dec 2024</p>

    <p className="project-desc">
      AI-driven platform that generates personalized stories and illustrations
      based on user-defined characters and plots.
    </p>

    <div className="chips">
      <span className="chip">React.js</span>
      <span className="chip">Node.js</span>
      <span className="chip">Express.js</span>
      <span className="chip">Flask</span>
      <span className="chip">MongoDB</span>
      <span className="chip">LLaMA 3</span>
      <span className="chip">Stable Diffusion</span>
    </div>

    <ul>
      <li>Integrated LLaMA 3 for coherent and context-aware story generation</li>
      <li>Used Stable Diffusion for AI-based image synthesis</li>
      <li>Built a responsive React frontend with API-based backend integration</li>
    </ul>

    <a
      className="project-link"
      href="https://github.com/Tejaswini37/katha_vachak"
      target="_blank"
      rel="noreferrer"
    >
      View on GitHub →
    </a>
  </div>

  {/* MEDICAL IMAGE CAPTIONING */}
  <div className="card hover-card">
    <h3>Medical Image Captioning & Disease Classification</h3>
    <p className="muted">Jun 2024</p>

    <p className="project-desc">
      Full-stack system for automated chest X-ray disease classification and
      radiology-style report generation.
    </p>

    <div className="chips">
      <span className="chip">Python</span>
      <span className="chip">CNN</span>
      <span className="chip">LSTM</span>
      <span className="chip">Word2Vec</span>
      <span className="chip">Flask</span>
      <span className="chip">React.js</span>
    </div>

    <ul>
      <li>Used DenseNet-121 for accurate chest X-ray disease prediction</li>
      <li>Implemented InceptionV3 + LSTM with Word2Vec for medical captioning</li>
      <li>Integrated deep learning models with Flask backend for real-time inference</li>
    </ul>

    <a
      className="project-link"
      href="https://github.com/Tejaswini37/Medical_Image_Captioning"
      target="_blank"
      rel="noreferrer"
    >
      View on GitHub →
    </a>
  </div>

  {/* EMOTION CLASSIFICATION */}
  <div className="card hover-card">
    <h3>Human Emotion Classification System</h3>
    <p className="muted">May 2024</p>

    <p className="project-desc">
      Text-based emotion classification system identifying six human emotions
      using deep learning techniques.
    </p>

    <div className="chips">
      <span className="chip">Python</span>
      <span className="chip">NLP</span>
      <span className="chip">LSTM</span>
    </div>

    <ul>
      <li>Classified emotions: Joy, Fear, Anger, Love, Sadness, Disgust</li>
      <li>Trained an LSTM-based model for contextual emotion understanding</li>
      <li>Deployed a lightweight web interface for real-time emotion analysis</li>
    </ul>

    <a
      className="project-link"
      href="https://github.com/Tejaswini37/Human-Emotion-Classification"
      target="_blank"
      rel="noreferrer"
    >
      View on GitHub →
    </a>
  </div>
</section>


      {/* ACHIEVEMENTS & CERTIFICATIONS */}
<section id="achievements" className="section reveal">
  <h2 className="section-title">Achievements & Certifications</h2>

  <div className="card hover-card">
    <ul className="achievement-list">
      <li>
        Solved <strong>550+ Data Structures & Algorithms</strong> problems across
        <strong> LeetCode</strong> and <strong>Coding Ninjas</strong>, strengthening
        problem-solving and algorithmic thinking.
      </li>

      <li>
        Participated in <strong>Flipkart GRID 6.0</strong> and
        <strong> Myntra HackerRamp: WeForShe 2024</strong>, gaining experience in
        competitive coding and real-world problem statements.
      </li>

      <li>
        Earned certifications in <strong>SQL (HackerRank)</strong> and
        <strong> Machine Learning (Coursera)</strong>, validating strong
        foundations in databases and ML concepts.
      </li>
    </ul>
  </div>
</section>


     {/* CONTACT */}
<section id="contact" className="section center reveal">
  <h2 className="section-title">Let’s Connect</h2>

  <p className="contact-text">
    I am actively seeking <strong>internships, entry-level roles</strong>, and
    <strong> collaborative opportunities</strong> in
    <strong> AI/ML and Full-Stack Development</strong>.
    Feel free to reach out for discussions, referrals, or project collaborations.
  </p>

  <div className="important-links">
    <a href="mailto:teju6637@gmail.com" className="link-pill mail">Email</a>
    <a
      href="https://www.linkedin.com/in/modugu-tejaswini-reddy-0b1733284/"
      target="_blank"
      rel="noreferrer"
      className="link-pill linkedin"
    >
      LinkedIn
    </a>
    <a
      href="https://github.com/Tejaswini37"
      target="_blank"
      rel="noreferrer"
      className="link-pill github"
    >
      GitHub
    </a>
    <a
      href="https://leetcode.com/u/Tejaswini37/"
      target="_blank"
      rel="noreferrer"
      className="link-pill leetcode"
    >
      LeetCode
    </a>
  </div>
</section>


      <footer>© 2025 Tejaswini Modugu</footer>
    </div>
  );
}
