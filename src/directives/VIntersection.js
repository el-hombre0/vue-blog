export default {
  mounted(el, binding) {
    // Отслеживание области vieport, когда пользователь до нее опустится
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback = (entries, observer) => {
      if (entries[0].isIntersecting ) {
        binding.value()
      }
    };

    const observer = new IntersectionObserver(callback, options);

    // Получение DOM-элемента из компонента(наблюдаем за текущем эл-ом)
    observer.observe(el);
  },
  name: 'intersection'
};
