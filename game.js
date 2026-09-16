const emojis = { 'Pierre':'✊', 'Papier':'✋', 'Ciseaux':'✌️' };
const choix = ['Pierre','Papier','Ciseaux'];
let sj = 0, so = 0;

function play(jour){
  const ordinateur = choix[Math.floor(Math.random()*choix.length)];

  document.getElementById('youSlot').textContent = emojis[jour];
  document.getElementById('pcSlot').textContent = emojis[ordinateur];

  const resultEl = document.getElementById('resultText');
  resultEl.className = 'result';

  let outcome;
  if (jour === ordinateur){
    outcome = 'tie';
    resultEl.textContent = 'Égalité !';
  } else if (
    (jour === 'Pierre' && ordinateur === 'Ciseaux') ||
    (jour === 'Papier' && ordinateur === 'Pierre') ||
    (jour === 'Ciseaux' && ordinateur === 'Papier')
  ){
    outcome = 'win';
    sj++;
    resultEl.textContent = '🎉 Vous gagnez !';
  } else {
    outcome = 'lose';
    so++;
    resultEl.textContent = '💻 L\'ordinateur gagne !';
  }

  resultEl.classList.add(outcome);
  document.getElementById('scoreYou').textContent = sj;
  document.getElementById('scorePc').textContent = so;

  const slot = outcome === 'lose' ? document.getElementById('pcSlot') : document.getElementById('youSlot');
  slot.classList.remove('shake');
  void slot.offsetWidth;
  slot.classList.add('shake');
}

function resetScore(){
  sj = 0; so = 0;
  document.getElementById('scoreYou').textContent = 0;
  document.getElementById('scorePc').textContent = 0;
  document.getElementById('youSlot').textContent = '❓';
  document.getElementById('pcSlot').textContent = '❓';
  document.getElementById('resultText').textContent = '';
}