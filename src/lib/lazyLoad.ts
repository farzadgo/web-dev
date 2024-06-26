let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
}

export const lazyLoad = (image: HTMLImageElement, src: string) => {
  const loaded = () => {
    // image.classList.add('visible');
    // image.style.width = "auto";
    image.style.opacity = "1";
  }
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      // console.log('an image has loaded');
      image.src = src                                       // replace placeholder src with the image src on observe
      if (image.complete) {                                 // check if instantly loaded
        loaded()        
      } else {
        image.addEventListener('load', loaded)              // if the image isn't loaded yet, add an event listener
        // image.style.width = "300px";
      }
    }
  }, options)
  observer.observe(image)                                   // intersection observer

  return {
    destroy() {
      image.removeEventListener('load', loaded)             // clean up the event listener
    }
  }
}