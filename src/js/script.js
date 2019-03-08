import {
  API
} from '../../node_modules/oba-wrapper/js/index.js';
console.log(API);

(async () => {
  localStorage.clear();

  const api = new API({
    key: "1e19898c87464e239192c8bfe422f280"
  });
const maink = document.querySelector("main")
maink.classList.add('loader');
  const stream = await api.createStream(`search/targetAudience=(ageYouth){25}`);
  // const stream = await api.createStream(`search/kinder&facet=targetAudience=(ageYouth)&facet=type(book){9}`);
  stream.pipe(createElements);

  function createElements(data) {
    const container = document.querySelector("#root")
    const saveData = [];
    data.forEach((book) => {
      console.log(book)
      const bookElements = {
        // name : book.author.main-author,
        title: book.titles.title._text,
        link: book["detail-page"]._text,
        summ: book.summaries.summary._text,
        img1: book.coverimages.coverimage[0]._text,
        img2: book.coverimages.coverimage[1]._text,
      }
      saveData.push(bookElements);
      const elemet =
        `
      <article class="temp">
      <div class="">
        <h3>${book.titles.title._text}</h3>
        <p>${book.summaries.summary._text}</p>
        <a target="blank" href="${book["detail-page"]._text}">view book</a>
      </div>
      <img class="imgo" src="${book.coverimages.coverimage[1]._text}" alt="">
      </article>
      `
      container.insertAdjacentHTML('beforeend', elemet)
    })
maink.classList.remove('loader');
    console.log(saveData);
    document.querySelectorAll('.temp').forEach(function(temp) {
      temp.addEventListener('click', minus)
    })
}


  const empty_button = document.querySelector('aside button');
  const tris = document.querySelector('.tricolor')
  const sentence = document.querySelector('#pick');
  const yous = document.querySelector('#you');
  const bookNumber = document.querySelector('#numb');
  let number = parseInt(bookNumber.textContent);

  function minus() {
// console.log(this.querySelector("img"))
let itemd = this;
itemd.classList.add('hide');
let imgo = this.querySelector("img");
let imga = imgo.src
renderPicks(imga)
    number--;
    console.log(number);
    if (number >= 0) {
      bookNumber.textContent = number;
    }
    if (number === 1) {
      let newSense = sentence.textContent.substring(0, sentence.textContent.length - 1);
      sentence.textContent = newSense;
      bookNumber.classList.add('red');
    }
    if (number === 0){
    // tris.classList.add('hidden');
    renderList();
    console.log('we removed the selecting field')
}

  }

  function renderPicks(img){
  const aside = document.querySelector("aside div")
  const elemet =
    `
  <article class="">
  <img class="imgo" src="${img}" alt="">
  </article>
  `
  aside.insertAdjacentHTML('beforeend', elemet)
}

function  renderList(){
  const maink = document.querySelector("main")
  // list.classList.remove('hidden');
  const ardickle = document.querySelectorAll("article");
  ardickle.forEach((ard) => { ard.classList.remove('hide')})
  maink.classList.add('listo');
  console.log('we just made the list look like this... its the same list but we are making it look like it is new content.')
  sentence.classList.add('hidden');
  yous.classList.remove('hidden');
}

empty_button.addEventListener('click', emptyThese);

function emptyThese(){
number = 3;
bookNumber.textContent = number;
const maink = document.querySelector("main")
tris.classList.remove('hidden');
maink.classList.remove('listo');
sentence.classList.remove('hidden');
yous.classList.add('hidden');
const aside = document.querySelector("aside div");
const ardickle = document.querySelectorAll("main article");
ardickle.forEach((ard) => { ard.classList.remove('hide')})
aside.innerHTML = '';
console.log(number);
console.log('emptied')
}

})();
