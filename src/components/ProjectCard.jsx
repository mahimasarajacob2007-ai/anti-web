import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { generateGithubUrl } from '../utils/github.js';

export default function ProjectCard({ project }) {
  return (
    <motion.article className="project-card glass-card" whileHover={{ y: -8, scale: 1.01 }}>
      <div className="project-media">
        <img src={project.image} alt={`${project.title} circuit screenshot`} loading="lazy" />
        <span>{project.category}</span>
      </div>
      <div className="project-content">
        <div>
          <p className="difficulty">{project.difficulty} | {project.status}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="chip-row">
          {project.components.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="chip-row tech">
          {project.technologies.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="card-actions">
          <a href={generateGithubUrl(project.folder)} target="_blank" rel="noopener noreferrer">
            <FiGithub size={16} /> GitHub
          </a>
          <a href={project.tinkercadUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} /> Tinkercad
          </a>
        </div>
      </div>
    </motion.article>
  );
}
