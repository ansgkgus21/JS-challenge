const bgImage = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chooseImage = bgImage[Math.floor(Math.random() * bgImage.length)];
const createImg = document.createElement("img");
createImg.src = `img/${chooseImage}`;

document.body.appendChild(createImg);
