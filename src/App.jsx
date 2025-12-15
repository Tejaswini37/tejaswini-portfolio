import { useState, useEffect } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <div className="wrapper">

      {/* DARK MODE TOGGLE */}
      <div className="toggle">
        <button className="btn" onClick={() => setDark(!dark)}>
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* HERO */}
      <section className="hero">
        <div>
          <h1>
            Hi, I’m <span>Tejaswini</span>
          </h1>

          <p>
            AI & ML Engineering Student | Full Stack Developer.
            I build intelligent AI systems and scalable web applications.
          </p>

          <div className="actions">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="/Tejaswini_Resume.pdf" className="btn">Resume</a>
            <a href="https://github.com/Tejaswini37" className="btn">GitHub</a>
            <a href="https://www.linkedin.com/in/modugu-tejaswini-reddy-0b1733284/" className="btn">LinkedIn</a>
            <a href="https://leetcode.com/u/Tejaswini37/" className="btn">LeetCode</a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h2>Skills</h2>
        <div className="skills">
          {[
            "Java", "Python", "C++", "JavaScript",
            "React", "Flask", "MongoDB", "MySQL",
            "CNN", "LSTM", "NLP", "Git"
          ].map(skill => (
            <div key={skill} className="skill">{skill}</div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects">

          <div className="project">
            <h3>Medical Image Captioning & Disease Classification</h3>
            <p>
              AI system that classifies chest X-rays and generates automated
              radiology reports.
            </p>
            <div className="tech">CNN · DenseNet · LSTM · Word2Vec</div>
            <a
              href="https://github.com/Tejaswini37/Medical_Image_Captioning"
              target="_blank"
            >
              View on GitHub →
            </a>
          </div>

          <div className="project">
            <h3>Katha Vaachak – AI Storytelling</h3>
            <p>
              AI-powered storytelling platform generating stories and images.
            </p>
            <div className="tech">React · Flask · LLaMA 3 · Stable Diffusion</div>
            <a
              href="https://github.com/Tejaswini37/katha_vachak"
              target="_blank"
            >
              View on GitHub →
            </a>
          </div>

          <div className="project">
            <h3>Human Emotion Classification</h3>
            <p>
              NLP-based system that classifies text into six emotions.
            </p>
            <div className="tech">Python · NLP · LSTM</div>
            <a
              href="https://github.com/Tejaswini37/Human-Emotion-Classification"
              target="_blank"
            >
              View on GitHub →
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
