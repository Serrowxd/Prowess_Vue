var herotext = new Vue({
  el: "#hero-text",
  data: {
    text: 'Become One'
  },
})

let text_rotation = [
  'Become One',
  'Become Two',
  'Become Three',
  'Become Four',
  'Become Five'
];

let counter = 0;

// window.addEventListener('load', () => {
//   setInterval(() => {
//     if (counter === 5) {
//       counter = 0;
//     }

//     herotext.text = text_rotation[counter];
//     counter += 1;

//     console.log(`Counter: ${counter}`)
//   }, 2000);
// })

// Page load will include a timer that iterates through a list of different items

// !! -- Testing -- !!

let str = data.text;
let lastIndex = str.lastIndexOf(' ');

let newText = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five'
];

function CreateText() {
  
}