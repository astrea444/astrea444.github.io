let sharedObserver = null;

function getObserver() {
  if (sharedObserver) return sharedObserver;
  if (!("IntersectionObserver" in window)) return null;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          sharedObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );
  return sharedObserver;
}

export const revealDirective = {
  mounted(el) {
    el.classList.add("reveal-on-scroll");
    const observer = getObserver();
    if (!observer) {
      el.classList.add("in-view");
      return;
    }
    observer.observe(el);
  },
  unmounted(el) {
    const observer = getObserver();
    if (observer) {
      observer.unobserve(el);
    }
  },
};
