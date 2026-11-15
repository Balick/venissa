import milestones from "../data/journey.json";
const dateLabel = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});
export default function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="wrap section"
    >
      <div className="eyebrow font-semibold">
        <i /> My journey
      </div>
      <h2 id="journey-title">
        Portfolio <em>milestones.</em>
      </h2>
      <ol className="relative m-0 list-none space-y-5 p-0 before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-brand md:before:left-1/2 md:before:-translate-x-1/2">
        {milestones.map((milestone, index) => (
          <li
            key={milestone.date}
            className="relative pl-10 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
          >
            <span
              aria-hidden="true"
              className="absolute top-6 left-[5px] size-4 rounded-full border-4 border-solid border-brand bg-paper md:left-1/2 md:-translate-x-1/2"
            />
            <article
              className={`rounded-2xl border border-solid border-[#e2d6da] bg-white p-5 md:p-6 ${index % 2 ? "md:col-start-2" : "md:text-right"}`}
            >
              <time
                dateTime={milestone.date}
                className="text-xs font-bold tracking-wide text-[#ac2146] uppercase"
              >
                {dateLabel.format(new Date(milestone.date))}
              </time>
              <h3>{milestone.title}</h3>
              <p className="text-muted">{milestone.summary}</p>
              <details className="mt-3">
                <summary className="cursor-pointer text-sm font-semibold text-[#a32145] hover:underline">
                  Read more
                  <span className="sr-only"> about {milestone.title}</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-muted motion-safe:animate-[enter_.25s_ease-out]">
                  {milestone.detail}
                </p>
              </details>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
