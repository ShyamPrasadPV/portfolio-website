export function scrollToHash(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  const nav = document.getElementById("site-nav");
  const offset = nav?.offsetHeight ?? 80;

  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}
