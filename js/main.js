let text = document.querySelector(".text");
let textarray = text.textContent.split(" ");
let newArray = [];

function convert() {
  for (let i = 0; i < textarray.length; i++) {
    newArray.push(textarray[i].charAt(0).toUpperCase() + textarray[i].slice(1));
  }
  text.textContent = newArray.join(" ");
}

convert();
