import { galleryItems } from "./gallery-items.js";
// const images = [
//     {
//       url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat",
//     },
//     {
//       url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//     },
//     {
//       url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running",
//     },
//     {
//         url: "https://xn--80axeel2b.pp.ua/img/dumplings.jpg",
//         alt: "Group of Horses Running",
//       },
//   ];

  console.log(galleryItems)




  const divRef = document.querySelector(".gallery");

  function createGallaryMarkup(items) {
    items.map((item) => `<div class="gallary__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source ="${original}"
      alt ="${description}"
      widht = 100%
    />
  </a>
    </div>`
    )
    .join("");
    
  }

  const addGallaryMarkup = createGallaryMarkup(galleryItems);

  divRef.innerHTML = addGallaryMarkup;
  divRef.addEventListener("click", onImageClick);

  function onImageClick(evt) {
    blockStandartAction(evt)
    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightBox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`);
    instance.show();
    divRef.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    });
  }
   function blockStandartAction(evt) {
    evt.preventDefault();
   }