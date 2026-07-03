import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>SVM School</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/academics">Academics</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;