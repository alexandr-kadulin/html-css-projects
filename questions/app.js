const getElement = (selector, list) => {
  const el = list
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);

  if (list && el.length === 1) return el[0];
  if (list && el.length > 0) return el;
  if (!list && el) return el;
  throw new Error(`Please double check the ${selector}`);
};

const btns = getElement(".question-btn", true);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle("show-text");
  });
});
