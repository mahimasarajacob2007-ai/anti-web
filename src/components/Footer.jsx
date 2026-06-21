import { socialLinks, profile } from '../constants/profile.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{profile.name}</strong>
        <p>Electronics, IoT systems, and polished product engineering.</p>
      </div>
      <div className="social-row">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
}
