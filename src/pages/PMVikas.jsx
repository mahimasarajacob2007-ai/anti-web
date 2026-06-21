import { useMemo } from 'react';
import { Activity, BarChart3, CalendarDays, CheckCircle2, Clock, Plus } from 'lucide-react';
import Section from '../components/Section.jsx';
import StatCard from '../components/StatCard.jsx';
import { generateWorkingDays } from '../utils/dates.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const baseDays = generateWorkingDays();
const statuses = ['Pending', 'In Progress', 'Completed'];

export default function PMVikas() {
  const [records, setRecords] = useLocalStorage('pm-vikas-records', {});
  const activities = baseDays.map((day) => ({ ...day, status: records[day.id]?.status || 'Pending', notes: records[day.id]?.notes || '' }));
  const completed = activities.filter((item) => item.status === 'Completed').length;
  const inProgress = activities.filter((item) => item.status === 'In Progress').length;
  const pending = activities.length - completed - inProgress;
  const percentage = Math.round((completed / activities.length) * 100);
  const categories = useMemo(() => Object.entries(activities.reduce((acc, item) => ({ ...acc, [item.topic]: (acc[item.topic] || 0) + 1 }), {})), [activities]);

  function updateRecord(id, patch) {
    setRecords((current) => ({ ...current, [id]: { ...current[id], ...patch } }));
  }

  return (
    <>
      <section className="page-hero compact">
        <span className="eyebrow">PM Vikas Tracker</span>
        <h1>IIIT Kottayam Internship Activity System</h1>
        <p>Working days from May 18, 2026 through June 30, 2026 are generated automatically, excluding Saturdays and Sundays.</p>
      </section>
      <Section title="Dashboard Analytics">
        <div className="stats-grid wide">
          <StatCard label="Total Activities" value={activities.length} icon={CalendarDays} />
          <StatCard label="Completed" value={completed} icon={CheckCircle2} />
          <StatCard label="Pending" value={pending} icon={Clock} />
          <StatCard label="Completion" value={percentage} suffix="%" icon={BarChart3} />
        </div>
        <div className="progress-shell"><span style={{ width: `${percentage}%` }} /></div>
        <div className="analytics-grid">
          <Panel title="Weekly Breakdown">{weekBreakdown(activities).map(([week, total]) => <p key={week}><span>{week}</span><strong>{total} activities</strong></p>)}</Panel>
          <Panel title="Learning Categories">{categories.map(([topic, total]) => <p key={topic}><span>{topic}</span><strong>{total}</strong></p>)}</Panel>
          <Panel title="Status Distribution">
            {statuses.map((status) => <p key={status}><span>{status}</span><strong>{activities.filter((item) => item.status === status).length}</strong></p>)}
          </Panel>
          <Panel title="Recent Activity">
            {activities.slice(-4).map((item) => <p key={item.id}><span>{item.date}</span><strong>{item.topic}</strong></p>)}
          </Panel>
        </div>
      </Section>
      <Section title="Timeline View">
        <div className="activity-list">
          {activities.map((item) => (
            <article className="activity-card glass-card" key={item.id}>
              <div className="activity-top">
                <div><strong>{item.date}</strong><span>{item.day} | {item.topic}</span></div>
                <select value={item.status} onChange={(event) => updateRecord(item.id, { status: event.target.value })} aria-label={`Status for ${item.date}`}>
                  {statuses.map((status) => <option key={status}>{status}</option>)}
                </select>
              </div>
              <ul>{item.summary.map((line) => <li key={line}>{line}</li>)}</ul>
              <textarea value={item.notes} onChange={(event) => updateRecord(item.id, { notes: event.target.value })} placeholder="Editable notes" aria-label={`Notes for ${item.date}`} />
              <button className="ghost-button small" onClick={() => updateRecord(item.id, { notes: `${item.notes}${item.notes ? '\n' : ''}Additional activity logged.` })}>
                <Plus size={16} /> Add Activity
              </button>
              <span className={`completion ${item.status.toLowerCase().replaceAll(' ', '-')}`}><Activity size={14} /> {item.status}</span>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function Panel({ title, children }) {
  return <article className="glass-card analytics-panel"><h3>{title}</h3>{children}</article>;
}

function weekBreakdown(items) {
  return Object.entries(items.reduce((acc, item) => {
    const week = `Week ${Math.ceil((new Date(item.isoDate).getDate()) / 7)}`;
    acc[week] = (acc[week] || 0) + 1;
    return acc;
  }, {}));
}
