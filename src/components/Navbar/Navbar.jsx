function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>• Hari R</div>

      <div style={styles.links}>
        <a href="#work" className="nav-link">Work</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "24px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  logo: {
    fontWeight: "600",
    fontSize: "16px",
    letterSpacing: "0.3px",
  },

  links: {
    display: "flex",
    gap: "24px",
    fontSize: "14px",
    color: "#7a7a7e",
    width: "100%",                 
    justifyContent: "flex-end", 
  },

};

export default Navbar;
