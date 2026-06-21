import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export const profile = {
  name: 'MAHIMA SARA JACOB',
  title: 'Electronics and Communication Engineering Student',
  college: 'College of Engineering Kidangoor',
  internship: 'IoT Assistant Internship',
  organization: 'IIIT Kottayam',
  linkedin: 'https://www.linkedin.com/in/mahimasj',
  github: 'https://github.com/mahimasarajacob2007-ai',
  email: 'mahimasarajacob2007@gmail.com',
  location: 'Kerala, India',
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'PM Vikas Tracker', path: '/pmvikas' },
  { label: 'Tinkercad Projects', path: '/tinkercad' },
  { label: 'Resume', path: '/resume' },
];

export const socialLinks = [
  { label: 'LinkedIn', href: profile.linkedin, icon: FiLinkedin },
  { label: 'GitHub', href: profile.github, icon: FiGithub },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FiMail },
];
