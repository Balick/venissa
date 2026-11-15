import profile from "../data/profile.json";
import { useState, useEffect, useRef } from "react";
const sections = ["Home", "Services", "About", "Work", "Journey", "Journal"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState("");
  const header = useRef<HTMLElement>(null);
  const menu = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setReady(true);
    const elements = sections.flatMap((label) => {
      const element = document.getElementById(label.toLowerCase());
      return element ? [element] : [];
    });
    if (!elements.length) {
      setActive(location.pathname.split("/")[1]);
      return;
    }
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setActive(elements.find((el) => visible.has(el))?.id ?? "");
      },
      { rootMargin: "0px 0px -55% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menu.current?.focus();
      }
    };
    const wide = matchMedia("(min-width:701px)");
    const close = () => setOpen(false);
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", escape);
    wide.addEventListener("change", close);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", escape);
      wide.removeEventListener("change", close);
    };
  }, [open]);
  return (
    <header ref={header} className={ready ? "top enhanced" : "top"}>
      <a className="brand" href="/#home">
        <i>
          <img className="icon block" src="/icons/asterisk.svg" alt="" />
        </i>
        {profile.brand}
        <span>.</span>
      </a>
      <nav
        className={open ? "open" : ""}
        id="navigation"
        aria-label="Main navigation"
      >
        {sections.map((label) => (
          <a
            key={label}
            aria-current={
              active === label.toLowerCase() ? "location" : undefined
            }
            onClick={() => setOpen(false)}
            href={`/#${label.toLowerCase()}`}
          >
            {label}
          </a>
        ))}
      </nav>
      <a className="talk bg-paper text-ink" href="/#contact">
        Let’s talk
        <img className="icon block" src="/icons/arrow-up-right.svg" alt="" />
      </a>
      <button
        className="menu"
        ref={menu}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-controls="navigation"
        aria-expanded={open}
      >
        <img className="icon block" src="/icons/list.svg" alt="" />
      </button>
    </header>
  );
}
