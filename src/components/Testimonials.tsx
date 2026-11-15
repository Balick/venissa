import entries from "../data/testimonials.json";
const reviews: { name: string; quote: string; role: string }[] = entries;
export default function Testimonials() {
  return (
    <>
      {reviews.length > 0 && (
        <section id="reviews" className="wrap section">
          <div className="eyebrow font-semibold">
            <i></i> Testimonials
          </div>
          <h2>
            Client <em>feedback.</em>
          </h2>
          {reviews.map((review) => (
            <figure
              key={review.name + review.quote}
              className="review bg-white p-6"
            >
              <blockquote>{review.quote}</blockquote>
              <figcaption>
                {review.name} · {review.role}
              </figcaption>
            </figure>
          ))}
        </section>
      )}
    </>
  );
}
