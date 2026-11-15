import type { CollectionEntry } from "astro:content";
type Article = Pick<CollectionEntry<"journal">, "id" | "data">;
export default function Journal({ articles }: { articles: Article[] }) {
  return (
    <section className="journal" id="journal">
      <div className="wrap section">
        <div className="eyebrow font-semibold">
          <i></i> Journal
        </div>
        <h2>
          Design <em>notes.</em>
        </h2>
        {articles.map(({ id, data }) => (
          <a
            key={id}
            className="journal-row grid items-center"
            href={`/journal/${id}/`}
          >
            <small>{data.category}</small>
            <div>
              <h3>{data.title}</h3>
              <p>{data.summary}</p>
            </div>
            <img
              className="icon block"
              src="/icons/arrow-up-right.svg"
              alt=""
            />
          </a>
        ))}
      </div>
    </section>
  );
}
