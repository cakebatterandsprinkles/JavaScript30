const textContainer = document.querySelector(".text-container");
const text = textContainer.querySelector("h1");
const change = 12;

function shadow(e) {
  const {
    offsetWidth: width,
    offsetHeight: height
  } = textContainer;

  let {
    offsetX: x,
    offsetY: y
  } = e;

  if (e.target !== this) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xChange = Math.round((x / width * change) - (change / 2));
  const yChange = Math.round((y / height * change) - (change / 2));

  text.style.textShadow = `
    ${xChange}px ${yChange}px 3px rgba(128,128,128)
  `;

  // text.style.textShadow = `
  //   ${xChange}px ${yChange}px purple,
  //   ${-xChange}px ${yChange}px cyan,
  //   ${xChange}px ${-yChange}px deeppink,
  //   ${-xChange}px ${-yChange}px orange
  // `;
}

textContainer.addEventListener("mousemove", shadow);