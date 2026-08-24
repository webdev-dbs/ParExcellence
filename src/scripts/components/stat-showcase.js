const COMPONENT_SELECTOR = '[data-stat-showcase="component"]';

const animateStatShowcaseDots = (component) => {
  if (component.dataset.statShowcaseInit === "true") return;

  const dots = component.querySelectorAll(".stat-showcase_dot");
  if (!dots.length) return;

  component.dataset.statShowcaseInit = "true";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.gsap.set(dots, { clearProps: "opacity" });
    return;
  }

  window.gsap.fromTo(
    dots,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.4,
      stagger: 0.12,
      ease: "power1.out",
      clearProps: "opacity",
    },
  );
};

const initStatShowcases = () => {
  if (typeof window.gsap === "undefined") return;

  document.querySelectorAll(COMPONENT_SELECTOR).forEach((component) => {
    if (component.dataset.statShowcaseInit === "true") return;

    const dots = component.querySelectorAll(".stat-showcase_dot");
    if (!dots.length) return;

    window.gsap.set(dots, { opacity: 0 });

    if (typeof window.IntersectionObserver === "undefined") {
      animateStatShowcaseDots(component);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;

      observer.disconnect();
      animateStatShowcaseDots(component);
    }, { threshold: 0.2 });

    observer.observe(component);
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initStatShowcases, { once: true });
} else {
  initStatShowcases();
}

window.Webflow ||= [];
window.Webflow.push(initStatShowcases);
