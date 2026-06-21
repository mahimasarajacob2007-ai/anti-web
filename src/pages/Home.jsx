import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Cpu, GraduationCap, Sparkles } from 'lucide-react';
import Section from '../components/Section.jsx';
import StatCard from '../components/StatCard.jsx';
import { profile, socialLinks } from '../constants/profile.js';
import { achievements, featured, skills, timeline } from '../data/portfolio.js';
import { projects } from '../data/projects.js';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow">Luxury Engineering Portfolio</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>{profile.name}</motion.h1>
          <p>{profile.title} building IoT prototypes, polished React interfaces, and professional engineering documentation.</p>
          <div className="role-strip" aria-label="Professional roles">
            {['IoT Assistant', 'React Product Engineer', 'ECE Student', 'Circuit Simulation Builder'].map((role) => <span key={role}>{role}</span>)}
          </div>
          <div className="hero-actions">
            <Link className="primary-button" to="/tinkercad">Explore Projects <ArrowRight size={18} /></Link>
            <Link className="ghost-button" to="/resume">View Resume</Link>
          </div>
          <div className="social-row">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}><Icon /></a>
            ))}
          </div>
        </div>
        <motion.aside className="profile-card glass-card" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
          <div className="avatar">MSJ</div>
          <h2>{profile.internship}</h2>
          <p>{profile.organization}</p>
          <dl>
            <div><dt>College</dt><dd>{profile.college}</dd></div>
            <div><dt>Focus</dt><dd>IoT, Arduino, Product Engineering</dd></div>
            <div><dt>Location</dt><dd>{profile.location}</dd></div>
          </dl>
        </motion.aside>
      </section>

      <Section eyebrow="About" title="Engineering With Product Polish">
        <div className="two-column">
          <p className="lead">I am an Electronics and Communication Engineering student focused on translating circuits, code, and cloud fundamentals into dependable IoT experiences. My work blends practical lab implementation with clean digital presentation.</p>
          <div className="stats-grid">
            <StatCard label="Tinkercad Projects" value={30} icon={Cpu} />
            <StatCard label="Internship Working Days" value={32} icon={BriefcaseBusiness} />
            <StatCard label="Skill Areas" value={24} icon={Sparkles} />
          </div>
        </div>
      </Section>

      <Section eyebrow="Education" title="Academic and Internship Foundation">
        <div className="feature-grid">
          <article className="glass-card"><GraduationCap /><h3>{profile.college}</h3><p>Electronics and Communication Engineering with a focus on embedded systems, signal-aware thinking, and hardware-software integration.</p></article>
          <article className="glass-card"><BriefcaseBusiness /><h3>{profile.organization}</h3><p>IoT Assistant internship covering networking, cloud basics, electronics for IoT, Arduino programming, and product development.</p></article>
        </div>
      </Section>

      <Section eyebrow="Capabilities" title="Technical Skills">
        <div className="skill-board">
          {Object.entries(skills).map(([group, values]) => (
            <article className="glass-card" key={group}>
              <h3>{group}</h3>
              <div className="chip-row">{values.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Preview" title="Featured Projects">
        <div className="feature-grid">
          {featured.map(({ title, detail, icon: Icon, href }) => (
            <Link to={href} className="glass-card feature-link" key={title}><Icon /><h3>{title}</h3><p>{detail}</p></Link>
          ))}
          {projects.slice(0, 2).map((project) => (
            <Link to="/tinkercad" className="glass-card feature-link" key={project.id}><img src={project.image} alt="" /><h3>{project.title}</h3><p>{project.description}</p></Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Progress" title="Achievements and Timeline">
        <div className="timeline">
          {timeline.map(({ title, detail, icon: Icon }) => <article key={title}><Icon /><div><h3>{title}</h3><p>{detail}</p></div></article>)}
        </div>
        <div className="achievement-list">
          {achievements.map((item) => <p key={item}>{item}</p>)}
        </div>
      </Section>

      <Section eyebrow="Contact" title="Ready For Internship and Research Conversations">
        <div className="contact-preview glass-card">
          <p>Reach me through LinkedIn for IoT, embedded systems, React portfolio, and engineering internship opportunities.</p>
          <a className="primary-button" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile <ArrowRight size={18} /></a>
        </div>
      </Section>
    </>
  );
}
