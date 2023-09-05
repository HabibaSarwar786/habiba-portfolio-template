const allImg = document.querySelectorAll('.work-img');
const observe = new IntersectionObserver(function (enteries, observe) {
  enteries.forEach(enter => {
    if (enter.isIntersecting) {
      enter.target.classList.remove('hidden-obs');
      enter.target.style.filter ='none';
      // observe.unobserve(enter.target)
    }
  })
}, { threshold: .6})
allImg.forEach(img => {
  img.classList.add('hidden-obs')
   observe.observe(img);
})

