function Projects() {
  return (
    <section style={styles.section} id="work">
      <div style={styles.container}>
        
        <h2 style={styles.title}>Featured Project</h2>

        <div style={styles.card} className="project-card">
          
          {/* LEFT */}
          <div style={styles.content}>
            <h3 style={styles.projectTitle}>DocuMind AI</h3>
            <p style={styles.tagline}>
              Document-based GenAI assistant powered by RAG
            </p>

            <p style={styles.desc}>
              DocuMind AI allows users to upload documents and ask natural
              language questions. The system retrieves relevant context using
              vector search and generates accurate answers strictly from the
              provided documents.
            </p>

            <ul style={styles.points}>
              <li>RAG-based question answering pipeline</li>
              <li>Context-aware responses with hallucination control</li>
              <li>Session-isolated document handling</li>
              <li>Deployed and tested in real usage scenarios</li>
            </ul>
            <div style={styles.actions}>
                <a
                    href="https://github.com/HariRagavanR/RAG_PDF_QA"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.link}
                >
                    View Code
                </a>

                <span style={{ opacity: 0.4 }}>
                    Live Demo (private)
                </span>
            </div>

          </div>

          {/* RIGHT (placeholder for image later) */}
          <div style={styles.preview}>
            <img
              src="/images/projects/documind-preview.png"
              alt="DocuMind AI Preview"
              style={styles.image}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 0",
  },
  container: {
    maxWidth: "1050px",
    margin: "0 auto",
    padding: "0 20px",
  },
  title: {
    fontSize: "26px",
    fontWeight: "600",
    marginBottom: "28px",
  },
  card: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: "32px",
    padding: "40px",
    borderRadius: "16px",
    background: "var(--card-bg)",
    boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
  },

  content: {},
  projectTitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  tagline: {
    fontSize: "14px",
    color: "var(--accent)",
    marginBottom: "20px",
  },
  desc: {
    fontSize: "15px",
    color: "var(--text-secondary)",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  points: {
    paddingLeft: "18px",
    marginBottom: "24px",
    color: "var(--text-secondary)",
    fontSize: "14px",
    lineHeight: "1.6",
  },
  actions: {
    display: "flex",
    gap: "20px",
  },
  link: {
    fontSize: "14px",
    color: "var(--text-primary)",
    borderBottom: "1px solid var(--accent)",
    paddingBottom: "4px",
  },
  preview: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mock: {
    width: "100%",
    height: "220px",
    borderRadius: "12px",
    background: "rgba(0,0,0,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-secondary)",
    fontSize: "14px",
  },
  image: {
    width: "100%",
    maxWidth: "100%",
    maxHeight: "260px",
    objectFit: "cover",
    borderRadius: "14px",
    boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
  },

};

export default Projects;
