import { useState, useEffect } from "react";
import type { CollectionEntry } from "astro:content";
type Project = Pick<CollectionEntry<"projects">, "id" | "data">;
export default function Work({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All");
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const categories = [
    ...new Set(projects.map((project) => project.data.category)),
  ];
  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.data.category === filter);
  return (
    <section id="work" className="wrap section">
      <div className="eyebrow font-semibold">
        <i></i> My portfolio
      </div>
      <h2>
        Selected <em>work.</em>
      </h2>
      <div
        className="filters"
        aria-label="Filter projects"
        role="group"
        hidden={!ready}
      >
        {["All", ...categories].map((label) => (
          <button
            type="button"
            key={label}
            aria-pressed={label === filter}
            onClick={() => setFilter(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="projects grid gap-6">
        {visible.map(({ id, data }) => (
          <div className="project-card" key={id}>
            <a href={`/work/${id}/`}>
              <img src={data.image} alt={data.alt} loading="lazy" />
              <div className="project-title">
                {data.title} <span aria-hidden="true">↗</span>
              </div>
            </a>
          </div>
        ))}
      </div>
      <p className="visually-hidden" role="status">
        {ready && `${visible.length} projects shown`}
      </p>
    </section>
  );
}
