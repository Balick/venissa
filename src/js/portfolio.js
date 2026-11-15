const header = document.querySelector("header.top");
const menu = header.querySelector(".menu");
const navigation = header.querySelector("nav");
header.classList.add("enhanced");

function setMenu(open) {
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  navigation.classList.toggle("open", open);
}
menu.addEventListener("click", () =>
  setMenu(menu.getAttribute("aria-expanded") === "false"),
);
navigation.addEventListener("click", () => setMenu(false));
document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("open")) {
    setMenu(false);
    menu.focus();
  }
});
matchMedia("(min-width: 701px)").addEventListener("change", () =>
  setMenu(false),
);

const links = Array.from(navigation.querySelectorAll("a"));
function highlight(section) {
  for (const link of links) {
    if (link.hash === "#" + section)
      link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}
const sections = links
  .map((link) => document.getElementById(link.hash.slice(1)))
  .filter(Boolean);
if (sections.length) {
  const visible = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      const current = sections.find((section) => visible.has(section));
      highlight(current?.id);
    },
    { rootMargin: "0px 0px -55% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
} else {
  highlight(location.pathname.split("/")[1]);
}
