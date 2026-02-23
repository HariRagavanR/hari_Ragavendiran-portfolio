function Projects() {
  return (
    <section style={styles.section} id="work">
      <div style={styles.container}>
        
        <h2 style={styles.title}>Projects</h2>

        <div style={styles.card} className="project-card">
          
          {/* LEFT */}
          <div style={styles.content}>
            <h3 style={styles.projectTitle}>DocuMind AI QA Bot</h3>
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
        <div style={styles.card} className="project-card">
  
          {/* LEFT */}
          <div style={styles.content}>
            <h3 style={styles.projectTitle}>
              CodeGenLite – LoRA Fine-Tuned Coding Assistant
            </h3>

            <p style={styles.tagline}>
              Parameter-Efficient LLM Fine-Tuning for Code Generation
            </p>

            <p style={styles.desc}>
              Designed and fine-tuned a lightweight large language model using 
              Low-Rank Adaptation (LoRA) techniques to improve code generation 
              and explanation tasks while minimizing computational overhead.
            </p>

            <ul style={styles.points}>
              <li>Fine-tuned TinyLlama-1.1B-Chat using PEFT (LoRA)</li>
              <li>Implemented 4-bit quantization for memory-efficient training</li>
              <li>Built multi-language instruction dataset (Python, Java, C)</li>
              <li>Achieved stable loss convergence across epochs</li>
              <li>Developed interactive inference pipeline for chat-style debugging</li>
            </ul>

            <div style={styles.actions}>
              <a
                href="https://github.com/HariRagavanR/Codegenlite_AI"
                target="_blank"
                rel="noreferrer"
                style={styles.link}
              >
                View Code
              </a>

              <span style={{ opacity: 0.4 }}>
                Training Demo (Colab)
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div style={styles.preview}>
            <img
              src="/images/projects/codegenlite-preview.png"
              alt="CodeGenLite Preview"
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
    marginBottom: "40px",   // 👈 ADD THIS LINE
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

