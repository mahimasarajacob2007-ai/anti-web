import { useMemo, useState } from 'react';
import { Filter, Search } from 'lucide-react';
import Section from '../components/Section.jsx';
import StatCard from '../components/StatCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';
import { useDebouncedValue } from '../hooks/useDebouncedValue.js';

const categories = ['All', 'Sensor Projects', 'Actuator Projects', 'Sensor + Actuator Projects'];
const technologies = ['All', 'Tinkercad', 'Arduino C++', 'Circuit Simulation'];

export default function Tinkercad() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [technology, setTechnology] = useState('All');
  const debouncedQuery = useDebouncedValue(query, 260);
  const filtered = useMemo(() => projects.filter((project) => {
    const matchesQuery = `${project.title} ${project.description} ${project.components.join(' ')}`.toLowerCase().includes(debouncedQuery.toLowerCase());
    const matchesCategory = category === 'All' || project.category === category;
    const matchesTech = technology === 'All' || project.technologies.includes(technology);
    return matchesQuery && matchesCategory && matchesTech;
  }), [debouncedQuery, category, technology]);

  return (
    <>
      <section className="page-hero compact">
        <span className="eyebrow">Tinkercad Projects</span>
        <h1>Thirty Circuit Simulations With Real Source Assets</h1>
        <p>Search, filter, and inspect sensor, actuator, and integrated Arduino builds from the referenced GitHub repository.</p>
      </section>
      <Section>
        <div className="stats-grid wide">
          <StatCard label="Project Counter" value={filtered.length} icon={Search} />
          <StatCard label="Sensor Projects" value={10} icon={Filter} />
          <StatCard label="Actuator Projects" value={10} icon={Filter} />
          <StatCard label="Integrated Builds" value={10} icon={Filter} />
        </div>
        <div className="filter-bar glass-card">
          <label><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Debounced search by title, component, or description" /></label>
          <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Category filter">{categories.map((item) => <option key={item}>{item}</option>)}</select>
          <select value={technology} onChange={(event) => setTechnology(event.target.value)} aria-label="Technology filter">{technologies.map((item) => <option key={item}>{item}</option>)}</select>
        </div>
        <div className="project-grid">
          {filtered.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </Section>
    </>
  );
}
