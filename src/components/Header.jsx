import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-brand">
        <Link to="/" className="brand-name">
          Pressures
        </Link>
        <span className="brand-tag">A quiet space for heavy feelings</span>
      </div>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink
          to="/pressures"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Pressures
        </NavLink>
        <NavLink to="/learn" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Learn
        </NavLink>
        <NavLink to="/help" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Help
        </NavLink>
        {/* Memorial page intentionally not linked in header to avoid casual discovery */}
      </nav>
    </header>
  );
};

export default Header;
