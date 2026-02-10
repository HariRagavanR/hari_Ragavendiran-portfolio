function Hero() {
  return (
    <section style={styles.section} className="fade-in">
      <div style={styles.container} className="hero-container">
        
        {/* LEFT CONTENT */}
        <div style={styles.content}>
          <h1 style={styles.heading}>
            I Design and Deploy <br />
            <span style={styles.highlight}>Practical GenAI systems</span>
          </h1>

          <p style={styles.subtext}>
            Independent GenAI Engineer building Document - based AI assistants,
            RAG Powered Applications, and Reliable backend systems.
          </p>
          <p style={styles.cred}>
            Specializing in RAG systems, AI assistants, and production ready GenAI apps.
          </p>

          <div style={styles.buttons}>
            <a href="#work" style={styles.primaryBtn} className="hero-btn primary-btn">
              View My Work
            </a>

            <a href="#contact" style={styles.secondaryBtn} className="hero-btn secondary-btn">
              Work With Me
            </a>
          </div>
          <div style={styles.socials}>
             <a href="mailto:hariiragavan810@gmail.com"className="hero-link">Email</a>
            <a href="https://www.linkedin.com/in/hari-ragavendiran-r-a61679259" target="_blank" className="hero-link">LinkedIn</a>
            <a href="https://github.com/HariRagavanR" target="_blank" className="hero-link">GitHub</a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div style={styles.imageWrapper}>
          <img
            src="/images/hero/profile.png"
            alt="Hari Ragavendiran R"
            style={styles.image}
          />
          <p style={styles.name}>Hari Ragavendiran R</p>
          <p style={styles.role}>Independent GenAI Engineer</p>
        </div>

      </div>
    </section>
  );
}


const styles = {
  section: {
    minHeight: "85vh",
    display: "flex",
    alignItems: "center",
  },
  container: {
    maxWidth: "1050px",
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "32px",
    alignItems: "center",
  },  
  content: {},
  heading: {
    fontSize: "52px",
    lineHeight: "1.15",
    fontWeight: "600",
    marginBottom: "22px",
  },
  highlight: {
    background: "linear-gradient(90deg, #2ecc71, #22c55e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtext: {
    maxWidth: "600px",   // 🔥 reduce from 600+
    fontSize: "17px",
    lineHeight: "1.55",
    color: "var(--text-secondary)",
    marginBottom: "28px",
  },
  buttons: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  primaryBtn: {
    backgroundColor: "var(--accent)",
    color: "#fff",
    border: "none",
    padding: "12px 22px",
    borderRadius: "8px",
    fontSize: "15px",
    display: "inline-block",   // 👈 ADD THIS
  },

  secondaryBtn: {
    backgroundColor: "transparent",
    color: "var(--text-primary)",
    border: "1px solid rgba(0,0,0,0.15)",
    padding: "12px 22px",
    borderRadius: "8px",
    fontSize: "15px",
    display: "inline-block",   // 👈 ADD THIS
  },

  imageWrapper: {
    textAlign: "center",
  },
  image: {
    width: "180px",
    height: "180px",
    maxWidth: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    padding: "4px",
    background: "linear-gradient(180deg, #2ecc71, transparent)",
  },

  name: {
    fontSize: "17px",
    fontWeight: "600",
    marginTop: "12px",
  },
  role: {
    fontSize: "13px",
    letterSpacing: "0.4px",
    color: "var(--text-secondary)",
  },
  socials: {
    marginTop: "20px",
    display: "flex",
    gap: "20px",
    fontSize: "14px",
    color: "var(--text-secondary)",
  },
  cred: {
    fontSize: "17px",
    color: "var(--text-secondary)",
    marginBottom: "28px",
  },

};

export default Hero;
