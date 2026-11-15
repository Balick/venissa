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
      <div className="work-gallery grid grid-cols-12">
        {visible.map(({ id, data }) => (
          <article className="work-card min-w-0" key={id}>
            <a href={`/work/${id}/`}>
              <div className="work-mat grid items-end overflow-hidden rounded-[14px]">
                <div className="work-screen h-full overflow-hidden bg-white">
                  <img src={data.image} alt={data.alt} loading="lazy" />
                </div>
              </div>
              <div className="work-caption flex items-center justify-between gap-4">
                <div>
                  <small>{data.category}</small>
                  <h3>{data.title}</h3>
                </div>
                <img
                  className="work-arrow"
                  src="/icons/arrow-up-right.svg"
                  alt=""
                />
              </div>
            </a>
          </article>
        ))}
      </div>
      <p className="visually-hidden" role="status">
        {ready && `${visible.length} projects shown`}
      </p>
    </section>
  );
}
