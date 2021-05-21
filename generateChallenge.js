function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateChallenge(){
  var form = document.getElementById('form_id');
  var perso = form.elements;

  let index_perso = getRandomInt(perso.length);
  let index_boss = getRandomInt(bosses.length);

  
}
