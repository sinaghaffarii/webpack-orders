import "./Components/styles/image-style.css";

import firstImage from "./Components/images/redux-cover.webp";

class imageComponent {
  createImageTag() {
    const image = document.createElement("img");
    image.alt = "my-image";
    image.classList.add("image");
    image.src = firstImage;

    return image;
  }

  createTextTag() {
    const text = document.createElement("h2");
    text.innerHTML = "میر سینا و میر امین غفاری";

    return text;
  }

  render() {
    const element = document.createElement("div");

    element.classList.add("img-box");
    element.appendChild(this.createImageTag());
    element.appendChild(this.createTextTag());

    return element;
  }
}

export default new imageComponent();
