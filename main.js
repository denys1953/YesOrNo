let par = document.getElementById('par')
let inp = document.getElementById('inp')
let arr = ['Yes', 'No'];
document.onclick = function() {
  setTimeout(function() {
    if (inp.value.length-1 == '?') {
      let rand = arr[Math.floor(Math.random()*arr.length)];
      par.innerHTML = rand;
    } else {
      par.innerHTML = 'Вопросы должны заканчиваться знаком вопроса!'
    }
  }, 500);
}
inp.onkeydown = function(e) {
  console.log(e);
  setTimeout(function() {
    if (e.key == "?" || e.which == 191) {
      let rand = arr[Math.floor(Math.random()*arr.length)];
      par.innerHTML = rand;
    } else {
      par.innerHTML = 'Вопросы должны заканчиваться знаком вопроса!'
    }
  }, 500);
}

