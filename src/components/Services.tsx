import services from "../data/services.json";
export default function Services() {
  return (
    <section id="services" className="wrap section">
      <div className="eyebrow font-semibold">
        <i></i> My services
      </div>
      <div className="heading flex justify-between items-center">
        <h2>
          How I bring <em>ideas to life.</em>
        </h2>
        <a className="link bg-blush" href="#contact">
          Discuss a project
          <img className="icon block" src="/icons/arrow-up-right.svg" alt="" />
        </a>
      </div>
      <div className="services grid gap-2.5">
        {services.map((service, index) => (
          <details key={service.title} name="service" open={index === 1}>
            <summary>
              <small>{String(index + 1).padStart(2, "0")} /</small>
              <strong>{service.title}</strong>
              <i>
                <img
                  className="icon block"
                  src="/icons/arrow-up-right.svg"
                  alt=""
                />
              </i>
            </summary>
            <div className="service-body">
              <div>
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p>{service.description}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
