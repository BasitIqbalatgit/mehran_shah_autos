import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const checkScroll = () => {
      animatedElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        const delay = (el as HTMLElement).dataset.delay || 0;
        
        if (elementTop < window.innerHeight - elementVisible) {
          setTimeout(() => {
            el.classList.add('visible');
          }, Number(delay));
        }
      });
    };
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on page load
    
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
}
