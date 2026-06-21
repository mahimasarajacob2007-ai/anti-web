const phases = [
  { start: '2026-05-18', end: '2026-05-19', topic: 'Networking & Cloud Basics' },
  { start: '2026-05-20', end: '2026-05-26', topic: 'Electronics for IoT' },
  { start: '2026-05-27', end: '2026-06-02', topic: 'Networking & Cloud' },
  { start: '2026-06-03', end: '2026-06-15', topic: 'Arduino Programming' },
  { start: '2026-06-16', end: '2026-06-30', topic: 'Project-cum-Product Development' },
];

const focusLines = [
  'Mapped the day around practical lab outcomes, then converted the core concept into a working engineering note.',
  'Connected theory with measured observations so the learning record stayed evidence-led and reviewable.',
  'Compared component behavior against expected IoT system requirements and noted the trade-offs clearly.',
  'Documented debugging decisions, wiring checks, and configuration steps for repeatable implementation.',
  'Closed the session with a concise reflection on how the topic supports dependable connected products.',
  'Extended the exercise with validation criteria suitable for classroom demos and product prototypes.',
  'Reviewed safety, reliability, and maintainability concerns before finalizing the activity summary.',
  'Translated the session into implementation language that can guide future Arduino and cloud integration work.',
];

function toDate(value) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function phaseFor(date) {
  return phases.find((phase) => date >= toDate(phase.start) && date <= toDate(phase.end));
}

export function generateWorkingDays() {
  const days = [];
  const current = toDate('2026-05-18');
  const end = toDate('2026-06-30');
  let index = 0;

  while (current <= end) {
    const weekday = current.getDay();
    if (weekday !== 0 && weekday !== 6) {
      const phase = phaseFor(current);
      days.push({
        id: current.toISOString().slice(0, 10),
        date: formatDate(current),
        isoDate: current.toISOString().slice(0, 10),
        day: current.toLocaleDateString('en-US', { weekday: 'long' }),
        topic: phase.topic,
        summary: [
          `Focused on ${phase.topic.toLowerCase()} through a structured IIIT Kottayam internship activity.`,
          focusLines[index % focusLines.length],
          `Captured system vocabulary, circuit reasoning, and implementation checkpoints for day ${index + 1}.`,
          `Linked the exercise to IoT assistant responsibilities such as sensing, control, connectivity, and testing.`,
          `Prepared a professional learning record that can be revisited during project-cum-product development.`,
          `Identified one improvement path for the next working session to keep progress measurable.`,
        ],
      });
      index += 1;
    }
    current.setDate(current.getDate() + 1);
  }
  return days;
}
