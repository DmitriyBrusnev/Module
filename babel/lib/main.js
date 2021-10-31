"use strict";

fetch('https://api.publicapis.org/entries').then(function (response) {
  return response.json();
}).then(function (result) {
  var titlesSelect = document.getElementById('titles');
  var catogoriesSelect = document.getElementById('categories');

  for (var i = 10; i < 1000; i += 30) {
    var element = result.entries[i];
    console.log(element);
    var title = document.createElement('option');
    title.value = element.Description;
    title.innerText = title.value;
    titlesSelect.appendChild(title);
    var catogory = document.createElement('option');
    catogory.value = element.Category;
    catogory.innerText = catogory.value;
    catogoriesSelect.appendChild(catogory);
  }
})["catch"](function (err) {
  var error = document.createElement('div');
  error.innerText = err;
  document.body.appendChild(error);
});