import CountUp from 'react-countup';

export default function StatCard({ label, value, suffix = '', icon: Icon }) {
  return (
    <div className="glass-card stat-card">
      {Icon && <Icon aria-hidden="true" />}
      <strong><CountUp end={Number(value) || 0} duration={1.4} />{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}
