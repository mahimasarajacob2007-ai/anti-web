import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp } from '../animations/variants.js';

export default function Section({ eyebrow, title, children, className = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });
  return (
    <motion.section
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`section-shell ${className}`}
    >
      {(eyebrow || title) && (
        <div className="section-heading">
          {eyebrow && <span>{eyebrow}</span>}
          {title && <h2>{title}</h2>}
        </div>
      )}
      {children}
    </motion.section>
  );
}
