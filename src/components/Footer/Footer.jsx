function Footer() {
  return (
    <footer style={styles.footer} id="contact">
      <div style={styles.container}>
        
        <div style={styles.left}>
          <h3 style={styles.name}>Hari Ragavendiran R</h3>
          <p style={styles.role}>Independent GenAI Engineer</p>
        </div>

        <div style={styles.right}>
            <a
                href="mailto:hariiragavan810@gmail.com"
                className="footer-link"
            >
                <img src="/images/icons/mail.svg" alt="Email" />
                Email
            </a>

            <a
                href="https://www.linkedin.com/in/hari-ragavendiran-r-a61679259"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
            >
                <img src="/images/icons/linkedin.svg" alt="LinkedIn" />
                LinkedIn
            </a>

            <a
                href="https://github.com/HariRagavanR"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
            >
                <img src="/images/icons/github.svg" alt="GitHub" />
                GitHub
            </a>
            </div>

      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} Hari Ragavendiran R
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "60px 0 30px",
    marginTop: "80px",
    borderTop: "1px solid rgba(0,0,0,0.08)",
  },
  container: {
    maxWidth: "1050px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  left: {},
  name: {
    fontSize: "16px",
    fontWeight: "600",
  },
  role: {
    fontSize: "13px",
    color: "var(--text-secondary)",
  },
  right: {
    display: "flex",
    gap: "20px",
  },
  link: {
    fontSize: "14px",
    color: "var(--text-primary)",
  },
  bottom: {
    marginTop: "30px",
    textAlign: "center",
    fontSize: "12px",
    color: "var(--text-secondary)",
  },
};

export default Footer;
