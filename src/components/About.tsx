import profile from "../data/profile.json";
export default function About() {
  return (
    <section id="about" className="dark bg-ink text-white">
      <div className="wrap about grid items-center">
        <div className="about-photo overflow-hidden">
          <img loading="lazy" src={profile.studioPortrait} alt={profile.name} />
        </div>
        <div>
          <div className="eyebrow font-semibold">
            <i></i> About me
          </div>
          <h2>
            Who is <em>{profile.name}?</em>
          </h2>
          <p>{profile.bio}</p>
          <a className="link bg-blush" href="#work">
            Explore my work
            <img className="icon block" src="/icons/arrow-right.svg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
