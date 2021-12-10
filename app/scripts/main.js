const serverUrl = 'http://localhost:5500/';
const itemsPath = '/mock/items.json';
const imagesPath = '../app/img/';

window.onload = getData();

const items = document.querySelector('.cards');

function getData() {
  fetch(`${serverUrl}${itemsPath}`)
    .then((res) => res.json())
    .then((data) => printData(data));
}

function printData(data) {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'cards';
  
    data.forEach((item) => {
      itemContainer.innerHTML += createDomElement(item);
      items.append(itemContainer);
    });
}

function createDomElement(item) {
    const itemHtml = `
      <div class="item" data-id=${item._id}>
        <figure class="card " >
          <img class="item-image" src= "${imagesPath}${item.image}" />
          <figcaption class="item-title "> ${item.title} </figcaption>
          <figcaption class="item-price">$ ${item.price} </figcaption>
        </figure>
        <button class="boton addToCart">Comprar</button> 
      </div>
      `;
    return itemHtml;
}
  