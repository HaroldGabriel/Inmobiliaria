export function revealOnScroll() {
  const elements = document.querySelectorAll('[data-animate]')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-6')
          entry.target.classList.add('opacity-100', 'translate-y-0')
          observer.unobserve(entry.target)
        }
      })
    },
    //Tanto % se debe ver del elemento para activar la animacion
    { threshold: 0.4 }
  )

  elements.forEach(el => observer.observe(el))
}