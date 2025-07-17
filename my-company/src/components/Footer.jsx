function Footer() {
  return (
    <footer style={{ textAlign: 'center', marginTop: '40px', padding: '20px', borderTop: '1px solid #ccc' }}>
      &copy; {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}

export default Footer;