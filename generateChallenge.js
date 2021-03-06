function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateChallenge(){
  var form = document.forms[0];
  var perso = ["Isaac"]
  let raw_perso = form.getElementsByClassName("perso");
  for(let i=0;i<raw_perso.length;i++){
    if(raw_perso[i].checked){
      perso.push(raw_perso[i].name);
    }
  }
  let raw_tainted = form.getElementsByClassName("tainted");
  for(let i=0;i<raw_tainted.length;i++){
    if(raw_tainted[i].checked){
      perso.push(raw_tainted[i].name);
    }
  }
  if(perso.length == 0){
    alert("You haven't selected any character");
    return;
  }
  var bosses = ["Mom's foot","Mom's heart","Boss Rush","Ultra Greed"]
  let raw_bosses = form.getElementsByClassName("boss");
  for(let i=0;i<raw_bosses.length;i++){
    if(raw_bosses[i].checked){
      bosses.push(raw_bosses[i].name);
    }
  }
  if(bosses.length == 0){
    alert("You haven't selected any boss");
    return;
  }

  let index_perso = getRandomInt(perso.length);
  let index_boss = getRandomInt(bosses.length);

  let character = perso[index_perso];
  let boss = bosses[index_boss];
  add(character,boss);
}

function add(character, boss){
  let table = document.getElementById('challenges');

  let createdElement = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.textContent = "Beat " + boss + " with " + character;
  createdElement.appendChild(td1);
  table.appendChild(createdElement);
}

function removeAll(){
  let table = document.getElementById('challenges')
  table.innerHTML = null
}

function uncheckHidden(){
  let ab = document.getElementById("ab");
  let abplus = document.getElementById("ab+");
  let rep = document.getElementById("repentance");
  let abs = document.getElementsByClassName("ab");
  let abpluss = document.getElementsByClassName("abp");
  let reps = document.getElementsByClassName("repent");
  if (!(ab.checked || abplus.checked || rep.checked)){
    for (var i = 0; i < abs.length; i++) {
      abs[i].checked = false;
    }
  }
  if (!(abplus.checked || rep.checked)){
    for (var i = 0; i < abpluss.length; i++) {
      abpluss[i].checked = false;
    }
  }
  if (!rep.checked){
    for (var i = 0; i < reps.length; i++) {
      reps[i].checked = false;
    }
  }
}

function birth(){
  let ab = document.getElementById("ab");
  let abplus = document.getElementById("ab+");
  let rep = document.getElementById("repentance");
  let abs = document.getElementsByClassName("ab");
  let abpluss = document.getElementsByClassName("abp");
  let reps = document.getElementsByClassName("repent");
  for (var i = 0; i < abs.length; i++) {
    abs[i].style.display = "none";
  }
   for (var i = 0; i < abpluss.length; i++) {
    abpluss[i].style.display = "none";
  }
   for (var i = 0; i < reps.length; i++) {
    reps[i].style.display = "none";
  }
  if (ab.checked || abplus.checked || rep.checked){
    for (var i = 0; i < abs.length; i++) {
      abs[i].style.display = "inline";
    }
  }
  if (abplus.checked || rep.checked){
    for (var i = 0; i < abpluss.length; i++) {
      abpluss[i].style.display = "inline";
    }
  }
  if (rep.checked){
    for (var i = 0; i < reps.length; i++) {
      reps[i].style.display = "inline";
    }
  }
  uncheckHidden();
}

function checkAllbyClass(className,buttonId){
  let list_elements = document.getElementsByClassName(className);
  let value = document.getElementById(buttonId).checked ? true : false;
  for (let i = 0; i < list_elements.length; i++) {
    list_elements[i].checked = value;
  }
  uncheckHidden();
}
