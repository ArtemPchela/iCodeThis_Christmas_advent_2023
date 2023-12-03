const christmasTreeDescription =
  "A Christmas tree is a festive evergreen tree that is typically decorated with ornaments, lights, and tinsel during the holiday season. It serves as a symbol of Christmas and is often placed indoors, typically in a living room or family gathering area. The tree is adorned with colorful baubles, twinkling lights, and a shiny star or angel on top. Families gather around the Christmas tree to exchange gifts, sing carols, and create cherished holiday memories. The tradition of decorating Christmas trees dates back to the 16th century in Germany, and it has since become a beloved global custom. People often choose between artificial and real trees, each with its own unique charm. The scent of a fresh evergreen tree fills the air, adding to the festive atmosphere. Some trees are even covered in faux snow to create a winter wonderland effect. Christmas trees come in various sizes, from tabletop versions to towering giants that reach the ceiling. Children eagerly anticipate the arrival of gifts under the tree, and it's a centerpiece of joy and celebration during the holiday season.";

const christmasGiftBoxDescription =
  "A Christmas gift box is a festive container designed to hold and present special gifts during the holiday season. These boxes are typically made of paper, cardboard, or other decorative materials, chosen to match the holiday theme and recipient's preferences. Adorned with bows, ribbons, and holiday-themed decorations like snowflakes or holly leaves, these boxes are a symbol of the joy of giving. Inside, they house a variety of carefully selected presents, from toys for children to thoughtful gifts for friends and family. Unwrapping a Christmas gift box is a moment filled with excitement and anticipation, as the contents are revealed, often accompanied by joyful expressions and exclamations of surprise. It's a heartwarming tradition that embodies the spirit of generosity, love, and togetherness during the holiday season.";

const gingerbreadDescription =
  "Gingerbread is a beloved holiday treat with a rich history that spans many cultures. It is a sweet and spicy baked delight, known for its distinctive flavor profile. Key ingredients like ginger, cinnamon, cloves, molasses, and brown sugar come together to create the warm and comforting taste of gingerbread. Often crafted into various shapes and forms, gingerbread can be found as gingerbread men, houses, and decorative ornaments, each an edible work of art. These creations are beautifully adorned with icing, candies, and edible decorations, inviting creativity and personalization. Gingerbread has been a cherished part of holiday traditions for centuries, offering a delightful combination of taste and nostalgia. The scent of gingerbread baking in the oven fills the air with warmth and holiday cheer, making it a cherished symbol of the festive season. Whether enjoyed as a tasty treat, a decorative centerpiece, or a heartfelt gift, gingerbread represents the joy and coziness of the holiday season.";

function generateRandomSentence(description, length) {
  const wordArray = description.split(/\s+/);
  let sentence = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    sentence += wordArray[randomIndex] + " ";
  }
  return sentence.trim();
}

const christmasTreeSentence = generateRandomSentence(
  christmasTreeDescription,
  25,
);
const christmasGiftBoxSentence = generateRandomSentence(
  christmasGiftBoxDescription,
  25,
);
const gingerbreadSentence = generateRandomSentence(gingerbreadDescription, 25);

function generateRandomPrice(min, max) {
  return (Math.random() * (max - min + 1) + min).toFixed(0);
}

const christmasTreePrice = generateRandomPrice(150, 450);
const giftBoxPrice = generateRandomPrice(25, 150);
const gingerbreadPrice = generateRandomPrice(1, 55);

function generateRandomStars(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(1));
}

const christmasTreeStars = generateRandomStars(3.5, 5);
const giftBoxStars = generateRandomStars(3.0, 5);
const gingerbreadStars = generateRandomStars(4.0, 5);

function generateStarRating(starRating) {
  const maxStars = 5;
  const starContainer = document.createElement("div");
  starContainer.classList.add("star-rating");

  for (let i = 0; i < maxStars; i++) {
    const star = document.createElement("span");
    star.classList.add("star");
    if (i < starRating) {
      star.classList.add("yellow-star");
    }
    starContainer.appendChild(star);
  }

  return starContainer;
}

document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const displayImg = document.getElementById("display-img");
  const displayTitle = document.getElementById("display-title");
  const displayPrice = document.getElementById("display-price");
  const displayDesc = document.getElementById("display-desc");
  const displayStarRating = document.getElementById("display-star-rating");

  const productDetails = [
    {
      imgSrc: "https://source.unsplash.com/320x180/?christmas-tree",
      title: "Christmas Tree",
      price: christmasTreePrice,
      desc: christmasTreeSentence,
      stars: christmasTreeStars,
    },
    {
      imgSrc: "https://source.unsplash.com/320x180/?gift-box",
      title: "Christmas Gift Box",
      price: giftBoxPrice,
      desc: christmasGiftBoxSentence,
      stars: giftBoxStars,
    },
    {
      imgSrc: "https://source.unsplash.com/320x180/?gingerbread",
      title: "Gingerbread",
      price: gingerbreadPrice,
      desc: gingerbreadSentence,
      stars: gingerbreadStars,
    },
  ];

  thumbnails[0].classList.add("active-thumbnail");

  const initialProduct = productDetails[0];
  displayImg.src = initialProduct.imgSrc;
  displayTitle.textContent = initialProduct.title;
  displayPrice.textContent = initialProduct.price + "$";
  displayDesc.textContent = initialProduct.desc;
  displayStarRating.innerHTML = "";
  displayStarRating.innerHTML = initialProduct.stars;

  thumbnails.forEach((thumbnail, idx) => {
    thumbnail.querySelector("img").src = productDetails[idx].imgSrc;

    thumbnail.addEventListener("click", () => {
      const details = productDetails[idx];
      displayImg.src = details.imgSrc;
      displayTitle.textContent = details.title;
      displayPrice.textContent = details.price + "$";
      displayDesc.textContent = details.desc;
      displayStarRating.innerHTML = "";
      displayStarRating.innerHTML = details.stars;
      thumbnails.forEach((t) => t.classList.remove("active-thumbnail"));
      thumbnail.classList.add("active-thumbnail");
    });
  });
});
