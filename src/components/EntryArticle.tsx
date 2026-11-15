interface Props {
  children: React.ReactNode;
  data: {
    title: string;
    summary: string;
    category: string;
    image?: string;
    alt?: string;
  };
  section: "work" | "journal";
}
export default function EntryArticle({ data, section, children }: Props) {
  return (
    <article className="wrap entry mx-auto">
      <a className="back" href={`/#${section}`}>
        ← Back to {section}
      </a>
      <p className="eyebrow font-semibold">{data.category}</p>
      <h1>{data.title}</h1>
      <p className="lead">{data.summary}</p>
      {data.image && (
        <a href={data.image} aria-label={`View ${data.title} at full size`}>
          <img className="entry-image" src={data.image} alt={data.alt} />
        </a>
      )}
      <div className="prose">{children}</div>
    </article>
  );
}
