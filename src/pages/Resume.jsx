import { useState } from 'react';
import toast from 'react-hot-toast';
import { Download, Mail, Send } from 'lucide-react';
import Section from '../components/Section.jsx';
import { profile, socialLinks } from '../constants/profile.js';
import { achievements, skills } from '../data/portfolio.js';

export default function Resume() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  function submit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.includes('@') || form.message.trim().length < 10) {
      toast.error('Please complete the contact form with a valid email and message.');
      return;
    }
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      toast.success('Message prepared successfully.');
      window.location.href = `mailto:${profile.email}?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
    }, 700);
  }

  return (
    <>
      <section className="page-hero compact">
        <span className="eyebrow">Resume</span>
        <h1>Digital Resume and Contact</h1>
        <p>A professional summary of education, internship work, projects, skills, achievements, and direct contact information.</p>
      </section>
      <Section title="Professional Summary">
        <div className="resume-layout">
          <article className="resume-preview glass-card" id="resume-preview">
            <h2>{profile.name}</h2>
            <p>{profile.title}</p>
            <p>{profile.college} | {profile.organization} {profile.internship}</p>
            <h3>Profile</h3>
            <p>ECE student with practical IoT internship experience, Tinkercad circuit simulation work, Arduino programming practice, and modern React interface development skill.</p>
            <h3>Education</h3>
            <p>Electronics and Communication Engineering, {profile.college}</p>
            <h3>IIIT Kottayam Internship</h3>
            <p>Covered networking and cloud basics, electronics for IoT, Arduino programming, and project-cum-product development from May 18, 2026 to June 30, 2026.</p>
            <h3>Projects Summary</h3>
            <p>Thirty Tinkercad projects across sensor systems, actuator control, and integrated sensor-actuator prototypes.</p>
            <h3>Achievements</h3>
            <ul>{achievements.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <aside className="glass-card resume-side">
            <a className="primary-button" href="/mahima-sara-jacob-resume.txt" download>
              <Download size={18} /> Resume Download
            </a>
            <button className="ghost-button" type="button" onClick={() => window.print()}>Print Preview</button>
            {Object.entries(skills).map(([group, values]) => (
              <div key={group}><h3>{group}</h3><div className="chip-row">{values.map((item) => <span key={item}>{item}</span>)}</div></div>
            ))}
          </aside>
        </div>
      </Section>
      <Section title="Professional Contact Form">
        <div className="contact-grid">
          <form className="glass-card contact-form" onSubmit={submit}>
            <label>Name<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required /></label>
            <label>Email<input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required /></label>
            <label>Message<textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required minLength={10} /></label>
            <button className="primary-button" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'} <Send size={18} /></button>
          </form>
          <aside className="glass-card contact-details">
            <Mail />
            <h3>Contact Information</h3>
            <p>{profile.email}</p>
            <p>{profile.location}</p>
            <div className="social-row">
              {socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}><Icon /></a>)}
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
