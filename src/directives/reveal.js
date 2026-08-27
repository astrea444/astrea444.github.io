let sharedObserver = null;
let fontsReadyPromise = null;

function getFontsReady() {
  if (fontsReadyPromise) return fontsReadyPromise;

  const fontsReady =
    document.fonts && document.fonts.ready
      ? document.fonts.ready
      : Promise.resolve();

  const timeout = new Promise((resolve) => setTimeout(resolve, 2000));

  fontsReadyPromise = Promise.race([fontsReady, timeout]);
  return fontsReadyPromise;
}

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
    getFontsReady().then(() => {
      observer.observe(el);
    });
  },
  unmounted(el) {
    const observer = getObserver();
    if (observer) {
      observer.unobserve(el);
    }
  },
};
