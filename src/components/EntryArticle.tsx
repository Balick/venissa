interface Props {
  children: React.ReactNode;
  data: {
    title: string;
    summary: string;
    category: string;
    image?: string;
    previewUrl?: string;
    alt?: string;
  };
  next?: { id: string; title: string };
  section: "work" | "journal";
}
export default function EntryArticle({ data, section, next, children }: Props) {
  return (
    <article className="wrap entry mx-auto">
      <a className="back" href={`/#${section}`}>
        ← Back to {section}
      </a>
      <p className="eyebrow font-semibold">{data.category}</p>
      <h1>{data.title}</h1>
      <p className="lead">{data.summary}</p>
      {data.previewUrl && (
        <a
          className="link bg-blush my-4 text-ink"
          href={data.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live preview<span className="sr-only"> (opens in a new tab)</span>
          <img className="icon" src="/icons/arrow-up-right.svg" alt="" />
        </a>
      )}
      {data.image && (
        <a href={data.image} aria-label={`View ${data.title} at full size`}>
          <img className="entry-image" src={data.image} alt={data.alt} />
        </a>
      )}
      <div className="prose">{children}</div>
      {next && (
        <nav
          aria-label="Continue exploring"
          className="mt-12 border-0 border-t border-solid border-[#d6c8ce] pt-6"
        >
          <a
            href={`/${section}/${next.id}/`}
            className="group flex items-center justify-between gap-4"
          >
            <div>
              <small className="text-muted">
                {section === "work" ? "Next project" : "Next article"}
              </small>
              <h3 className="group-hover:underline">{next.title}</h3>
            </div>
            <img
              className="size-10 rounded-full bg-blush p-2.5"
              src="/icons/arrow-right.svg"
              alt=""
            />
          </a>
        </nav>
      )}
    </article>
  );
}
