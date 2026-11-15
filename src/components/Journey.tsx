import milestones from "../data/journey.json";
import "../styles/journey.css";

const monthDay = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  timeZone: "UTC",
});
const years = [...new Set(milestones.map(({ date }) => date.slice(0, 4)))];

export default function Journey() {
  if (!milestones.length) return null;

  return (
    <section id="journey" className="journey" aria-labelledby="journey-title">
      <div className="wrap section">
        <header className="journey-heading mb-10 flex items-end justify-between gap-8">
          <div>
            <div className="eyebrow">
              <i /> My journey
            </div>
            <h2 id="journey-title">
              The portfolio <em>over time.</em>
            </h2>
          </div>
          <nav
            aria-label="Jump to a year"
            className="year-index flex gap-1 rounded-full"
          >
            {years.map((year) => (
              <a key={year} href={`#journey-${year}`}>
                {year}
              </a>
            ))}
          </nav>
        </header>
        <ol className="journey-track relative m-0 list-none p-0">
          {milestones.map((item, index) => {
            const year = item.date.slice(0, 4);
            const firstInYear =
              index === 0 || !milestones[index - 1].date.startsWith(year);
            return (
              <li
                key={item.date + item.title}
                id={firstInYear ? `journey-${year}` : undefined}
              >
                <time dateTime={item.date}>
                  <strong>{year}</strong>
                  <span>{monthDay.format(new Date(item.date))}</span>
                </time>
                <details className="journey-note" open={index === 0}>
                  <summary>
                    <h3>{item.title}</h3>
                    <span aria-hidden="true" className="fold-mark" />
                  </summary>
                  <div className="journey-body max-w-[48ch]">
                    <p>{item.detail}</p>
                    {item.link && (
                      <a href={item.link.href}>
                        {item.link.label} <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </details>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
