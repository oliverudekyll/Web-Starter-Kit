const interviewImages = document.querySelectorAll(
  ".interview__segment__column__img"
);

interviewImages.forEach((img) => {
  img.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;

    /*     img.style.filter = `grayscale(${mouseY / innerHeight}) blur(${
      (mouseX / innerWidth) * 25
    }px) contrast(${(mouseY / innerHeight) * 10}px)`; */
    img.style.filter = `grayscale(${(mouseY / innerHeight) * 2}) blur(${
      (mouseX / innerWidth) * 1
    }px) contrast(${(mouseY / innerHeight) * 100})`;

    img.addEventListener("mouseout", (event) => {
      img.style.filter = "";
    });
  });
});

const variableFont = function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  const thck = (mouseX / innerWidth) * 1000 + 50;
  const grow = (mouseY / innerHeight) * 1000;

  document.body.style.fontVariationSettings = `"THCK" ${thck}, "grow" ${grow}`;
};

window.addEventListener("DOMContentLoaded", variableFont);
window.addEventListener("mousemove", variableFont);

const intrvwHdrs = document.querySelectorAll(
  ".title__hgroup__header--interview"
);
const graphOverlay = document.getElementById("graph-overlay");
const interviewCloseBtn = document.getElementById("interview-close-btn");

intrvwHdrs.forEach((header) => {
  header.addEventListener("click", (event) => {
    const hdrId = event.target.dataset.interview;
    const interview = document.getElementById(hdrId);

    interview.classList.add("visible");
    interview.scrollTop = 0;
    graphOverlay.style.filter = "blur(10px)";
    document.body.style.overflow = "hidden";
    interviewCloseBtn.classList.add("visible");

    interviewCloseBtn.addEventListener("click", function (event) {
      interview.classList.remove("visible");
      graphOverlay.style.filter = "";
      document.body.style.overflow = "";
      interviewCloseBtn.classList.remove("visible");
    });
  });
});

const interviewParagraphs = document.querySelectorAll(
  ".interview__segment__column__p"
);

interviewParagraphs.forEach((p) => {
  let t = p.innerText;
  const a = t.split(" ");

  const e = Math.floor((Math.random() * a.length) / 2);

  for (let i = 0; i < e; i++) {
    const p = Math.floor(Math.random() * a.length);
    const f = Math.floor(Math.random() * 2);
    console.log(f);
    const c = Math.floor(Math.random() * 50);

    const s = document.createElement("span");
    s.className = "p--float-space";

    if (f === 1) {
      s.style.float = "inline-start";
    } else {
      s.style.float = "inline-end";
    }
    a.splice(p, 0, s);
  }

  p.innerHTML = "";

  a.forEach((element) => {
    if (typeof element === "string") {
      const textNode = document.createTextNode(element + " ");
      p.appendChild(textNode);
    } else if (element instanceof HTMLElement) {
      p.appendChild(element);
    }
  });
});

const floatSpc = document.querySelectorAll(".p--float-space");

floatSpc.forEach((element) => {
  window.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const d = (mouseY / window.innerHeight) * 1.8;
    element.style.width = `${d}rem`;
    element.style.height = `${d}rem`;
  });
});
