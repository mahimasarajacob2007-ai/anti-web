import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '../constants/profile.js';
import Footer from '../components/Footer.jsx';

export default function MainLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app-shell">
      <div className="aurora" aria-hidden="true" />
      <header className="nav-wrap">
        <nav className="nav" aria-label="Primary navigation">
          <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
            <span>MSJ</span>
            <strong>{profile.name}</strong>
          </NavLink>
          <button className="icon-button menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
          <div className={`nav-links ${open ? 'open' : ''}`}>
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}
