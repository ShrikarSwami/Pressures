const Footer = () => {
  return (
    <footer className="app-footer">
      <p>This is an educational project for a hackathon and not a clinical tool.</p>
      <p style={{ marginTop: '0.4rem' }}>
        <a href="/suicide-clock" style={{ color: 'var(--muted)', fontWeight: 700, textDecoration: 'underline' }}>Visualization</a>
      </p>
    </footer>
  );
};

export default Footer;
