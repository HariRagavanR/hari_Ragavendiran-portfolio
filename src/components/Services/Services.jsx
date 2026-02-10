function Services() {
  return (
    <section style={styles.section} id="services">
      <div style={styles.container}>
        <h2 style={styles.title}>Services</h2>

        <div style={styles.grid}>
          
          <div style={styles.card} className="service-card">
            <h3 style={styles.cardTitle}>Document-based AI Assistants</h3>
            <p style={styles.cardDesc}>
              Custom AI assistants that answer questions strictly from your
              documents such as PDFs, manuals, policies, and internal notes.
            </p>
          </div>

          <div style={styles.card} className="service-card">
            <h3 style={styles.cardTitle}>RAG-powered GenAI Applications</h3>
            <p style={styles.cardDesc}>
              Retrieval-Augmented Generation systems designed for context
              accuracy, reduced hallucinations, and real-world usage.
            </p>
          </div>

          <div style={styles.card} className="service-card">
            <h3 style={styles.cardTitle}>Python Backend for AI Products</h3>
            <p style={styles.cardDesc}>
              Backend development for AI applications including APIs, file
              handling, session management, and integrations.
            </p>
          </div>

          <div style={styles.card} className="service-card">
            <h3 style={styles.cardTitle}>Deployment & Maintenance</h3>
            <p style={styles.cardDesc}>
              Production deployment, monitoring, and maintenance to ensure AI
              systems remain stable, secure, and scalable.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "70px 0",
  },
  container: {
    maxWidth: "1050px",
    margin: "0 auto",
    padding: "0 20px",
  },
  title: {
    fontSize: "26px",
    fontWeight: "600",
    marginBottom: "32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "1fr 1fr",
    gap: "28px",
  },
  card: {
    padding: "28px",
    borderRadius: "14px",
    background: "var(--card-bg)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  cardDesc: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "var(--text-secondary)",
  },
};

export default Services;
