// gsap_scroll.js

gsap.registerPlugin(ScrollTrigger);

function initScrollAnimations() {
  const section = document.getElementById("boost-attention");
  const attentionshadow = document.getElementById("boost-attention-shadow");
  const attentionHolder = section?.querySelector(".boost-attention-holder");

  if (section && attentionshadow && attentionHolder) {
    
    const getStartValue = () => {
      return window.innerWidth > 995 ? "center center" : "40%";
    };
    const getStartValue2 = () => {
        return window.innerWidth > 990 ? "center bottom" : "top bottom";
      };
      const getEndValue = () => {
        return window.innerWidth > 990 ? "150%" : "100%";
      };
    gsap.to(attentionHolder, {
      y: () => (window.innerHeight - attentionHolder.clientHeight - 200),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: getStartValue,
        end: () => "+=800",
        scrub: 0.5,
        markers: false,
        invalidateOnRefresh: true,
      }
    });

    gsap.to(attentionshadow, {
      scrollTrigger: {
        scrub: true,
        trigger: attentionHolder,
        start: getStartValue2,
        end: getEndValue
      }, 
      y: 250,
      ease: "none"
    });
  } else {
    console.error("Required elements not found.");
  }
}

// Initialize the scroll animations when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);
