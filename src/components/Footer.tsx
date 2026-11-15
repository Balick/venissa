import profile from "../data/profile.json";
export default function Footer() {
  return (
    <footer className="dark bg-ink text-white" id="contact">
      <div className="wrap">
        <div className="eyebrow font-semibold">
          <i></i> Contact
        </div>
        <h2>
          Let’s work <em>together.</em>
        </h2>
        <a className="email" href={`mailto:${profile.email}`}>
          {profile.email}
          <img className="icon block" src="/icons/arrow-up-right.svg" alt="" />
        </a>
        <div className="foot flex justify-between gap-4">
          <span>
            {profile.name} · {profile.city}
          </span>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            {profile.phone}
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
