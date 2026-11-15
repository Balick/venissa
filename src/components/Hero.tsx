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
            className="seal absolute bg-ink text-white flex items-center justify-center flex-col"
            href="#contact"
            aria-label="Discuss a project"
          >
            <span>HAVE A PROJECT?</span>
            <img
              className="icon block"
              src="/icons/arrow-up-right.svg"
              alt=""
            />
            <span>LET’S TALK</span>
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
        <div>
          {Array.from({ length: 3 }, (_, repeat) =>
            [
              "Graphic Design",
              "Web Development",
              "Visual Identity",
              "UI/UX Design",
            ].map((item) => (
              <Fragment key={repeat + item}>
                <img className="icon block" src="/icons/asterisk.svg" alt="" />
                <span>{item}</span>
              </Fragment>
            )),
          )}
        </div>
      </div>
    </>
  );
}
