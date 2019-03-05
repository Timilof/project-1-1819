import {
  API
} from '../../node_modules/oba-wrapper/js/index.js';
console.log(API);


(async () => {
  localStorage.clear();

  const api = new API({
    key: "1e19898c87464e239192c8bfe422f280"
  });



  // artico.forEach((a) => {
  //   a.classList.add('active');
  // })

  // })

  // const input = 'kinder';
  const stream = await api.createStream(`search/kinder&facet=type(book)`);
  stream.pipe(createElements);


  function createElements(data) {
    const saveData = [];
    data.forEach((book) => {
      console.log(book)
      const bookElements = {
        // name : book.author.main-author,
        title: book.titles.title._text,
        img1: book.coverimages.coverimage[0]._text,
        img2: book.coverimages.coverimage[1]._text,

      }
      saveData.push(bookElements);
      const img = document.querySelector('.imgo');
      // img.src = bookElements.img1
    })
    console.log(saveData);
  }



  document.querySelectorAll('.temp').forEach(function(temp) {
    temp.addEventListener('click', minus)
  })
  const sentence = document.querySelector('#pick');
  const bookNumber = document.querySelector('#numb');
  var number = parseInt(bookNumber.textContent);

  function minus() {
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


  }

  // const elementos =
  //   `
  // // <article class="container">
  // // <img class="card rise">${country.name}</img>
  // // </article>
  // // `
  //
  // container.insertAdjacentHTML('beforeend', elemet)
})();
