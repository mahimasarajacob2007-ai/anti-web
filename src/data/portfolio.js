import { Cpu, GraduationCap, Lightbulb, Network, Trophy, Wrench } from 'lucide-react';

export const skills = {
  technical: ['Embedded systems', 'IoT architecture', 'Circuit simulation', 'Sensor integration', 'Cloud fundamentals', 'Networking basics'],
  software: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GitHub'],
  engineering: ['Arduino programming', 'PCB-aware prototyping', 'Debugging', 'Documentation', 'Product thinking', 'Validation planning'],
  tools: ['Tinkercad', 'Arduino IDE', 'Git', 'VS Code', 'Local Storage', 'Responsive UI systems'],
};

export const achievements = [
  'Completed an IIIT Kottayam IoT Assistant internship schedule focused on connected product development.',
  'Built a 30-project Tinkercad portfolio spanning sensors, actuators, and integrated control systems.',
  'Created structured PM Vikas learning records with analytics-ready progress tracking.',
  'Combined electronics fundamentals with modern React product engineering practices.',
];

export const timeline = [
  { title: 'ECE Foundation', detail: 'Developed core electronics, communication, and systems reasoning at College of Engineering Kidangoor.', icon: GraduationCap },
  { title: 'Cloud and Networking', detail: 'Explored connectivity concepts needed for reliable IoT device communication.', icon: Network },
  { title: 'Arduino Implementation', detail: 'Practiced sensor reads, actuator control, serial diagnostics, and lab-grade documentation.', icon: Cpu },
  { title: 'Product Development', detail: 'Connected prototypes to product thinking, usability, validation, and maintainability.', icon: Lightbulb },
];

export const featured = [
  { title: 'PM Vikas Internship Tracker', detail: 'A persistent working-day tracker with dynamic analytics and professional daily summaries.', icon: Trophy, href: '/pmvikas' },
  { title: 'Tinkercad Engineering Showcase', detail: 'Thirty documented circuit projects with filters, local assets, and generated source links.', icon: Wrench, href: '/tinkercad' },
];
