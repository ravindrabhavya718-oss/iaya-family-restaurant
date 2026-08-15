/**
 * Stat Counter Animation using IntersectionObserver
 */
function initAnimatedCounters() {
  const counterElements = document.querySelectorAll('[data-counter-target]');
  if (!counterElements.length) return;

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-counter-target'));
        const decimals = parseInt(el.getAttribute('data-counter-decimals') || '0', 10);
        const prefix = el.getAttribute('data-counter-prefix') || '';
        const suffix = el.getAttribute('data-counter-suffix') || '';
        const duration = parseInt(el.getAttribute('data-counter-duration') || '1800', 10);

        animateValue(el, 0, target, duration, decimals, prefix, suffix);
        observer.unobserve(el);
      }
    });
  }, observerOptions);

  counterElements.forEach(el => counterObserver.observe(el));
}

function animateValue(obj, start, end, duration, decimals, prefix, suffix) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    // Ease-out cubic curve
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = start + (end - start) * easeProgress;
    
    const formatted = decimals > 0 
      ? current.toFixed(decimals) 
      : Math.floor(current).toLocaleString('en-IN');
      
    obj.textContent = `${prefix}${formatted}${suffix}`;
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      const finalFormatted = decimals > 0 
        ? end.toFixed(decimals) 
        : end.toLocaleString('en-IN');
      obj.textContent = `${prefix}${finalFormatted}${suffix}`;
    }
  };
  window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', initAnimatedCounters);
