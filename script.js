console.log('%c What are you doing here?','color:red;border:1px solid dodgerblue');
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const pc = document.querySelector("#pc");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const pcContent = document.querySelector("#pc-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    width: "500px",
    height: "420px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("var(--text-color)");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    width: "400px",
    height: "280px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("var(--text-color)");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

pc.addEventListener("click", () => {
  const pcBox = new WinBox({
    title: "My PC specs",
    width: "400px",
    height: "408px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: pcContent,
    onfocus: function () {
      this.setBackground("var(--text-color)");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
