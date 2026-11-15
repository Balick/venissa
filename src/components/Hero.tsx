import { Fragment } from "react";

import profile from "../data/profile.json";
export default function Hero() {
  return (
    <>
      <section
        className="hero overflow-hidden text-center"
        aria-labelledby="intro"
      >
        <div className="hero-head relative">
          <div className="role">
            <img className="icon block" src="/icons/palette.svg" alt="" />{" "}
            {profile.label}
          </div>
          <h1 id="intro">
            I’m <em>{profile.name}</em>
            <sup>
              <img className="icon block" src="/icons/stars.svg" alt="" />
            </sup>
          </h1>
          <p>{profile.role}</p>
        </div>
        <div className="stage relative">
          <div className="halo absolute"></div>
          <img
            className="portrait w-auto absolute pointer-events-none"
            src={profile.portrait}
            alt={profile.name}
            fetchPriority="high"
          />
          <a
            className="seal absolute bg-ink text-white"
            href="#contact"
            aria-label="Discuss a project"
          >
            <svg
              viewBox="0 0 100 100"
              className="seal-art"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <path id="seal-upper" d="M 16 50 A 34 34 0 0 1 84 50" />
                <path id="seal-lower" d="M 9 50 A 41 41 0 0 0 91 50" />
              </defs>
              <text textAnchor="middle">
                <textPath href="#seal-upper" startOffset="50%">
                  HAVE A PROJECT?
                </textPath>
              </text>
              <text textAnchor="middle">
                <textPath href="#seal-lower" startOffset="50%">
                  LET’S TALK
                </textPath>
              </text>
              <circle cx="50" cy="50" r="20" fill="var(--color-brand)" />
              <image
                href="/icons/arrow-up-right.svg"
                x="40"
                y="40"
                width="20"
                height="20"
              />
            </svg>
          </a>
          <div className="side left absolute flex flex-col justify-between text-left">
            <div className="location">
              <small>BASED IN</small>
              <b>
                <img className="icon block" src="/icons/geo-alt.svg" alt="" />
                {profile.city}, {profile.country}
              </b>
            </div>
            <div className="clients">
              <div className="faces flex">
                <img src="/images/client-1.jpg" alt="" />
                <img src="/images/client-2.jpg" alt="" />
                <img src="/images/client-3.jpg" alt="" />
              </div>
              <strong>
                {profile.clients} <span>happy clients</span>
              </strong>
              <small>{profile.projects} projects completed</small>
            </div>
          </div>
          <div className="side right absolute flex flex-col justify-between items-end text-right">
            <div className="statement">
              <span aria-hidden="true">“</span>
              <p>{profile.statement}</p>
            </div>
            <div className="tags flex flex-wrap justify-end">
              <b>Graphic design</b>
              <b>Web design</b>
              <b>UI/UX design</b>
              <b>Development</b>
            </div>
          </div>
          <div className="actions absolute flex bg-paper whitespace-nowrap">
            <a href="#work">
              My portfolio
              <i>
                <img
                  className="icon block"
                  src="/icons/arrow-right.svg"
                  alt=""
                />
              </i>
            </a>
            <a href="#contact">Get in touch</a>
          </div>
        </div>
      </section>
      <div
        className="strip bg-ink text-white overflow-hidden relative"
        aria-hidden="true"
      >
        <div className="strip-track">
          {Array.from({ length: 4 }, (_, index) => (
            <div className="strip-group" key={index}>
              {[
                "Graphic Design",
                "Web Development",
                "Visual Identity",
                "UI/UX Design",
              ].map((item) => (
                <Fragment key={item}>
                  <img
                    className="icon block"
                    src="/icons/asterisk.svg"
                    alt=""
                  />
                  <span>{item}</span>
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
